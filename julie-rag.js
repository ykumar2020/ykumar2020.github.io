(() => {
  'use strict';

  const trigger = document.querySelector('.julie-greeting');
  if (!trigger) return;

  const stopWords = new Set('a an and are as at be been by can do for from has have how i in is it me my of on or our that the their them there they this to was were what when where which who why will with you your about'.split(' '));
  const escapeHtml = value => value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const tokens = value => (value.toLowerCase().match(/[a-z0-9][a-z0-9+.#-]{1,}/g) || []).filter(token => !stopWords.has(token));
  const compact = value => value.replace(/\s+/g, ' ').trim();
  const sentenceCut = (value, limit = 430) => {
    const clean = compact(value);
    if (clean.length <= limit) return clean;
    const candidate = clean.slice(0, limit);
    const end = Math.max(candidate.lastIndexOf('. '), candidate.lastIndexOf('; '));
    return `${candidate.slice(0, end > 150 ? end + 1 : limit).trim()}…`;
  };

  function buildCorpus() {
    const selectors = [
      '#home .hero-copy', '#highlights article', '#research article', '#research .skill-detail', '#research .research-program', '#research .research-selected li',
      '#publications .paper', '#projects article', '#teaching .teaching-case',
      '#about .about-body', '#experience .timeline-item', '#service article',
      '#work-with-me article', '#work-with-me .inquiry-checklist'
    ];
    const nodes = [...document.querySelectorAll(selectors.join(','))];
    const seen = new Set();
    return nodes.map((node, index) => {
      const section = node.closest('[id]');
      const heading = node.querySelector('h1,h2,h3,h4') || section?.querySelector('h2');
      const title = compact(heading?.innerText || heading?.textContent || section?.id || `Profile item ${index + 1}`);
      const text = compact(node.innerText || node.textContent || '');
      const key = `${title}|${text}`;
      if (text.length < 35 || seen.has(key)) return null;
      seen.add(key);
      return { id: section?.id || 'home', title, text, terms: tokens(`${title} ${text}`), node };
    }).filter(Boolean);
  }

  let corpus = buildCorpus();
  const documentFrequency = new Map();
  corpus.forEach(doc => new Set(doc.terms).forEach(term => documentFrequency.set(term, (documentFrequency.get(term) || 0) + 1)));
  const averageLength = corpus.reduce((sum, doc) => sum + doc.terms.length, 0) / Math.max(1, corpus.length);

  function retrieve(question, limit = 3) {
    const query = tokens(question);
    const expanded = new Set(query);
    const normalizedQuestion = question.toLowerCase();
    const preferredSections = new Set();
    if (/research|ai|artificial|model|rag|security|trust|paper|publication/.test(normalizedQuestion)) ['highlights', 'research', 'publications'].forEach(id => preferredSections.add(id));
    if (/teach|course|student|class|education|youtube|video/.test(normalizedQuestion)) ['teaching', 'julie-apps'].forEach(id => preferredSections.add(id));
    if (/degree|education|background|experience|career|job|work/.test(normalizedQuestion)) ['about', 'experience'].forEach(id => preferredSections.add(id));
    if (/collaborat|contact|email|mentor|opportun/.test(normalizedQuestion)) ['work-with-me', 'contact'].forEach(id => preferredSections.add(id));
    if (/project|application|app|software|tool/.test(normalizedQuestion)) ['flagships', 'projects', 'julie-apps'].forEach(id => preferredSections.add(id));
    const synonyms = {
      job:['lecturer','kean','experience'], work:['research','projects'], study:['education','rutgers','degree'],
      teach:['teaching','course','students'], contact:['email','collaboration','inquiry'], ai:['artificial','model','agentic'],
      youtube:['learn','video','teaching'], publish:['paper','publication','venue'], weather:['forecast','weather'],
      julie:['yulia','kumar'], yulia:['julie','kumar']
    };
    query.forEach(term => (synonyms[term] || []).forEach(extra => expanded.add(extra)));
    const ranked = corpus.map(doc => {
      const counts = new Map();
      doc.terms.forEach(term => counts.set(term, (counts.get(term) || 0) + 1));
      let score = 0;
      expanded.forEach(term => {
        const tf = counts.get(term) || 0;
        if (!tf) return;
        const df = documentFrequency.get(term) || 0;
        const idf = Math.log(1 + ((corpus.length - df + .5) / (df + .5)));
        score += idf * ((tf * 2.2) / (tf + 1.2 * (.25 + .75 * doc.terms.length / Math.max(1, averageLength))));
        if (doc.title.toLowerCase().includes(term)) score += 1.8;
      });
      if (preferredSections.has(doc.id)) score += 4.5;
      return { ...doc, score };
    }).filter(doc => doc.score > .18).sort((a, b) => b.score - a.score);
    const scoped = preferredSections.size ? ranked.filter(doc => preferredSections.has(doc.id)) : ranked;
    return (scoped.length ? scoped : ranked).slice(0, limit);
  }

  function answer(question) {
    const normalized = question.toLowerCase();
    if (/^(hi|hello|hey|good morning|good afternoon)\b/.test(normalized)) {
      return { text: 'Hello! I can help you explore Yulia Kumar’s research, publications, teaching, projects, background, or ways to collaborate. What would you like to know?', sources: [] };
    }
    const matches = retrieve(question);
    if (!matches.length) {
      return { text: 'I could not find a well-supported answer in the material published on this site. Try asking about Yulia’s research, publications, teaching, projects, education, collaborators, or contact information.', sources: [] };
    }
    const passages = matches.slice(0, 2).map(match => `${match.title}: ${sentenceCut(match.text.replace(match.title, ''), 300)}`);
    return {
      text: passages.join('\n\n'),
      sources: matches.map(match => ({ title: match.title, href: `#${match.id}` })).filter((source, index, all) => all.findIndex(item => item.href === source.href && item.title === source.title) === index)
    };
  }

  const backdrop = document.createElement('div');
  backdrop.className = 'julie-rag-backdrop';
  const dialog = document.createElement('section');
  dialog.className = 'julie-rag-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'julie-rag-title');
  dialog.setAttribute('aria-hidden', 'true');
  dialog.innerHTML = `
    <header class="julie-rag-head">
      <img src="assets/julie-role-studio-v2.webp" alt="" width="640" height="960">
      <div class="julie-rag-title"><strong id="julie-rag-title">Ask Julie</strong><span>LOCAL RAG · SITE-GROUNDED</span></div>
      <button class="julie-rag-close" type="button" aria-label="Close Ask Julie">×</button>
    </header>
    <div class="julie-rag-log" role="log" aria-live="polite" aria-relevant="additions"></div>
    <div class="julie-rag-chips" aria-label="Suggested questions">
      <button class="julie-rag-chip" type="button">What does Yulia research?</button>
      <button class="julie-rag-chip" type="button">What does she teach?</button>
      <button class="julie-rag-chip" type="button">Show recent publications</button>
      <button class="julie-rag-chip" type="button">How can I collaborate?</button>
    </div>
    <form class="julie-rag-form">
      <button class="julie-rag-icon julie-rag-mic" type="button" aria-label="Ask with microphone" title="Voice input availability depends on your browser">🎙</button>
      <input class="julie-rag-input" name="question" autocomplete="off" maxlength="300" aria-label="Question about Yulia Kumar" placeholder="Ask about research, teaching, projects…">
      <button class="julie-rag-send" type="submit">Send</button>
      <button class="julie-rag-icon julie-rag-voice" type="button" aria-label="Read answers aloud" aria-pressed="false">🔊</button>
      <p class="julie-rag-note">Retrieval and response assembly run in this browser from published site content. Voice services depend on browser support.</p>
    </form>`;
  document.body.append(backdrop, dialog);

  const log = dialog.querySelector('.julie-rag-log');
  const form = dialog.querySelector('form');
  const input = dialog.querySelector('input');
  const closeButton = dialog.querySelector('.julie-rag-close');
  const voiceButton = dialog.querySelector('.julie-rag-voice');
  const micButton = dialog.querySelector('.julie-rag-mic');
  let returnFocus = trigger;
  let speakAnswers = false;

  function addMessage(speaker, text, sources = []) {
    const message = document.createElement('div');
    message.className = 'julie-rag-message';
    message.dataset.speaker = speaker;
    message.textContent = text;
    if (sources.length) {
      const sourceList = document.createElement('div');
      sourceList.className = 'julie-rag-sources';
      sources.forEach(source => {
        const link = document.createElement('a');
        link.href = source.href;
        link.textContent = `Source: ${source.title} ↗`;
        link.addEventListener('click', close);
        sourceList.append(link);
      });
      message.append(sourceList);
    }
    log.append(message);
    log.scrollTop = log.scrollHeight;
  }

  function speak(text) {
    if (!speakAnswers || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = .96;
    utterance.pitch = 1.03;
    window.speechSynthesis.speak(utterance);
  }

  function ask(question) {
    const clean = compact(question);
    if (!clean) return;
    addMessage('visitor', clean);
    input.value = '';
    const result = answer(clean);
    window.setTimeout(() => {
      addMessage('julie', result.text, result.sources);
      speak(result.text);
    }, 180);
  }

  function open() {
    returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;
    backdrop.classList.add('is-open');
    dialog.classList.add('is-open');
    dialog.setAttribute('aria-hidden', 'false');
    document.body.classList.add('julie-rag-open');
    if (!log.children.length) addMessage('julie', 'Hi! I am Julie, a local retrieval assistant for this site. Ask me about Yulia’s research, publications, teaching, projects, or background. My answers are assembled only from material published here.');
    window.setTimeout(() => input.focus(), 40);
  }

  function close() {
    backdrop.classList.remove('is-open');
    dialog.classList.remove('is-open');
    dialog.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('julie-rag-open');
    window.speechSynthesis?.cancel?.();
    returnFocus?.focus?.();
  }

  trigger.addEventListener('click', open);
  backdrop.addEventListener('click', close);
  closeButton.addEventListener('click', close);
  form.addEventListener('submit', event => { event.preventDefault(); ask(input.value); });
  dialog.querySelectorAll('.julie-rag-chip').forEach(button => button.addEventListener('click', () => ask(button.textContent)));
  voiceButton.addEventListener('click', () => {
    speakAnswers = !speakAnswers;
    voiceButton.setAttribute('aria-pressed', String(speakAnswers));
    voiceButton.textContent = speakAnswers ? '🔈' : '🔊';
    if (speakAnswers) speak('Voice answers are on.'); else window.speechSynthesis?.cancel?.();
  });

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (Recognition) {
    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.addEventListener('start', () => micButton.setAttribute('aria-pressed', 'true'));
    recognition.addEventListener('end', () => micButton.setAttribute('aria-pressed', 'false'));
    recognition.addEventListener('result', event => { input.value = event.results[0][0].transcript; ask(input.value); });
    micButton.addEventListener('click', () => recognition.start());
  } else {
    micButton.hidden = true;
    form.style.gridTemplateColumns = '1fr auto';
  }

  document.addEventListener('keydown', event => {
    if (!dialog.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('button:not([hidden]),input,a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  window.__julieRag = { answer, retrieve, corpusSize: corpus.length, open, close };
})();
