import { useEffect, useRef, useState } from 'react';

const splatPreviews = [
  { src: 'pic/3dgs (1).png', alt: '3DGS viewer showing a front-facing sample portrait' },
  { src: 'pic/3dgs (2).png', alt: 'Original 3DGS interface with viewer controls' },
  { src: 'pic/3dgs (3).png', alt: '3DGS viewer showing another generated portrait' },
];

const technologies = [
  { title: 'Web & Mobile', items: ['React', 'TypeScript', 'Vite', 'JavaScript', 'Flutter', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Data & Backend', items: ['Supabase', 'PostgreSQL', 'Zustand', 'MySQL', 'Python'] },
  { title: 'ML & Tools', items: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Docker', 'Git / GitHub', 'Figma'] },
];

const projects = [
  { title: 'Interaksi Manusia & Komputer', description: 'Pembahasan mengenai Interaksi Manusia dan Komputer secara singkat dan interaktif.', preview: 'imk1.html', href: 'imk1.html', action: 'Read Summary' },
  { title: 'Pemrograman Dasar Archive', description: 'Dokumentasi tugas Pemrograman Dasar dari masa SMK.', preview: 'https://www.youtube-nocookie.com/embed/QTIkGsMFIKo?controls=0&mute=1', href: 'https://www.youtube.com/watch?v=QTIkGsMFIKo', action: 'Watch Video' },
  { title: 'Brokoli Website', description: 'Web page pertama saya yang membahas fun fact tentang Brokoli.', preview: 'brokoli.html', href: 'brokoli.html', action: 'Visit Site' },
  { title: 'Sistem Informasi', description: 'Rangkuman materi kuliah Sistem Informasi (14 Chapter).', preview: 'sisfor-materi.html', href: 'sisfor-materi.html', action: 'Read Summary →' },
  { title: 'Salary Detector', description: 'Studi kasus estimasi gaji dengan Random Forest dan aturan lokasi. Model API sudah kedaluwarsa; lihat rancangan dan alur kerjanya.', preview: 'salaryDetector.html.html', href: 'salaryDetector.html.html', action: 'View Case Study →' },
];

function LivePreview({ src, title }: { src: string; title: string }) {
  return <div className="card-live-preview" aria-hidden="true">
    <iframe src={src} title={`${title} page preview`} loading="lazy" tabIndex={-1} />
  </div>;
}

const contacts = [
  { label: 'Email', href: 'mailto:panjilaksonompl@gmail.com', image: 'assets/image/emila.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mpanjilaksono/', image: 'assets/image/linkedin.png' },
  { label: 'GitHub', href: 'https://github.com/panjielaksono', image: 'assets/image/github.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/_panjiil/', image: 'assets/image/ig.png' },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [splatPreviewOpen, setSplatPreviewOpen] = useState(false);
  const [splatPreviewIndex, setSplatPreviewIndex] = useState(0);
  const previewTriggerRef = useRef<HTMLButtonElement>(null);
  const previewCloseRef = useRef<HTMLButtonElement>(null);
  const cvTriggerRef = useRef<HTMLButtonElement>(null);
  const cvCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cvOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cvCloseRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCvOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
      cvTriggerRef.current?.focus();
    };
  }, [cvOpen]);

  useEffect(() => {
    if (!splatPreviewOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    previewCloseRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSplatPreviewOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
      previewTriggerRef.current?.focus();
    };
  }, [splatPreviewOpen]);

  return <>
    <nav className="navbar">
      <a href="#" className="nav-logo">Much Panji Laksono</a>
      <button className="nav-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="primary-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      <ul className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-nav">
        {['Home', 'About', 'Tools', 'Projects', 'Contact'].map((name) => <li key={name}><a href={`#${name.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{name}</a></li>)}
        <li><button ref={cvTriggerRef} type="button" className="nav-cv" onClick={() => { setMenuOpen(false); setCvOpen(true); }}>CV</button></li>
      </ul>
    </nav>

    <header id="home">
      <div className="hero-content">
        <span className="greeting">Hello, I&apos;m</span>
        <h1 className="hero-name">Much Panji Laksono</h1>
        <p className="hero-desc">Informatics Engineering student building web applications, mobile experiences, and machine learning tools.</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </header>

    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} id="myBtn" title="Go to top" aria-label="Go to top">↑</button>

    <article id="about">
      <h2 className="section-title">Who Am I</h2>
      <p className="about-text">I build practical software across web, mobile, and machine learning. My recent work includes inventory workflows, operational dashboards, and computer vision applications.</p>
    </article>

    <article id="tools" style={{ backgroundColor: 'var(--light-bg)' }}>
      <h2 className="section-title">My Tech Stack</h2>
      <div className="tools-grid">
        {technologies.map((category) => <div className="tool-category" key={category.title}>
          <h3>{category.title}</h3>
          <div className="tool-list">{category.items.map((item) => <div className="tool-item" key={item}>{item}</div>)}</div>
        </div>)}
      </div>
    </article>

    <article id="projects">
      <h2 className="section-title">Selected Works</h2>
      <div className="projects-wrapper">
        <div className="project-card project-featured">
          <LivePreview src="warehouse-demo.html#prototype" title="Warehouse Management System" />
          <div className="card-content">
            <h3 className="card-title">Warehouse Management System</h3>
            <p className="card-desc">An ERP-style operations platform connecting purchasing, warehouse stock, part requests, fleet work orders, project operations, and management reporting. Role-based access gives each team a focused workflow and controlled visibility.</p>
            <div className="project-capabilities" aria-label="Warehouse system capabilities"><span>ERP workflows</span><span>Role-based access</span><span>Inventory &amp; purchasing</span><span>Fleet operations</span></div>
            <a href="warehouse-demo.html" className="card-btn">View case study &amp; limited demo →</a>
          </div>
        </div>
        <div className="project-card">
          <LivePreview src="3dgs-demo.html" title="3D Gaussian Splats" />
          <div className="card-content">
            <h3 className="card-title">3D Gaussian Splats</h3>
            <p className="card-desc">Explore a sample Gaussian Splat in a focused 3D viewer. The full project also includes an editor and image-to-3D generation pipeline.</p>
            <div className="card-actions">
              <button ref={previewTriggerRef} type="button" className="card-btn" onClick={() => { setSplatPreviewIndex(0); setSplatPreviewOpen(true); }}>Explore 3D demo →</button>
              <a href="https://github.com/panjielaksono/3dgs" target="_blank" rel="noopener noreferrer" className="card-btn">GitHub ↗</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <LivePreview src="disaster-showcase.html" title="Disaster Image Analytics" />
          <div className="card-content">
            <h3 className="card-title">Disaster Image Analytics</h3>
            <p className="card-desc">A six-category computer vision research interface comparing ResNet-50 and Vision Transformer. Explore a curated sample workflow without live inference or file uploads.</p>
            <a href="disaster-showcase.html" className="card-btn">Explore showcase →</a>
          </div>
        </div>
        <div className="project-card">
          <LivePreview src="isilistrik-showcase.html" title="IsiListrik" />
          <div className="card-content">
            <h3 className="card-title card-title-with-icon"><img src="mobile-showcase/isilistrik-icon.jpg" alt="" />IsiListrik</h3>
            <p className="card-desc">A Flutter electricity-token prototype with meter balances, top-up choices, and transaction history. Try a limited browser walkthrough with sample data.</p>
            <a href="isilistrik-showcase.html" className="card-btn">Explore showcase →</a>
          </div>
        </div>
        <div className="project-card">
          <LivePreview src="mafits-showcase.html" title="maFits" />
          <div className="card-content">
            <h3 className="card-title card-title-with-icon"><img src="mobile-showcase/mafits-icon.png" alt="" />maFits</h3>
            <p className="card-desc">A Flutter clothing vault for fit photos, sizes, dates, notes, and search. Browse a local sample collection without connecting to Supabase.</p>
            <a href="mafits-showcase.html" className="card-btn">Explore showcase →</a>
          </div>
        </div>
        <div className="project-card">
          <LivePreview src="e-learning-showcase.html#prototype" title="Mini E-Learning Website" />
          <div className="card-content">
            <h3 className="card-title">Mini E-Learning Website</h3>
            <p className="card-desc">An academic administration portal for student and lecturer records, courses, study plans, permissions, and curriculum analytics. Explore a limited dashboard with sample data.</p>
            <a href="e-learning-showcase.html" className="card-btn">Explore showcase →</a>
          </div>
        </div>
        {projects.map((project) => <div className="project-card" key={project.title}>
          <LivePreview src={project.preview} title={project.title} />
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="card-btn">{project.action}</a>
          </div>
        </div>)}
      </div>
    </article>

    <article id="contact" style={{ backgroundColor: 'var(--light-bg)' }}>
      <h2 className="section-title">Connect with Me</h2>
      <div className="contact-container">
        {contacts.map((contact) => <a href={contact.href} className="social-btn" key={contact.label} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          <img src={contact.image} alt={contact.label} /> {contact.label}
        </a>)}
      </div>
    </article>

    <footer>
      <div className="footer-container">
        <h3 className="footer-brand">Much Panji Laksono</h3>
        <p className="footer-tagline">Software Engineer • Web Developer • Mobile Developer</p>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <span className="copyright">© 2026 Panji Laksono. All Rights Reserved.</span>
          <span className="tech-stack">Built with <span style={{ color: 'var(--primary-color)' }}>♥</span> and React + TypeScript.</span>
        </div>
      </div>
    </footer>

    {cvOpen && (
      <div className="cv-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCvOpen(false); }}>
        <section className="cv-dialog" role="dialog" aria-modal="true" aria-labelledby="cv-title" aria-describedby="cv-description">
          <div className="cv-dialog-head">
            <div><span>CURRICULUM VITAE</span><h2 id="cv-title">Much Panji Laksono</h2></div>
            <button ref={cvCloseRef} type="button" className="cv-close" aria-label="Close CV preview" onClick={() => setCvOpen(false)}>×</button>
          </div>
          <div className="cv-dialog-body">
            <a className="cv-pdf-frame" href="Much_Panji_Laksono_CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open full CV PDF in a new tab">
              <img src="Much_Panji_Laksono_CV_preview.png" alt="Preview of Much Panji Laksono CV" />
            </a>
            <div className="cv-dialog-info">
              <span className="cv-info-kicker">OPEN TO OPPORTUNITIES</span>
              <h3>View my CV</h3>
              <p id="cv-description">A quick look at my experience, skills, and selected projects. Download the PDF to keep a copy.</p>
              <a className="cv-download" href="Much_Panji_Laksono_CV.pdf" download="Much_Panji_Laksono_CV.pdf">Download CV ↓</a>
              <a className="cv-open-file" href="Much_Panji_Laksono_CV.pdf" target="_blank" rel="noopener noreferrer">Open PDF in a new tab ↗</a>
            </div>
          </div>
        </section>
      </div>
    )}

    {splatPreviewOpen && (
      <div className="preview-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSplatPreviewOpen(false); }}>
        <section className="preview-dialog" role="dialog" aria-modal="true" aria-labelledby="preview-title" aria-describedby="preview-description">
          <button ref={previewCloseRef} type="button" className="preview-close" aria-label="Close preview" onClick={() => setSplatPreviewOpen(false)}>×</button>
          <div className="preview-media">
            <div
              className="preview-image-wrap"
              onPointerMove={(event) => {
                if (event.pointerType === 'touch') return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - .5;
                const y = (event.clientY - bounds.top) / bounds.height - .5;
                event.currentTarget.style.setProperty('--tilt-x', `${-y * 9}deg`);
                event.currentTarget.style.setProperty('--tilt-y', `${x * 9}deg`);
              }}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty('--tilt-x', '0deg');
                event.currentTarget.style.setProperty('--tilt-y', '0deg');
              }}
            >
              <img src={splatPreviews[splatPreviewIndex].src} alt={splatPreviews[splatPreviewIndex].alt} />
              <span className="preview-card-index">3DGS / {String(splatPreviewIndex + 1).padStart(2, '0')}</span>
            </div>
            <div className="preview-thumbnails" aria-label="Choose preview image">
              {splatPreviews.map((preview, index) => (
                <button type="button" key={preview.src} className={index === splatPreviewIndex ? 'is-selected' : ''} aria-label={`Show preview image ${index + 1}`} aria-pressed={index === splatPreviewIndex} onClick={() => setSplatPreviewIndex(index)}>
                  <img src={preview.src} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div className="preview-details">
            <span className="preview-kicker">PROJECT PREVIEW / 3DGS</span>
            <h2 id="preview-title">3D Gaussian Splats</h2>
            <p id="preview-description">A glimpse of the original project. Open the limited demo to rotate and zoom one sample 3D scene; image generation and editing tools are not included.</p>
            <div className="preview-facts"><span>01 / SAMPLE SCENE</span><span>02 / INTERACTIVE VIEWER</span><span>03 / BROWSER DEMO</span></div>
            <a href="3dgs-demo.html" className="preview-demo-link">Open interactive demo →</a>
          </div>
        </section>
      </div>
    )}
  </>;
}
