'use strict';
(() => {
  const pipeline = document.querySelector('.project-pipeline');
  if (!pipeline) return;
  const visual = pipeline.querySelector('.pipeline-visual');
  const viewport = pipeline.querySelector('.pipeline-viewport');
  const buttons = [...pipeline.querySelectorAll('[data-pipeline-step]')];
  const motionButton = pipeline.querySelector('.pipeline-motion');
  const detail = pipeline.querySelector('.pipeline-detail');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const stages = [
    ['Source records', 'Papers, datasets, code repositories, experiment captures, and teaching artifacts enter with their public identifiers intact.', ['Public source', 'Stable identifier', 'Original artifact']],
    ['Evidence layer', 'Records are normalized while provenance, transformations, authorship, and links to supporting artifacts remain visible.', ['Provenance', 'Normalization', 'Traceable links']],
    ['Graph model', 'People, publications, topics, datasets, and tools become typed nodes connected by evidence-backed relationships.', ['Typed nodes', 'Named edges', 'Evidence links']],
    ['Graph analysis', 'The graph supports collaborator, topic, coverage, and dependency views without replacing the underlying records.', ['Relationships', 'Coverage', 'Dependencies']],
    ['Inspectable results', 'Interactive graphs, project cards, tables, and linked artifacts expose both the result and the source behind it.', ['Visual result', 'Exact record', 'Public link']]
  ];
  let active = 0;
  let paused = reduced.matches;
  let visible = false;
  let timer = 0;

  function render(index, focus = false) {
    active = (index + stages.length) % stages.length;
    visual.dataset.active = String(active);
    buttons.forEach((button, i) => {
      button.setAttribute('aria-selected', String(i === active));
      button.tabIndex = i === active ? 0 : -1;
    });
    const [title, copy, tags] = stages[active];
    detail.querySelector('.pipeline-index').textContent = `STAGE ${String(active + 1).padStart(2, '0')}`;
    detail.querySelector('h4').textContent = title;
    detail.querySelector('p').textContent = copy;
    detail.querySelector('ul').replaceChildren(...tags.map(tag => Object.assign(document.createElement('li'), {textContent: tag})));
    if (viewport.scrollWidth > viewport.clientWidth) viewport.scrollTo({left: (viewport.scrollWidth - viewport.clientWidth) * active / (stages.length - 1), behavior: reduced.matches ? 'auto' : 'smooth'});
    if (focus) buttons[active].focus();
  }

  function syncMotion() {
    clearInterval(timer);
    pipeline.classList.toggle('is-paused', paused);
    if (typeof visual.pauseAnimations === 'function') paused ? visual.pauseAnimations() : visual.unpauseAnimations();
    motionButton.textContent = paused ? 'Play pipeline' : 'Pause pipeline';
    motionButton.setAttribute('aria-pressed', String(paused));
    if (!paused && visible && !document.hidden) timer = setInterval(() => render(active + 1), 2600);
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => render(index));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') render(0, true);
      else if (event.key === 'End') render(stages.length - 1, true);
      else render(active + (event.key === 'ArrowRight' ? 1 : -1), true);
    });
  });
  motionButton.addEventListener('click', () => { paused = !paused; syncMotion(); });
  pipeline.addEventListener('pointerenter', () => clearInterval(timer));
  pipeline.addEventListener('pointerleave', syncMotion);
  pipeline.addEventListener('focusin', () => clearInterval(timer));
  pipeline.addEventListener('focusout', event => { if (!pipeline.contains(event.relatedTarget)) syncMotion(); });
  reduced.addEventListener?.('change', () => { paused = reduced.matches; syncMotion(); });
  document.addEventListener('visibilitychange', syncMotion);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncMotion(); }, {threshold: .2}).observe(pipeline);
  render(0);
  syncMotion();
})();
