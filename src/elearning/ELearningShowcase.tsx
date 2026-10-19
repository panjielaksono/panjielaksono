import { useState } from 'react';
import {
  ArrowRight, BarChart3, BookOpen, ClipboardList, GraduationCap,
  LockKeyhole, RotateCcw, Search, ShieldCheck, Users,
} from 'lucide-react';

type View = 'dashboard' | 'students' | 'lecturers' | 'courses' | 'plans' | 'access';

const navigation: { id: View; label: string; icon: typeof BarChart3 }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'students', label: 'Mahasiswa', icon: GraduationCap },
  { id: 'lecturers', label: 'Dosen', icon: Users },
  { id: 'courses', label: 'Mata Kuliah', icon: BookOpen },
  { id: 'plans', label: 'Rencana Studi', icon: ClipboardList },
  { id: 'access', label: 'Hak Akses', icon: LockKeyhole },
];

const students = [
  { name: 'Nadia Putri', id: 'DEMO-001', program: 'Teknik Informatika', credits: 20 },
  { name: 'Bima Pratama', id: 'DEMO-002', program: 'Sistem Informasi', credits: 18 },
  { name: 'Alya Ramadhani', id: 'DEMO-003', program: 'Teknik Informatika', credits: 22 },
  { name: 'Raka Wijaya', id: 'DEMO-004', program: 'Sistem Informasi', credits: 16 },
];

const lecturers = [
  { name: 'Dr. Aditya Rahman', id: 'DOS-DEMO-01', focus: 'Rekayasa Perangkat Lunak', load: 12, limit: 16 },
  { name: 'Maya Santoso, M.Kom.', id: 'DOS-DEMO-02', focus: 'Data & Analitik', load: 10, limit: 14 },
  { name: 'Dimas Wibowo, M.Kom.', id: 'DOS-DEMO-03', focus: 'Jaringan Komputer', load: 8, limit: 12 },
];

const courses = [
  { code: 'MK-DEMO-01', name: 'Pemrograman Web', credits: 3, lecturer: 'Dr. Aditya Rahman' },
  { code: 'MK-DEMO-02', name: 'Basis Data', credits: 3, lecturer: 'Maya Santoso, M.Kom.' },
  { code: 'MK-DEMO-03', name: 'Jaringan Komputer', credits: 3, lecturer: 'Dimas Wibowo, M.Kom.' },
  { code: 'MK-DEMO-04', name: 'Analisis Data', credits: 2, lecturer: 'Maya Santoso, M.Kom.' },
];

const plans = [
  { student: 'Nadia Putri', course: 'Pemrograman Web', className: 'TI-A', status: 'Terjadwal' },
  { student: 'Bima Pratama', course: 'Basis Data', className: 'SI-B', status: 'Terjadwal' },
  { student: 'Alya Ramadhani', course: 'Analisis Data', className: 'TI-A', status: 'Terjadwal' },
];

function Dashboard() {
  return <>
    <div className="el-metrics">
      {[
        ['Total Mahasiswa', students.length, GraduationCap],
        ['Total Dosen', lecturers.length, Users],
        ['Katalog Matkul', courses.length, BookOpen],
        ['Kelas Berjalan', plans.length, ClipboardList],
      ].map(([label, value, Icon]) => {
        const MetricIcon = Icon as typeof GraduationCap;
        return <div className="el-metric" key={label as string}><div><small>{label as string}</small><strong>{value as number}</strong><span>Data contoh</span></div><MetricIcon size={22} aria-hidden="true" /></div>;
      })}
    </div>
    <div className="el-dashboard-grid">
      <section className="el-surface"><div className="el-surface-head"><div><h3>Beban Mengajar SKS Dosen</h3><p>Komparasi SKS aktif dan batas kapasitas contoh.</p></div></div><div className="el-bar-chart">{lecturers.map((lecturer) => <div className="el-chart-row" key={lecturer.id}><span>{lecturer.name}</span><div className="el-chart-track"><span style={{ width: `${lecturer.load / lecturer.limit * 100}%` }} /></div><b>{lecturer.load} / {lecturer.limit}</b></div>)}</div></section>
      <section className="el-surface"><div className="el-surface-head"><div><h3>Rencana Studi</h3><p>Cuplikan penempatan mata kuliah.</p></div></div><div className="el-recent">{plans.map((plan) => <div key={plan.student}><span className="el-recent-icon"><BookOpen size={16} /></span><div><strong>{plan.course}</strong><small>{plan.student} · {plan.className}</small></div><span className="el-status">{plan.status}</span></div>)}</div></section>
    </div>
  </>;
}

function DataView({ view, query }: { view: Exclude<View, 'dashboard'>; query: string }) {
  const text = query.toLowerCase();
  if (view === 'access') {
    return <div className="el-access-grid">{[
      ['Dashboard', 'Ringkasan dan analitik akademik'],
      ['Mahasiswa', 'Data mahasiswa dan batas SKS'],
      ['Dosen', 'Profil serta beban mengajar'],
      ['Mata Kuliah', 'Katalog dan pembagian kelas'],
      ['Rencana Studi', 'Penempatan mata kuliah per mahasiswa'],
    ].map(([name, detail]) => <div className="el-access-item" key={name}><ShieldCheck size={18} /><div><strong>{name}</strong><span>{detail}</span></div></div>)}<p className="el-access-note">Aplikasi sumber memakai hak akses per halaman. Ini hanya ringkasan visual; demo publik tidak memiliki akun atau pengaturan izin.</p></div>;
  }
  let headings: string[] = [];
  let rows: string[][] = [];
  if (view === 'students') { headings = ['NIM Demo', 'Nama', 'Program', 'SKS']; rows = students.map((student) => [student.id, student.name, student.program, String(student.credits)]); }
  if (view === 'lecturers') { headings = ['Kode', 'Dosen', 'Bidang', 'Beban SKS']; rows = lecturers.map((lecturer) => [lecturer.id, lecturer.name, lecturer.focus, `${lecturer.load} / ${lecturer.limit}`]); }
  if (view === 'courses') { headings = ['Kode', 'Mata Kuliah', 'SKS', 'Dosen']; rows = courses.map((course) => [course.code, course.name, String(course.credits), course.lecturer]); }
  if (view === 'plans') { headings = ['Mahasiswa', 'Mata Kuliah', 'Kelas', 'Status']; rows = plans.map((plan) => [plan.student, plan.course, plan.className, plan.status]); }
  const filtered = rows.filter((row) => row.some((cell) => cell.toLowerCase().includes(text)));
  return <div className="el-surface el-table-surface"><div className="el-surface-head"><div><h3>{navigation.find((item) => item.id === view)?.label}</h3><p>{filtered.length} dari {rows.length} data contoh ditampilkan.</p></div></div><div className="el-table-scroll"><table><thead><tr>{headings.map((heading) => <th key={heading}>{heading}</th>)}</tr></thead><tbody>{filtered.map((row) => <tr key={row.join('|')}>{row.map((cell, index) => <td key={headings[index]}>{cell}</td>)}</tr>)}</tbody></table>{filtered.length === 0 && <p className="el-empty">Tidak ada data contoh yang cocok.</p>}</div></div>;
}

export function ELearningShowcase() {
  const [view, setView] = useState<View>('dashboard');
  const [query, setQuery] = useState('');
  const selected = navigation.find((item) => item.id === view)!;
  function changeView(next: View) { setView(next); setQuery(''); }

  return <div className="el-page">
    <div className="el-portfolio-bar"><a href="index.html#projects">← Back to selected works</a><span>MUCH PANJI LAKSONO · PROJECT SHOWCASE</span></div>
    <header className="el-hero"><div className="el-hero-copy"><span className="el-eyebrow">ACADEMIC ADMINISTRATION / REACT PROJECT</span><h1>Mini E-Learning <em>Website</em></h1><p>A student administration interface for managing academic records, study plans, course assignments, permissions, and curriculum analytics. Explore a small browser-only sample of the original blue dashboard UI.</p><a href="#prototype" className="el-hero-button">Explore sample dashboard <ArrowRight size={17} /></a></div><div className="el-hero-visual"><img src="e-learning-showcase/code.png" alt="Original repository code illustration showing the blue administration sidebar" /></div></header>
    <section className="el-context" aria-label="Project overview"><div><img src="e-learning-showcase/favicon.svg" alt="" /><span>Connected academic records</span></div><p>The source project includes student and lecturer records, course catalogs, study-plan allocation, permission-aware navigation, and charts for teaching load and study credits.</p><div className="el-context-assets"><img src="e-learning-showcase/iconBaru.png" alt="Original emoji asset" /><svg aria-label="Original documentation icon" role="img"><use href="e-learning-showcase/icons.svg#documentation-icon" /></svg></div></section>
    <section className="el-demo-section" id="prototype"><div className="el-demo-intro"><div><span className="el-eyebrow">INTERACTIVE / SAMPLE RECORDS</span><h2>Inside the admin portal.</h2></div><p>Switch between views and search local sample records. No login, account data, database connection, or write access is available here.</p></div>
      <div className="el-app">
        <aside className="el-sidebar"><div className="el-brand"><span>EL</span><strong>E-Learning System</strong></div><div className="el-menu-title">MENU UTAMA</div><nav aria-label="Sample dashboard navigation">{navigation.map(({ id, label, icon: Icon }) => <button key={id} type="button" className={view === id ? 'active' : ''} aria-current={view === id ? 'page' : undefined} onClick={() => changeView(id)}><Icon size={17} /><span>{label}</span></button>)}</nav><div className="el-sidebar-foot"><LockKeyhole size={17} /><span>PUBLIC SAMPLE<br />NO ACCOUNT ACCESS</span></div></aside>
        <div className="el-app-body"><div className="el-topbar"><strong>Web E-Learning</strong><div><span>DEMO ADMIN</span><b>D</b></div></div><div className="el-content"><div className="el-notice"><ShieldCheck size={16} /><span>Data fiktif tersimpan di halaman ini saja. Prototipe tidak terhubung ke API.</span><button type="button" onClick={() => { changeView('dashboard'); }}><RotateCcw size={14} /> Reset</button></div><div className="el-view-head"><div><small>PORTAL AKADEMIK / {selected.label.toUpperCase()}</small><h2>{selected.label}</h2><p>{view === 'dashboard' ? 'Ringkasan aktivitas akademik dan beban SKS.' : view === 'access' ? 'Gambaran modul yang dipisahkan oleh hak akses.' : 'Telusuri data contoh dari modul akademik.'}</p></div>{view !== 'dashboard' && view !== 'access' && <label className="el-search"><Search size={17} /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari data contoh..." aria-label="Cari data contoh" /></label>}</div>{view === 'dashboard' ? <Dashboard /> : <DataView view={view} query={query} />}</div></div>
      </div>
    </section>
    <footer className="el-footer"><span>Mini E-Learning Website · limited portfolio sample</span><a href="index.html#projects">Return to selected works ↑</a></footer>
  </div>;
}
