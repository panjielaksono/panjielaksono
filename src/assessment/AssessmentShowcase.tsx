import { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, FileText, RotateCcw, ShieldCheck } from 'lucide-react';

type Step = 'identity' | 'rubric' | 'result';

const criteria = [
  { category: 'Komponen Modul', title: 'Informasi umum lengkap', guide: 'Periksa identitas, tujuan, alokasi waktu, dan konteks pembelajaran.', hints: ['Banyak informasi dasar belum ada.', 'Informasi dasar ada, tetapi beberapa bagian perlu dilengkapi.', 'Informasi dasar lengkap dan mudah ditelusuri.'] },
  { category: 'Skenario Pembelajaran', title: 'Alur kegiatan pembelajaran', guide: 'Periksa urutan pembuka, kegiatan inti, dan penutup.', hints: ['Alur belum jelas.', 'Alur terlihat, tetapi transisi atau penutup perlu diperinci.', 'Kegiatan tersusun jelas dari awal hingga akhir.'] },
  { category: 'Asesmen Pembelajaran', title: 'Asesmen formatif dan sumatif', guide: 'Periksa kesesuaian asesmen dengan tujuan belajar.', hints: ['Bukti asesmen belum dijelaskan.', 'Satu bentuk asesmen sudah ada; bukti lainnya perlu diperjelas.', 'Asesmen formatif dan sumatif dijelaskan dengan jelas.'] },
  { category: 'Dokumen Pendukung', title: 'Lampiran dan bahan ajar', guide: 'Periksa relevansi lembar kerja dan materi pendukung.', hints: ['Sebagian besar lampiran penting belum tersedia.', 'Lampiran inti tersedia, tetapi masih ada celah.', 'Lampiran dan materi pendukung tersedia dan relevan.'] },
  { category: 'Kelayakan Moral', title: 'Isi yang aman dan inklusif', guide: 'Periksa contoh dan aktivitas bagi semua peserta didik.', hints: ['Beberapa contoh perlu ditinjau ulang.', 'Materi pada umumnya aman, tetapi perlu penyesuaian.', 'Contoh dan aktivitas menghormati peserta didik.'] },
  { category: 'Kebahasaan & Desain', title: 'Bahasa dan keterbacaan', guide: 'Periksa kalimat, ejaan, dan tata letak.', hints: ['Banyak bagian sulit dibaca.', 'Materi dapat dipahami, tetapi perlu penyuntingan.', 'Bahasa dan tampilan jelas serta konsisten.'] },
];

const initialScores = [3, 2, 2, 3, 3, 2];
const scoreLabels = ['Belum dinilai', 'Perlu perbaikan', 'Cukup', 'Baik'];

function qualityLabel(score: number) {
  if (score >= 90) return 'Sangat baik';
  if (score >= 83) return 'Baik';
  if (score >= 76) return 'Cukup baik';
  return 'Perlu perbaikan';
}

export function AssessmentShowcase() {
  const [step, setStep] = useState<Step>('rubric');
  const [school, setSchool] = useState('SMP Cakrawala');
  const [subject, setSubject] = useState('Bahasa Indonesia');
  const [schoolClass, setSchoolClass] = useState('Kelas VIII');
  const [semester, setSemester] = useState('Semester 1');
  const [teacher, setTeacher] = useState('Dimas Pratama');
  const [reviewer, setReviewer] = useState('Rina Prameswari');
  const [scores, setScores] = useState(initialScores);
  const [note, setNote] = useState('Alur pembelajaran sudah jelas. Perinci bukti asesmen formatif dan langkah penutup.');
  const total = scores.reduce((sum, value) => sum + value, 0);
  const percent = Math.round((total / (criteria.length * 3)) * 100);
  const improvementAreas = criteria.filter((_, index) => scores[index] < 3);

  function reset() {
    setSchool('SMP Cakrawala');
    setSubject('Bahasa Indonesia');
    setSchoolClass('Kelas VIII');
    setSemester('Semester 1');
    setTeacher('Dimas Pratama');
    setReviewer('Rina Prameswari');
    setScores(initialScores);
    setNote('Alur pembelajaran sudah jelas. Perinci bukti asesmen formatif dan langkah penutup.');
    setStep('rubric');
  }

  return <div className="assessment-page">
    <nav className="assessment-topbar">
      <a href="index.html#projects"><ArrowLeft size={15} /> Back to selected works</a>
      <span>PRIVATE CLIENT WORK / SANITIZED CASE STUDY</span>
    </nav>

    <header className="assessment-hero">
      <div className="assessment-hero-copy">
        <span className="assessment-eyebrow">EDUCATION · RUBRIC-BASED REVIEW</span>
        <h1>Lesson plans,<br /><em>reviewed with clarity.</em></h1>
        <p>A private web project that structures lesson-plan assessment from reviewer identity and scoring guidance through a result summary and PDF report.</p>
        <a href="#prototype" className="assessment-hero-link">Explore the limited walkthrough <ArrowRight size={17} /></a>
        <div className="assessment-tech">PHP / BOOTSTRAP / JAVASCRIPT / MPDF</div>
      </div>
      <div className="assessment-hero-art" aria-hidden="true">
        <div className="assessment-preview">
          <div className="assessment-preview-header"><span>PLAN REVIEW</span><span>● ● ●</span></div>
          <div className="assessment-preview-body">
            <small>RINGKASAN PENILAIAN</small>
            <h2>Rencana pembelajaran</h2>
            <div className="assessment-preview-row"><span>Komponen Modul</span><b>03 / 03</b></div>
            <div className="assessment-preview-row"><span>Skenario Pembelajaran</span><b>02 / 03</b></div>
            <div className="assessment-preview-row"><span>Asesmen Pembelajaran</span><b>02 / 03</b></div>
            <div className="assessment-preview-score"><span>ILUSTRATIVE SCORE</span><strong>83</strong><em>BAIK</em></div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section className="assessment-intro">
        <div><span className="assessment-section-label">01 / THE ORIGINAL WORKFLOW</span><h2>From identity to a structured result.</h2></div>
        <div><p>The private build captures school, teacher, reviewer, class, and subject details before opening a 28-criterion rubric across six assessment areas. Each score choice has guidance for the reviewer. The workflow ends with reviewer notes, a result view, and a generated PDF.</p><p>This public walkthrough uses six newly written sample prompts and fictional identities. It shows how the review works without exposing the client's full rubric or report template.</p><div className="assessment-tags"><span>Identity form</span><span>Guided scoring</span><span>Reviewer notes</span><span>PDF workflow</span></div></div>
      </section>

      <section className="assessment-flow" aria-label="Project workflow and scope">
        <div className="assessment-flow-metrics"><div><strong>28</strong><span>criteria in the private build</span></div><div><strong>06</strong><span>assessment areas</span></div><div><strong>03</strong><span>scoring levels per criterion</span></div></div>
        <div className="assessment-flow-steps"><article><span>01 / CONTEXT</span><h3>Identify the plan</h3><p>Capture the learning context and reviewer details before scoring begins.</p></article><article><span>02 / REVIEW</span><h3>Apply the rubric</h3><p>Move through grouped criteria with score descriptions that support consistent choices.</p></article><article><span>03 / OUTCOME</span><h3>Summarize findings</h3><p>Calculate the result, record feedback, and prepare a report for the original workflow.</p></article></div>
      </section>

      <section id="prototype" className="assessment-demo-section">
        <div className="assessment-demo-heading"><div><span className="assessment-section-label">02 / LIMITED WALKTHROUGH</span><h2>Try an example review.</h2><p>All names and scores below are fictional. Changes stay on this page.</p></div><button type="button" className="assessment-reset" onClick={reset}><RotateCcw size={15} /> Reset example</button></div>
        <div className="assessment-app">
          <aside className="assessment-sidebar">
            <div className="assessment-brand"><span><BookOpen size={20} /></span><div><strong>Plan Review</strong><small>PUBLIC WALKTHROUGH</small></div></div>
            <p>ASSESSMENT FLOW</p>
            <div className="assessment-nav" role="tablist" aria-label="Assessment steps">
              <button type="button" role="tab" aria-selected={step === 'identity'} className={step === 'identity' ? 'active' : ''} onClick={() => setStep('identity')}><span>01</span> Identity</button>
              <button type="button" role="tab" aria-selected={step === 'rubric'} className={step === 'rubric' ? 'active' : ''} onClick={() => setStep('rubric')}><span>02</span> Rubric</button>
              <button type="button" role="tab" aria-selected={step === 'result'} className={step === 'result' ? 'active' : ''} onClick={() => setStep('result')}><span>03</span> Result</button>
            </div>
            <div className="assessment-sidebar-note"><ShieldCheck size={17} /> No client data, accounts, or backend connection.</div>
          </aside>
          <div className="assessment-workspace" role="tabpanel">
            <div className="assessment-workspace-top"><span>LESSON-PLAN REVIEW / {step.toUpperCase()}</span><span>FICTIONAL DATA</span></div>

            {step === 'identity' && <div className="assessment-view">
              <span className="assessment-view-eyebrow">STEP 01 / IDENTITY</span>
              <h3>Review context</h3>
              <p>Set the lesson context before reviewing. Every example identity is invented, and edits remain on this page.</p>
              <div className="assessment-form-grid">
                <label>School<input value={school} maxLength={60} onChange={(event) => setSchool(event.target.value)} /></label>
                <label>Subject<input value={subject} maxLength={60} onChange={(event) => setSubject(event.target.value)} /></label>
                <label>Class<input value={schoolClass} maxLength={30} onChange={(event) => setSchoolClass(event.target.value)} /></label>
                <label>Semester<select value={semester} onChange={(event) => setSemester(event.target.value)}><option>Semester 1</option><option>Semester 2</option></select></label>
                <label>Teacher<input value={teacher} maxLength={60} onChange={(event) => setTeacher(event.target.value)} /></label>
                <label>Reviewer<input value={reviewer} maxLength={60} onChange={(event) => setReviewer(event.target.value)} /></label>
              </div>
              <button type="button" className="assessment-primary" onClick={() => setStep('rubric')}>Continue to rubric <ArrowRight size={16} /></button>
            </div>}

            {step === 'rubric' && <div className="assessment-view">
              <span className="assessment-view-eyebrow">STEP 02 / GUIDED SCORING</span>
              <div className="assessment-view-title"><div><h3>Sample rubric</h3><p>One rewritten prompt per area. Choose a score to see its review guidance.</p></div><div className="assessment-live-score"><span>CURRENT SCORE</span><strong>{percent}<small>/ 100</small></strong></div></div>
              <div className="assessment-progress"><div><span>ILLUSTRATIVE SCORE</span><strong>{percent} / 100</strong></div><div className="assessment-progress-track"><span style={{ width: `${percent}%` }} /></div><small>{total} of {criteria.length * 3} possible points across 6 sample prompts</small></div>
              <div className="assessment-criteria">
                {criteria.map((item, index) => <div className="assessment-criterion" key={item.title}>
                  <div><span>{String(index + 1).padStart(2, '0')} / {item.category}</span><h4>{item.title}</h4><p>{item.guide}</p><p className="assessment-score-hint"><CheckCircle2 size={13} /> {item.hints[scores[index] - 1]}</p></div>
                  <label>Score<select value={scores[index]} onChange={(event) => setScores((current) => current.map((value, position) => position === index ? Number(event.target.value) : value))}>{[1, 2, 3].map((value) => <option value={value} key={value}>{value} · {scoreLabels[value]}</option>)}</select></label>
                </div>)}
              </div>
              <div className="assessment-rubric-bottom"><p>Illustrative result: {total} / {criteria.length * 3} points across this shortened rubric.</p><button type="button" className="assessment-primary" onClick={() => setStep('result')}>Review result <ArrowRight size={16} /></button></div>
            </div>}

            {step === 'result' && <div className="assessment-view">
              <span className="assessment-view-eyebrow">STEP 03 / RESULT PREVIEW</span>
              <h3>Assessment summary</h3>
              <p>A compact preview of the outcome. The original PHP project produces a PDF; this public version stays in the browser.</p>
              <div className="assessment-report">
                <div className="assessment-report-head"><span><FileText size={22} /> LESSON-PLAN REVIEW</span><small>FICTIONAL EXAMPLE</small></div>
                <div className="assessment-report-meta"><div><span>School</span><strong>{school || '—'}</strong></div><div><span>Subject</span><strong>{subject || '—'}</strong></div><div><span>Class / Semester</span><strong>{schoolClass || '—'} / {semester}</strong></div><div><span>Teacher / Reviewer</span><strong>{teacher || '—'} / {reviewer || '—'}</strong></div></div>
                <div className="assessment-report-score"><div><span>SCORE</span><strong>{percent}<small> / 100</small></strong></div><div><span>ASSESSMENT BAND</span><strong>{qualityLabel(percent)}</strong></div></div>
                <div className="assessment-report-breakdown"><div className="assessment-report-breakdown-head"><strong>Area breakdown</strong><span>SAMPLE CRITERIA ONLY</span></div>{criteria.map((item, index) => <div className="assessment-breakdown-row" key={item.title}><span>{item.category}</span><div className="assessment-breakdown-track"><i style={{ width: `${(scores[index] / 3) * 100}%` }} /></div><b>{scores[index]} / 3</b></div>)}</div>
                <div className="assessment-priority"><strong>Suggested review focus</strong><p>{improvementAreas.length ? improvementAreas.map((item) => item.category).join(' · ') : 'All sample areas reached the top score. Review the complete lesson plan before making a formal decision.'}</p></div>
                <div className="assessment-report-note"><span>Reviewer note</span><textarea value={note} maxLength={500} rows={3} onChange={(event) => setNote(event.target.value)} aria-label="Reviewer note" /></div>
              </div>
              <div className="assessment-result-actions"><button type="button" onClick={() => setStep('rubric')}><ArrowLeft size={15} /> Adjust scores</button><span><CheckCircle2 size={16} /> Calculated locally from six example criteria</span></div>
            </div>}
          </div>
        </div>
        <p className="assessment-disclaimer">This is a limited interface study. Its score is illustrative and is not an official evaluation of a real lesson plan.</p>
      </section>

      <section className="assessment-about"><div><span className="assessment-section-label">03 / SCOPE</span><h2>A focused public view of a private build.</h2></div><div><p>The showcase preserves the assessment journey while removing institution branding, real contact and identity fields, the full scoring content, and the original report document.</p><a href="index.html#projects">Return to selected works <ArrowRight size={16} /></a></div></section>
    </main>
    <footer className="assessment-footer"><span>PRIVATE CLIENT PROJECT / PUBLIC WORKFLOW STUDY</span><a href="index.html#projects">Back to projects ↑</a></footer>
  </div>;
}
