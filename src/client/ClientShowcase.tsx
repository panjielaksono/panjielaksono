import { useState } from 'react';
import { BookOpen, Camera, ChevronRight, Clock3, Eye, Home, Image, ScanLine, ShieldCheck } from 'lucide-react';

type Project = 'food' | 'eye';
type Screen = 'home' | 'scan' | 'learn';

const project: Project = new URLSearchParams(window.location.search).get('project') === 'eye' ? 'eye' : 'food';

const details = {
  food: {
    label: 'FOOD QUALITY CAMERA',
    title: 'A camera-first food quality concept.',
    description: 'A Flutter prototype that explores image capture, illustrative quality feedback, and food-handling education in one mobile flow.',
    features: ['Camera and gallery entry points', 'Illustrative result sheet', 'Education and handling guide'],
    stack: 'Flutter / Dart / Camera / Image Picker',
    limitation: 'This browser preview does not analyze food. The source prototype uses sample results and a simple live color heuristic; it is not a food safety test.',
  },
  eye: {
    label: 'EYE SCREENING WORKFLOW',
    title: 'Mobile capture meets hosted AI analysis.',
    description: 'A Flutter app integrated with YOLO-based AI inference hosted on Hugging Face. It sends an eye image for analysis of an arcus senilis cue and displays an experimental cholesterol estimate alongside session history.',
    features: ['Guided eye-image capture', 'YOLO inference hosted on Hugging Face', 'Experimental estimate and session history'],
    stack: 'Flutter / Dart / YOLO / Hugging Face / Isar',
    limitation: 'The eye-image estimate is experimental, not a measured cholesterol level or a diagnosis. This browser preview uses fictional records and has no model, camera, or account connection.',
  },
};

const foodSamples = [
  { id: 'DEMO-F01', title: 'Sample photo 01', date: '12 Oct 2026', category: 'Bright color cue', detail: 'Illustrative red and pink tones', source: 'Gallery example' },
  { id: 'DEMO-F02', title: 'Sample photo 02', date: '10 Oct 2026', category: 'Pale color cue', detail: 'Illustrative lighter tones', source: 'Camera example' },
  { id: 'DEMO-F03', title: 'Sample photo 03', date: '08 Oct 2026', category: 'Dark color cue', detail: 'Illustrative darker tones', source: 'Gallery example' },
];

const eyeSamples = [
  { id: 'DEMO-E01', title: 'Sample session 01', date: '14 Oct 2026', category: 'Single-eye flow', detail: 'Example review layout ready', source: 'Synthetic capture' },
  { id: 'DEMO-E02', title: 'Sample session 02', date: '11 Oct 2026', category: 'Dual-eye flow', detail: 'Example comparison layout ready', source: 'Synthetic capture' },
  { id: 'DEMO-E03', title: 'Sample session 03', date: '06 Oct 2026', category: 'Single-eye flow', detail: 'Example review layout ready', source: 'Synthetic capture' },
];

function Phone({ kind, screen, onScreenChange }: { kind: Project; screen: Screen; onScreenChange: (screen: Screen) => void }) {
  const food = kind === 'food';
  const [sampleIndex, setSampleIndex] = useState(0);
  const samples = food ? foodSamples : eyeSamples;
  const sample = samples[sampleIndex];
  return <div className={`client-phone client-phone--${kind}`} aria-label="Synthetic mobile interface preview">
    <div className="client-phone-status"><span>9:41</span><span>●●● ▰</span></div>
    <div className="client-phone-body">
      <div className="client-phone-heading"><span>{food ? 'Quality Camera' : 'Vision Companion'}</span><span className="client-phone-avatar"><ShieldCheck size={16} /></span></div>
      {screen === 'home' && <>
        <div className="client-phone-welcome"><small>PRIVATE PROJECT / DEMO</small><h3>{food ? 'Explore a sample scan flow.' : 'A clearer view of each session.'}</h3><p>{food ? 'Start with a camera or gallery entry point.' : 'Review a guided capture and sample history layout.'}</p></div>
        <div className="client-phone-hero-icon">{food ? <ScanLine size={62} strokeWidth={1.3} /> : <Eye size={66} strokeWidth={1.3} />}</div>
        <button type="button" className="client-phone-primary" onClick={() => onScreenChange('scan')}><Camera size={17} /> {food ? 'Open scan preview' : 'Open capture preview'} <ChevronRight size={16} /></button>
        <div className="client-phone-tiles"><div><Image size={18} /><span>Gallery flow</span></div><div>{food ? <BookOpen size={18} /> : <Clock3 size={18} />}<span>{food ? 'Education' : 'History view'}</span></div></div>
        <button type="button" className="client-recent-sample" onClick={() => onScreenChange(food ? 'scan' : 'learn')}><span>RECENT DEMO RECORD</span><strong>{samples[0].title}</strong><small>{samples[0].date} · {samples[0].category}</small><ChevronRight size={17} /></button>
      </>}
      {screen === 'scan' && <>
        <div className="client-phone-subhead"><small>02 / CAPTURE FLOW</small><h3>{food ? 'Camera preview' : 'Guided eye capture'}</h3><p>Interface demonstration only</p></div>
        <div className="client-viewfinder"><span className="client-viewfinder-frame" />{food ? <ScanLine size={60} strokeWidth={1} /> : <Eye size={62} strokeWidth={1} />}<small>Camera unavailable in public preview</small></div>
        <div className="client-phone-note"><ShieldCheck size={16} /> No image is captured or uploaded.</div>
        <div className="client-sample-result"><div><span>SYNTHETIC RESULT · {sample.id}</span><strong>{sample.category}</strong><small>{sample.detail}</small></div><p>{sample.source} · {sample.date}</p></div>
        <button type="button" className="client-sample-next" onClick={() => setSampleIndex((sampleIndex + 1) % samples.length)}>Show another demo record →</button>
      </>}
      {screen === 'learn' && <>
        <div className="client-phone-subhead"><small>03 / {food ? 'EDUCATION' : 'HISTORY'}</small><h3>{food ? 'Food handling guide' : 'Session history'}</h3><p>{food ? 'Example guide topics and scan records.' : 'Fictional sessions only. No personal records.'}</p></div>
        {food && <div className="client-guide-card"><BookOpen size={18} /><div><strong>Storage basics</strong><small>Guide module · 3 short topics</small></div></div>}
        <div className="client-phone-list">{samples.map((item, index) => <button type="button" key={item.id} onClick={() => { setSampleIndex(index); onScreenChange('scan'); }}><span>{food ? <ScanLine size={18} /> : <Clock3 size={18} />}</span><div><strong>{item.title}</strong><small>{item.date} · {item.category}</small></div><ChevronRight size={16} /></button>)}</div>
        <p className="client-list-disclaimer">Demo entries are fictional and do not represent an assessment.</p>
      </>}
    </div>
    <div className="client-phone-nav" aria-label="Sample app screens">
      <button type="button" className={screen === 'home' ? 'is-active' : ''} aria-pressed={screen === 'home'} onClick={() => onScreenChange('home')}><Home size={18} />Home</button>
      <button type="button" className={screen === 'scan' ? 'is-active' : ''} aria-pressed={screen === 'scan'} onClick={() => onScreenChange('scan')}><Camera size={18} />Capture</button>
      <button type="button" className={screen === 'learn' ? 'is-active' : ''} aria-pressed={screen === 'learn'} onClick={() => onScreenChange('learn')}>{food ? <BookOpen size={18} /> : <Clock3 size={18} />}{food ? 'Learn' : 'History'}</button>
    </div>
  </div>;
}

export function ClientShowcase() {
  const [screen, setScreen] = useState<Screen>('home');
  const info = details[project];
  return <div className={`client-page client-page--${project}`}>
    <nav className="client-topbar"><a href="index.html#projects">MPL <span>/ SELECTED WORKS</span></a><a href="index.html#projects">← Back to portfolio</a></nav>
    <header className="client-hero">
      <div className="client-hero-copy"><span className="client-kicker">PRIVATE CLIENT WORK / SANITIZED SHOWCASE</span><h1>{info.title}</h1><p>{info.description}</p><a href="#prototype" className="client-hero-link">Explore interface <span>↓</span></a><div className="client-stack">{info.stack}</div></div>
      <figure className="client-hero-art">
        <div className="client-photo-frame"><img src={project === 'food' ? 'client-showcase/chicken-breast.jpg' : 'client-showcase/corneal-arcus.jpg'} alt={project === 'food' ? 'Raw chicken breasts on a plate' : 'Close-up of an eye showing a pale corneal arcus ring'} /></div>
        <figcaption><strong>{project === 'food' ? 'RAW CHICKEN BREAST / REFERENCE PHOTO' : 'ARCUS SENILIS / REFERENCE PHOTO'}</strong><span>Reference image only. No analysis is running.</span>{project === 'food' ? <a href="https://commons.wikimedia.org/wiki/File:Raw_chicken_slices.jpg" target="_blank" rel="noopener noreferrer">Photo: kakyusei · CC0 · Wikimedia Commons ↗</a> : <><a href="https://commons.wikimedia.org/wiki/File:Arcus_Senilis_(cropped).jpg" target="_blank" rel="noopener noreferrer">Photo: Afrodriguezg · Wikimedia Commons ↗</a><a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0 · shown with a CSS crop ↗</a></>}</figcaption>
      </figure>
    </header>
    <main>
      <section className="client-prototype" id="prototype"><div className="client-prototype-copy"><span className="client-section-index">01 / INTERFACE PREVIEW</span><h2>A small, safe slice of the app.</h2><p>Tap through three sample screens. All labels and content here are synthetic; the client identity, user data, and connected services are excluded.</p><div className="client-demo-alert"><ShieldCheck size={20} /><span>{info.limitation}</span></div><div className="client-feature-list">{info.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span>{feature}</div>)}</div></div><div className="client-phone-stage"><Phone kind={project} screen={screen} onScreenChange={setScreen} /></div></section>
      <section className="client-about"><div><span className="client-section-index">02 / PROJECT CONTEXT</span><h2>{project === 'eye' ? 'A mobile and AI system.' : 'Built as a mobile prototype.'}</h2></div><div><p>{project === 'eye' ? 'The original workflow combines Flutter image capture, YOLO-based inference hosted on Hugging Face, result presentation, and local history with optional synchronization. Arcus senilis is used as an image feature for an experimental cholesterol estimate; it cannot replace a blood lipid test. This public version contains no model endpoint, user images, or client branding.' : 'The original Flutter project explores a complete mobile journey from capture to review. This portfolio version recreates only the interaction pattern and visual direction, without source code, production configuration, user images, or client branding.'}</p><a href="index.html#projects">Return to selected works →</a></div></section>
    </main>
    <footer className="client-footer"><span>PRIVATE CLIENT PROJECT / PUBLIC INTERFACE STUDY</span><a href="index.html#projects">Back to projects ↑</a></footer>
  </div>;
}
