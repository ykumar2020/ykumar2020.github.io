import collaborators from '../data/collaborators.json';
import publications from '../data/publications.json';

const SVG_NS = 'http://www.w3.org/2000/svg';

export function createCollaborationNetwork(_stage, _inspect) {
  let records = [];
  let people = [];
  let selected = '';
  let onPick;
  let activePaper;

  const panel = document.querySelector('#knowledge-panel');
  const host = document.querySelector('#network-scene');
  const picker = panel.querySelector('#collaborator-select');
  const detail = panel.querySelector('#collaborator-detail');
  const fallback = host.querySelector('.network-fallback');
  const controls = panel.querySelector('[data-controls="network-scene"]');
  const map = document.createElement('div');
  const links = document.createElementNS(SVG_NS, 'svg');
  const nodes = document.createElement('div');
  const selectionLabel = document.createElement('p');

  map.className = 'collaboration-map';
  links.classList.add('collaboration-links');
  links.setAttribute('viewBox', '0 0 1000 700');
  links.setAttribute('preserveAspectRatio', 'none');
  links.setAttribute('aria-hidden', 'true');
  nodes.className = 'collaboration-overlay';
  selectionLabel.className = 'collaboration-selection-label';
  selectionLabel.setAttribute('aria-live', 'polite');
  map.append(links, nodes, selectionLabel);
  host.append(map);
  if (fallback) fallback.hidden = true;
  if (controls) controls.hidden = true;
  host.dataset.state = 'ready';
  host.dataset.renderer = 'dom-radial-evidence-tree';

  const short = {
    'Trustworthy AI': 'Trustworthy AI',
    'Agentic AI': 'Agentic AI',
    'Multimodal AI': 'Multimodal AI',
    Education: 'Computing education',
    'AI Systems': 'AI systems',
    Algorithms: 'Algorithms',
  };
  const colors = {
    'Trustworthy AI': '#ff4968',
    'Agentic AI': '#ff9a62',
    'Multimodal AI': '#8da9ff',
    Education: '#63d8dd',
    'AI Systems': '#d28cff',
    Algorithms: '#ffd166',
  };

  function el(tag, text, className) {
    const element = document.createElement(tag);
    if (text !== undefined && text !== null) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).map((part) => part[0]).slice(0, 2).join('');
  }

  function nodeSize(count, maximum) {
    const scale = Math.log1p(count) / Math.log1p(Math.max(1, maximum));
    return Math.round(30 + scale * 64);
  }

  function radialPositions(count) {
    const rings = [10, 16, 22, 28, 24];
    const radii = [110, 190, 270, 330, 382];
    const vertical = [82, 142, 205, 255, 294];
    const positions = [];
    let cursor = 0;
    rings.forEach((capacity, ring) => {
      const used = Math.min(capacity, Math.max(0, count - cursor));
      for (let index = 0; index < used; index += 1) {
        const angle = -Math.PI / 2 + (index / used) * Math.PI * 2 + ring * 0.17;
        positions.push({x: 500 + Math.cos(angle) * radii[ring], y: 350 + Math.sin(angle) * vertical[ring]});
      }
      cursor += used;
    });
    return positions;
  }

  function addLine(person, point, maximum) {
    const line = document.createElementNS(SVG_NS, 'line');
    const count = person.papers.length;
    line.setAttribute('x1', '500');
    line.setAttribute('y1', '350');
    line.setAttribute('x2', String(point.x));
    line.setAttribute('y2', String(point.y));
    line.setAttribute('stroke', colors[person.topics[0]] || '#ff4968');
    line.setAttribute('stroke-width', String((0.7 + (Math.log1p(count) / Math.log1p(maximum)) * 4.3).toFixed(2)));
    line.setAttribute('stroke-opacity', String((0.16 + Math.min(0.5, count / maximum)).toFixed(2)));
    line.dataset.person = person.id;
    links.append(line);
  }

  function addFace(person, point, maximum, center = false) {
    const button = el('button', null, `collaborator-face${center ? ' central-person' : ''}`);
    const disc = el('span', null, 'face-disc');
    const size = center ? 112 : nodeSize(person.papers.length, maximum);
    button.type = 'button';
    button.style.left = `${point.x / 10}%`;
    button.style.top = `${point.y / 7}%`;
    button.style.setProperty('--node-size', `${size}px`);
    button.style.setProperty('--node-color', center ? '#ffd5dc' : colors[person.topics[0]] || '#ff8498');

    if (person.image) {
      const image = new Image();
      image.src = person.image;
      image.alt = '';
      image.addEventListener('error', () => {
        image.remove();
        disc.textContent = initials(person.name);
      });
      disc.append(image);
    } else {
      disc.textContent = initials(person.name);
    }

    button.append(disc, el('span', person.name, 'face-name'), el('span', center ? 'Central author' : `${person.papers.length} shared`, 'face-count'));
    if (center) {
      button.setAttribute('aria-label', 'Julie Kumar, central author');
      button.addEventListener('click', () => document.querySelector('#home').scrollIntoView({behavior: 'smooth'}));
    } else {
      button.dataset.person = person.id;
      button.setAttribute('aria-label', `${person.name}: ${person.papers.length} shared bibliography records`);
      button.setAttribute('aria-pressed', String(person.id === selected));
      button.addEventListener('click', () => choose(person.id));
    }
    nodes.append(button);
  }

  function publicSearch(person) {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(`author:"${person.name}"`)}`;
  }

  function showDetail() {
    detail.replaceChildren();
    const person = people.find((entry) => entry.id === selected);
    if (!person) {
      detail.textContent = 'No explicitly listed coauthors match these filters.';
      selectionLabel.textContent = '';
      return;
    }

    detail.append(el('h4', person.name), el('p', `${person.papers.length} matching bibliography records · ${person.topics.map((topic) => short[topic]).join(' / ')}`));
    selectionLabel.textContent = `${person.name} · ${person.papers.length} shared records · ${person.topics.map((topic) => short[topic]).join(' / ')}`;

    if (person.profile) {
      const profile = el('a', 'Official profile / portrait source ↗');
      profile.href = person.profile;
      profile.target = '_blank';
      profile.rel = 'noopener';
      detail.append(profile);
    } else if (person.image) {
      detail.append(el('p', person.photoAttribution || 'Portrait supplied with attribution.'));
    } else {
      detail.append(el('p', 'Initials shown because no identity-verified public portrait is attached.'));
    }

    const scholar = el('a', person.scholar ? 'Google Scholar profile ↗' : 'Search public scholarly records for this name ↗');
    scholar.href = person.scholar || publicSearch(person);
    scholar.target = '_blank';
    scholar.rel = 'noopener';
    detail.append(scholar);
    if (!person.scholar) detail.append(el('p', 'Name search provided for discovery; it is not asserted as a verified identity profile.', 'identity-boundary'));

    const list = el('ul');
    for (const id of person.papers) {
      const record = publications.find((publication) => publication.id === id);
      if (!record) continue;
      const item = el('li');
      const button = el('button', `${record.year} · ${record.title}`);
      button.type = 'button';
      button.addEventListener('click', () => {
        onPick?.(id);
        highlight(id);
      });
      item.append(button);
      if (record.url) {
        const source = el('a', `${record.linkLabel || 'Open public source'} ↗`);
        source.href = record.url;
        source.target = '_blank';
        source.rel = 'noopener';
        item.append(source);
      }
      list.append(item);
    }
    detail.append(list);
  }

  function choose(id) {
    selected = id;
    picker.value = id;
    nodes.querySelectorAll('[data-person]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.person === id)));
    links.querySelectorAll('[data-person]').forEach((line) => line.classList.toggle('selected-edge', line.dataset.person === id));
    showDetail();
  }

  function visiblePeople() {
    const visible = people.slice(0, 100);
    const selectedPerson = people.find((person) => person.id === selected);
    if (selectedPerson && !visible.some((person) => person.id === selectedPerson.id) && visible.length) visible[visible.length - 1] = selectedPerson;
    return visible;
  }

  function render() {
    nodes.replaceChildren();
    links.replaceChildren();
    const visible = visiblePeople();
    const maximum = Math.max(1, ...people.map((person) => person.papers.length));
    const positions = radialPositions(visible.length);

    host.dataset.records = String(records.length);
    host.dataset.people = String(people.length);
    host.dataset.visiblePeople = String(visible.length);
    panel.querySelector('#network-legend').textContent = 'Node area and edge width scale with shared bibliography-record count. Color shows the first matching research topic. Portraits appear only when an attributed public or user-supplied image is recorded.';
    panel.querySelector('#collaboration-count').textContent = people.length ? `Showing ${visible.length} of ${people.length} coauthor entries in one tree. Use the selector to inspect every person. Counts refer to bibliography records, including versions.` : 'No matching coauthor entries.';

    visible.forEach((person, index) => addLine(person, positions[index], maximum));
    visible.forEach((person, index) => addFace(person, positions[index], maximum));
    addFace({name: 'Julie Kumar', papers: records, topics: [], image: 'assets/julie-atrium.webp'}, {x: 500, y: 350}, maximum, true);
    highlight(activePaper);
    choose(selected || visible[0]?.id || '');
  }

  function highlight(id) {
    activePaper = id;
    nodes.querySelectorAll('[data-person]').forEach((button) => {
      const person = people.find((entry) => entry.id === button.dataset.person);
      button.classList.toggle('paper-coauthor', Boolean(person?.papers.includes(id)));
    });
  }

  picker.addEventListener('change', () => {
    selected = picker.value;
    render();
  });
  panel.querySelectorAll('[data-people]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Math.max(0, people.findIndex((person) => person.id === selected));
      const direction = button.dataset.people === 'next' ? 1 : -1;
      selected = people[(index + direction + people.length) % people.length]?.id || '';
      picker.value = selected;
      render();
    });
  });

  return {
    highlight,
    setRecords(matches, callback) {
      records = matches;
      onPick = callback;
      const ids = new Set(matches.map((publication) => publication.id));
      people = collaborators.people.map((person) => {
        const papers = person.papers.filter((id) => ids.has(id));
        return {...person, papers, topics: [...new Set(papers.map((id) => publications.find((publication) => publication.id === id)?.topic).filter(Boolean))]};
      }).filter((person) => person.papers.length).sort((a, b) => b.papers.length - a.papers.length || Number(Boolean(b.image)) - Number(Boolean(a.image)) || a.name.localeCompare(b.name));

      if (!people.some((person) => person.id === selected)) selected = people[0]?.id || '';
      picker.replaceChildren(...people.map((person) => {
        const option = el('option', `${person.name} (${person.papers.length})`);
        option.value = person.id;
        return option;
      }));
      picker.value = selected;
      render();
    },
  };
}
