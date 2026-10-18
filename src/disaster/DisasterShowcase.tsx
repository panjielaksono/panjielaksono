import { useState } from 'react';

const categories = [
  { name: 'Damaged Infrastructure', image: 'infras.png', detail: 'Visible damage to buildings, roads, bridges, or other built structures.' },
  { name: 'Fire Disaster', image: 'fire.png', detail: 'Visible fire or smoke in a built or natural environment.' },
  { name: 'Human Damage', image: 'human.png', detail: 'Human impact and emergency response scenes.' },
  { name: 'Land Disaster', image: 'land.png', detail: 'Landslides, ground movement, or other visible land damage.' },
  { name: 'Non Damage', image: 'nonDamage.png', detail: 'Scenes without visible disaster damage.' },
  { name: 'Water Disaster', image: 'water.png', detail: 'Flooding and other visible water-related damage.' },
] as const;

type Model = 'resnet50' | 'vit';

export function DisasterShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [model, setModel] = useState<Model>('resnet50');
  const selected = categories[activeCategory];

  return <div className="disaster-page">
    <nav className="disaster-nav">
      <a className="disaster-wordmark" href="index.html#projects">MPL<span> / PROJECTS</span></a>
      <a className="disaster-back" href="index.html#projects">← Back to portfolio</a>
    </nav>

    <header className="disaster-hero">
      <div className="disaster-hero-image" aria-hidden="true" style={{ backgroundImage: "linear-gradient(90deg,#080f21 0%,#080f21a8 30%,#080f2155 100%),linear-gradient(0deg,#080f2199,#080f2100 50%),url('disaster-showcase/disaster.jpg')" }} />
      <div className="disaster-hero-content">
        <span className="disaster-kicker">COMPUTER VISION / RESEARCH INTERFACE</span>
        <h1>Disaster image <em>analytics</em></h1>
        <p>A visual classification project exploring how ResNet-50 and Vision Transformer models can organize disaster imagery into six categories.</p>
        <a className="disaster-hero-link" href="#workspace">Explore the interface <span>↓</span></a>
      </div>
      <div className="disaster-hero-count"><strong>06</strong><span>IMAGE CATEGORIES</span></div>
    </header>

    <main>
      <section className="disaster-intro" aria-labelledby="disaster-about">
        <div><span className="disaster-label">01 / THE PROJECT</span><h2 id="disaster-about">Making visual evidence easier to review.</h2></div>
        <div className="disaster-intro-copy">
          <p>The source application pairs a React analysis workspace with a FastAPI and PyTorch inference service. It lets an analyst choose between ResNet-50 and ViT-B/16 for six-category image classification.</p>
          <p className="disaster-scope">This portfolio version is a <strong>sample interface only</strong>. It uses example images from the project and does not upload files, call the model API, or generate predictions.</p>
        </div>
      </section>

      <section className="disaster-workspace" id="workspace" aria-labelledby="workspace-title">
        <div className="disaster-section-heading">
          <div><span className="disaster-label">02 / LIMITED SHOWCASE</span><h2 id="workspace-title">Analysis workspace</h2></div>
          <span className="disaster-demo-badge">SAMPLE VIEW · NO LIVE INFERENCE</span>
        </div>
        <div className="disaster-workspace-grid">
          <div className="disaster-control-panel">
            <div className="disaster-panel-head"><span>01</span><h3>Choose an example scene</h3></div>
            <div className="disaster-category-list">
              {categories.map((category, index) => <button
                className={`disaster-category${activeCategory === index ? ' is-active' : ''}`}
                key={category.name}
                type="button"
                aria-pressed={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              >
                <img src={`disaster-showcase/${category.image}`} alt="" />
                <span>{category.name}</span>
                <span aria-hidden="true">↗</span>
              </button>)}
            </div>
            <div className="disaster-model-control">
              <div className="disaster-panel-head"><span>02</span><h3>Compare architectures</h3></div>
              <div className="disaster-model-buttons" role="group" aria-label="Model architecture">
                <button type="button" className={model === 'resnet50' ? 'is-active' : ''} aria-pressed={model === 'resnet50'} onClick={() => setModel('resnet50')}>ResNet-50</button>
                <button type="button" className={model === 'vit' ? 'is-active' : ''} aria-pressed={model === 'vit'} onClick={() => setModel('vit')}>ViT-B/16</button>
              </div>
              <p>{model === 'resnet50' ? 'Convolutional layers extract local visual patterns such as edges, textures, and shapes.' : 'A vision transformer splits an image into patches and compares context across the scene.'}</p>
            </div>
          </div>
          <div className="disaster-result-panel">
            <div className="disaster-result-top"><span>EXAMPLE IMAGE / {String(activeCategory + 1).padStart(2, '0')}</span><span>VISUAL REVIEW</span></div>
            <div className="disaster-result-image"><img src={`disaster-showcase/${selected.image}`} alt={`Example image for ${selected.name}`} /></div>
            <div className="disaster-result-bottom"><div><span>CATEGORY SHOWN</span><h3>{selected.name}</h3><p>{selected.detail}</p></div><span className="disaster-example-tag">CURATED EXAMPLE</span></div>
          </div>
        </div>
        <p className="disaster-workspace-note">Category labels describe the example gallery. They are not model predictions, confidence scores, or emergency assessments.</p>
      </section>

      <section className="disaster-process" aria-labelledby="disaster-process-title">
        <div><span className="disaster-label">03 / UNDER THE HOOD</span><h2 id="disaster-process-title">Original system flow</h2></div>
        <div className="disaster-steps">
          <div><span>01</span><h3>Upload</h3><p>The original workspace accepts an image and a model choice.</p></div>
          <div><span>02</span><h3>Infer</h3><p>A FastAPI service preprocesses the image and runs a PyTorch model.</p></div>
          <div><span>03</span><h3>Review</h3><p>The original interface displays a class, confidence, and inference time.</p></div>
        </div>
      </section>
    </main>

    <footer className="disaster-footer"><span>DISASTER IMAGE ANALYTICS / PORTFOLIO SHOWCASE</span><a href="index.html#projects">Back to selected works ↑</a></footer>
  </div>;
}
