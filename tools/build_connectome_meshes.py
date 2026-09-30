"""Download public surface meshes and export bounded, attributed WebGL subsets.

Install: pip install cloud-volume trimesh fast-simplification pandas requests
Run from the repository root: python tools/build_connectome_meshes.py
Raw downloads are cached under gitignored qa/. No account or token is used.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib, json, importlib.metadata
import numpy as np
import pandas as pd
import requests
import trimesh
from cloudvolume import CloudVolume

ROOT=Path(__file__).resolve().parents[1]
CACHE=ROOT/'qa/connectome-meshes';CACHE.mkdir(parents=True,exist_ok=True)
OUT=ROOT/'assets/connectomes';OUT.mkdir(parents=True,exist_ok=True)
H01_STATE='https://storage.googleapis.com/h01-release/assets/neuroglancer_states/20210601/proofread104_library.json'
FLY_ANNOTATIONS='https://raw.githubusercontent.com/flyconnectome/flywire_annotations/main/supplemental_files/Supplemental_file1_neuron_annotations.tsv'
PALETTE=['#00cfff','#ff52c8','#8def6b','#ffe35c','#ff765e','#6b9fff','#bc77ff','#58f1c9','#ffa649','#f48caf','#acdeff','#b9ee6a']

def fetch(url,path):
    if not path.exists():
        r=requests.get(url,timeout=90);r.raise_for_status();path.write_bytes(r.content)
    return path.read_bytes()

state_bytes=fetch(H01_STATE,CACHE/'h01-state.json')
state=json.loads(state_bytes)
human_ids=sorted(int(i) for layer in state['layers'] if layer.get('name')=='proofread 104 cells' for i in layer['segments'])[:8]
annotation_bytes=fetch(FLY_ANNOTATIONS,CACHE/'flywire-annotations.tsv')
annotations=pd.read_csv(CACHE/'flywire-annotations.tsv',sep='\t',low_memory=False)
fly_rows=annotations[annotations.cell_type.isin(['HSN','HSE','HSS','VS1','VS2','VS3'])].sort_values(['cell_type','side'])
assert len(fly_rows)==12
datasets=[dict(key='human',dataset='H01 proofread_104 / 20210601',url='https://storage.googleapis.com/h01-release/data/20210601/proofread_104',ids=human_ids,
    selection='Eight smallest segment IDs in the official 104-cell library state; a deterministic illustration, not a representative tissue sample.',
    labels={str(i):'H01 cell '+str(i) for i in human_ids},credit='Google Research Connectomics and Lichtman Lab, Harvard University; Shapson-Coe et al., Science (2024).',
    license='CC BY 4.0',licenseUrl='https://creativecommons.org/licenses/by/4.0/',sourcePage='https://h01-release.storage.googleapis.com/data.html',
    selectionSource=H01_STATE,selectionSha256=hashlib.sha256(state_bytes).hexdigest()),
 dict(key='fly',dataset='FlyWire FAFB / materialization 783',url='https://storage.googleapis.com/flywire_v141_m783',ids=[int(i) for i in fly_rows.root_id],
    selection='The bilateral HSE, HSN, HSS, VS1, VS2 and VS3 cells in the published annotation table. Not the 50-largest-neurons media selection.',
    labels={str(r.root_id):f'{r.cell_type} / {r.side}' for r in fly_rows.itertuples()},credit='FlyWire Consortium, Murthy and Seung Labs, Princeton University; Dorkenwald et al. and Schlegel et al., Nature (2024).',
    license='CC BY-NC 4.0',licenseUrl='https://creativecommons.org/licenses/by-nc/4.0/',sourcePage='https://flywire.ai/guidelines',
    selectionSource=FLY_ANNOTATIONS,selectionSha256=hashlib.sha256(annotation_bytes).hexdigest())]

report={'generatedAt':datetime.now(timezone.utc).isoformat(),'method':'Public EM-derived triangulated surfaces. Downloaded LOD 2 (or the coarsest available if fewer LODs). Coincident vertices merged, then quadric decimation toward 30000 faces per cell. No skeleton extrusion or image-derived depth.',
    'limitations':'Simplification can erase spines, boutons and fine branches. Display colors are decorative, not cell type or activity measurements. Subsets do not reproduce either original media illustration. Coordinates are jointly centered and uniformly scaled within each dataset; relative positions are preserved.',
    'packages':{n:importlib.metadata.version(n) for n in ['cloud-volume','trimesh','fast-simplification']},'datasets':[]}
for spec in datasets:
    volume=CloudVolume('precomputed://'+spec['url'],progress=False,parallel=1)
    meshes=[];records=[]
    for seg in spec['ids']:
        cache=CACHE/f"{spec['key']}-{seg}.npz"
        if cache.exists():
            saved=np.load(cache);vertices,faces,lod=saved['vertices'],saved['faces'],int(saved['lod'])
        else:
            manifest=volume.mesh.get_manifest(seg)
            if manifest is None:raise RuntimeError(f'Missing mesh {seg}')
            lod=min(2,manifest.num_lods-1)
            mesh=volume.mesh.get(seg,lod=lod)[seg];vertices,faces=mesh.vertices,mesh.faces
            np.savez_compressed(cache,vertices=vertices,faces=faces,lod=lod)
        assert vertices.ndim==2 and vertices.shape[1]==3 and np.isfinite(vertices).all()
        assert faces.min()>=0 and faces.max()<len(vertices) and np.all(np.ptp(vertices,axis=0)>0)
        mesh=trimesh.Trimesh(vertices=vertices,faces=faces,process=False)
        mesh.merge_vertices()
        if len(faces)>30000:mesh=mesh.simplify_quadric_decimation(face_count=30000,aggression=10)
        assert len(mesh.faces)<=35000, f'Mesh budget exceeded for {seg}'
        records.append({'id':str(seg),'label':spec['labels'][str(seg)],'lod':lod,'downloadedVertices':len(vertices),'downloadedFaces':len(faces),'displayVertices':len(mesh.vertices),'displayFaces':len(mesh.faces),
            'downloadedGeometrySha256':hashlib.sha256(vertices.astype('<f4').tobytes()+faces.astype('<u4').tobytes()).hexdigest()})
        meshes.append(mesh);print(spec['key'],seg,len(faces),'->',len(mesh.faces),flush=True)
    bounds=np.array([m.bounds for m in meshes]);lo=bounds[:,0].min(axis=0);hi=bounds[:,1].max(axis=0);center=(lo+hi)/2;scale=4.0/max(hi-lo)
    scene=trimesh.Scene()
    for mesh,record in zip(meshes,records):
        mesh.vertices=(mesh.vertices-center)*scale
        color=PALETTE[records.index(record)%len(PALETTE)]
        record['displayColor']=color
        mesh.visual=trimesh.visual.TextureVisuals(material=trimesh.visual.material.PBRMaterial(baseColorFactor=[int(color[i:i+2],16) for i in (1,3,5)]+[255],roughnessFactor=.65,metallicFactor=0))
        scene.add_geometry(mesh,node_name='seg_'+record['id'],geom_name='seg_'+record['id'])
    target=OUT/f"{spec['key']}-neurons.glb";target.write_bytes(scene.export(file_type='glb',include_normals=True))
    entry={k:v for k,v in spec.items() if k not in ['ids','labels']}
    entry.update(file=target.name,bytes=target.stat().st_size,sha256=hashlib.sha256(target.read_bytes()).hexdigest(),centerNanometers=center.tolist(),displayUnitsPerNanometer=float(scale),cells=records)
    report['datasets'].append(entry)
    print(target.name,target.stat().st_size,'bytes',flush=True)
(OUT/'meshes.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf8')
