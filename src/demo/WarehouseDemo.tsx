import { useReducer, useState, type FormEvent } from 'react';
import {
  AlertTriangle, ArrowRight, ArrowRightLeft, CheckCircle2, ChevronLeft,
  ClipboardList, LayoutDashboard, LockKeyhole, Menu, Package, Plus,
  RotateCcw, Search, ShieldCheck, Truck, X,
} from 'lucide-react';
import { createDemoState, demoReducer, type PartRequest } from './model';

type View = 'dashboard' | 'transactions' | 'requests' | 'stock';
type Modal = 'receive' | 'request' | 'approve' | null;

const navigation: { id: View; label: string; icon: typeof Package }[] = [
  { id: 'dashboard', label: 'Dasbor', icon: LayoutDashboard },
  { id: 'transactions', label: 'Transaksi Gudang', icon: ArrowRightLeft },
  { id: 'requests', label: 'Inbox Gudang', icon: ClipboardList },
  { id: 'stock', label: 'Stok Gudang', icon: Package },
];

const pageTitles: Record<View, string> = {
  dashboard: 'Dasbor Gudang',
  transactions: 'Transaksi Gudang',
  requests: 'Inbox Gudang',
  stock: 'Stok Gudang',
};

function parseQuantity(value: string): number | null {
  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 ? number : null;
}

function Status({ status }: { status: PartRequest['status'] }) {
  const labels = { PENDING_APPROVAL: 'MENUNGGU', APPROVED: 'DISETUJUI', REJECTED: 'DITOLAK' };
  return <span className={`status status-${status.toLowerCase()}`}>{labels[status]}</span>;
}

export function WarehouseDemo() {
  const [state, dispatch] = useReducer(demoReducer, undefined, createDemoState);
  const [view, setView] = useState<View>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modal, setModal] = useState<Modal>(null);
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [receivedQty, setReceivedQty] = useState('12');
  const [requestItem, setRequestItem] = useState('filter');
  const [requestQty, setRequestQty] = useState('2');
  const [vehicle, setVehicle] = useState('Unit DEMO-01');
  const [mechanic, setMechanic] = useState('Demo Mechanic');
  const [driver, setDriver] = useState('');
  const [search, setSearch] = useState('');
  const [stockFilter, setStockFilter] = useState<'All' | 'Part General' | 'Official Hino'>('All');
  const [notice, setNotice] = useState('Pilih menu untuk mencoba alur contoh dari sistem gudang.');
  const [formError, setFormError] = useState('');

  const pending = state.requests.filter((request) => request.status === 'PENDING_APPROVAL');
  const lowStock = state.items.filter((item) => item.stock < 10);
  const chosenRequest = state.requests.find((request) => request.reference === selectedRequest);
  const getItem = (id: string) => state.items.find((item) => item.id === id);

  function navigate(next: View) {
    setView(next);
    setSidebarOpen(false);
    setSearch('');
  }

  function closeModal() {
    setModal(null);
    setSelectedRequest(null);
    setFormError('');
  }

  function submitReceipt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const quantity = parseQuantity(receivedQty);
    if (!quantity || quantity > state.purchaseOrder.ordered || state.purchaseOrder.received !== null) {
      setFormError('Masukkan jumlah diterima antara 1 dan 12 Pcs.');
      return;
    }
    dispatch({ type: 'receive', quantity });
    setNotice(`PO-DEMO-001 dikonfirmasi tiba. Stok Brake Pad Set bertambah ${quantity} Pcs.`);
    closeModal();
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const quantity = parseQuantity(requestQty);
    if (!quantity || quantity > 999 || !mechanic.trim()) {
      setFormError('Isi jumlah dan nama mekanik yang valid.');
      return;
    }
    const reference = `REQ-DEMO-${String(state.nextRequest).padStart(3, '0')}`;
    dispatch({ type: 'request', itemId: requestItem, quantity, vehicle, mechanic });
    setNotice(`${reference} dibuat dan menunggu keputusan Admin Gudang.`);
    closeModal();
  }

  function submitApproval(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!chosenRequest) return;
    const item = getItem(chosenRequest.itemId);
    if (!item || item.stock < chosenRequest.quantity) {
      setFormError(`Stok ${item?.name ?? 'barang'} tidak cukup untuk permintaan ini.`);
      return;
    }
    if (!driver.trim()) {
      setFormError('Nama sopir / driver wajib diisi.');
      return;
    }
    dispatch({ type: 'approve', reference: chosenRequest.reference, driver });
    setNotice(`${chosenRequest.reference} disetujui. Stok berkurang ${chosenRequest.quantity} Pcs.`);
    closeModal();
  }

  function rejectRequest(reference: string) {
    dispatch({ type: 'reject', reference });
    setNotice(`${reference} ditolak. Stok tidak berubah.`);
  }

  function resetDemo() {
    dispatch({ type: 'reset' });
    setView('dashboard');
    setReceivedQty('12');
    setRequestQty('2');
    setRequestItem('filter');
    setVehicle('Unit DEMO-01');
    setMechanic('Demo Mechanic');
    setDriver('');
    setSearch('');
    setStockFilter('All');
    setNotice('Data contoh diatur ulang ke kondisi awal.');
    closeModal();
  }

  return <div className="demo-page">
    <div className="portfolio-bar">
      <a href="index.html#projects">← Kembali ke portofolio</a>
      <span>MUCH PANJI LAKSONO · INTERACTIVE CASE STUDY</span>
    </div>

    <section className="case-intro">
      <div>
        <span className="case-kicker">PROJECT SHOWCASE / PUBLIC PROTOTYPE</span>
        <h1>Warehouse Management System</h1>
        <p>Explore a focused slice of the real application: warehouse dashboard, purchase order arrival, part requests, and stock movement. The interface follows the source project’s operational UI.</p>
      </div>
      <div className="case-boundary">
        <ShieldCheck size={22} aria-hidden="true" />
        <div><strong>Safe public demo</strong><span>Sample records only · browser state only · no sign-in or production connection</span></div>
      </div>
    </section>

    <div className="app-frame">
      <aside className={`app-sidebar${sidebarOpen ? ' sidebar-open' : ''}`} aria-label="Demo navigation">
        <div className="app-brand"><span className="brand-icon"><Package size={27} /></span><div><strong>Warehouse</strong><small>LIMITED DEMO</small></div></div>
        <p className="nav-heading">MENU UTAMA</p>
        <nav>{navigation.map(({ id, label, icon: Icon }) => <button type="button" key={id} className={`nav-item${view === id ? ' active' : ''}`} aria-current={view === id ? 'page' : undefined} onClick={() => navigate(id)}><Icon size={19} /><span>{label}</span></button>)}</nav>
        <div className="restricted"><LockKeyhole size={17} /><div><strong>Demo terbatas</strong><p>Modul akun, supplier, laporan penuh, dan data produksi tidak tersedia.</p></div></div>
      </aside>

      <div className="app-content">
        <header className="app-topbar">
          <div className="topbar-title"><button className="menu-toggle" type="button" aria-label={sidebarOpen ? 'Tutup menu' : 'Buka menu'} onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}</button><strong>{pageTitles[view]}</strong></div>
          <div className="topbar-user"><span className="prototype-pill">PUBLIC PROTOTYPE</span><span className="avatar">D</span><span>Demo Visitor</span></div>
        </header>

        <main className="app-main">
          <div className="demo-notice" role="status" aria-live="polite"><ShieldCheck size={17} /><span>{notice}</span><button type="button" onClick={resetDemo}><RotateCcw size={15} /> Reset demo</button></div>

          {view === 'dashboard' && <>
            <div className="page-heading"><div><h2>Dasbor Gudang</h2><p>Prioritas hari ini: permintaan barang, penerimaan PO, dan stok.</p></div><button className="primary-button" type="button" onClick={() => navigate('requests')}>Buka Inbox Gudang <ArrowRight size={16} /></button></div>
            <div className="metric-grid">
              <button className="metric-card featured" type="button" onClick={() => navigate('requests')}><div><span>INBOX GUDANG</span><strong>{pending.length}</strong><small>Permintaan menunggu keputusan</small></div><ClipboardList size={22} /></button>
              <button className="metric-card" type="button" onClick={() => navigate('transactions')}><div><span>BARANG MENUNGGU TIBA</span><strong>{state.purchaseOrder.received === null ? 1 : 0}</strong><small>PO perlu dikonfirmasi</small></div><Truck size={22} /></button>
              <button className="metric-card" type="button" onClick={() => navigate('stock')}><div><span>STOK MENIPIS</span><strong>{lowStock.length}</strong><small>Baris stok di bawah 10</small></div><Package size={22} /></button>
            </div>
            <div className="dashboard-grid">
              <section className="surface"><div className="surface-head"><h3>Permintaan Terbaru</h3><button type="button" onClick={() => navigate('requests')}>Lihat semua <ArrowRight size={14} /></button></div><div className="recent-list">{state.requests.slice(0, 4).map((request) => <div className="recent-row" key={request.reference}><div><strong>{request.reference}</strong><small>{request.vehicle} · {getItem(request.itemId)?.name}</small></div><Status status={request.status} /></div>)}</div></section>
              <div className="side-stack"><section className="surface"><div className="surface-head"><h3>Akses Cepat</h3></div><div className="quick-grid"><button type="button" onClick={() => navigate('transactions')}><ArrowRightLeft size={17} /> Transaksi Gudang</button><button type="button" onClick={() => navigate('stock')}><Package size={17} /> Stok Gudang</button><button type="button" onClick={() => navigate('requests')}><ClipboardList size={17} /> Inbox Gudang</button><button type="button" onClick={() => { navigate('requests'); setModal('request'); }}><Plus size={17} /> Permintaan Demo</button></div></section><section className="surface"><div className="surface-head"><h3><AlertTriangle size={17} /> Stok Menipis</h3></div>{lowStock.map((item) => <div className="low-row" key={item.id}><span>{item.name}</span><strong>{item.stock} {item.unit}</strong></div>)}</section></div>
            </div>
            <section className="scope-note"><strong>What this prototype shows</strong><p>The production project also includes service work orders, tire monitoring, vehicle and mechanic records, project operations, reporting, and role management. Those modules are intentionally outside this public demo.</p></section>
          </>}

          {view === 'transactions' && <>
            <div className="page-heading"><div><h2>Transaksi Gudang</h2><p>Konfirmasi barang yang tiba dari purchase order contoh.</p></div></div>
            <div className="surface"><div className="surface-head"><h3>Purchase Order Masuk</h3><span className="record-count">1 contoh transaksi</span></div><div className="table-scroll"><table><thead><tr><th>No. PO</th><th>Supplier</th><th>Barang</th><th>Dipesan</th><th>Status</th><th>Aksi</th></tr></thead><tbody><tr><td className="strong-cell">{state.purchaseOrder.reference}</td><td>{state.purchaseOrder.supplier}</td><td>{getItem(state.purchaseOrder.itemId)?.name}</td><td>{state.purchaseOrder.ordered} Pcs</td><td><span className={`status ${state.purchaseOrder.received === null ? 'status-pending_approval' : 'status-approved'}`}>{state.purchaseOrder.received === null ? 'BELUM TIBA' : 'TIBA'}</span></td><td>{state.purchaseOrder.received === null ? <button className="row-action" type="button" onClick={() => setModal('receive')}>Konfirmasi Tiba</button> : <span className="muted">Diterima {state.purchaseOrder.received} Pcs</span>}</td></tr></tbody></table></div></div>
            <section className="workflow-hint"><Truck size={20} /><div><strong>Alur asli yang disederhanakan</strong><p>Di aplikasi sumber, Admin Gudang mengecek jumlah fisik barang sebelum PO berstatus “Tiba”. Di sini, satu PO contoh memperlihatkan dampaknya pada stok tanpa mengakses database asli.</p></div></section>
          </>}

          {view === 'requests' && <>
            <div className="page-heading"><div><h2>Inbox Gudang</h2><p>Tinjau permintaan part sebelum disetujui atau ditolak.</p></div><button className="primary-button" type="button" onClick={() => setModal('request')}><Plus size={16} /> Buat Permintaan Demo</button></div>
            <div className="surface filter-surface"><Search size={17} /><input type="search" aria-label="Cari no referensi" placeholder="Cari no referensi..." value={search} onChange={(event) => setSearch(event.target.value)} /></div>
            <div className="surface"><div className="table-scroll"><table><thead><tr><th>No. Ref</th><th>Unit / Mekanik</th><th>Barang</th><th>Qty</th><th>Status</th><th>Aksi</th></tr></thead><tbody>{state.requests.filter((request) => request.reference.toLowerCase().includes(search.toLowerCase())).map((request) => <tr key={request.reference}><td className="strong-cell">{request.reference}</td><td>{request.vehicle}<small className="table-sub">{request.mechanic}</small></td><td>{getItem(request.itemId)?.name}</td><td>{request.quantity} Pcs</td><td><Status status={request.status} /></td><td>{request.status === 'PENDING_APPROVAL' ? <div className="row-actions"><button className="row-action" type="button" onClick={() => { setSelectedRequest(request.reference); setDriver(''); setModal('approve'); }}>Setujui</button><button className="row-action secondary" type="button" onClick={() => rejectRequest(request.reference)}>Tolak</button></div> : <span className="muted">{request.driver || 'Selesai'}</span>}</td></tr>)}</tbody></table>{!state.requests.some((request) => request.reference.toLowerCase().includes(search.toLowerCase())) && <p className="empty-state">Tidak ada permintaan sesuai pencarian.</p>}</div></div>
            <section className="workflow-hint"><ClipboardList size={20} /><div><strong>Peran yang dicontohkan</strong><p>Permintaan dibuat seperti di portal Admin Part, lalu diproses di Inbox Gudang. Persetujuan mencatat pengeluaran barang dan mengurangi stok contoh.</p></div></section>
          </>}

          {view === 'stock' && <>
            <div className="page-heading"><div><h2>Stok Gudang</h2><p>Monitoring ketersediaan stok suku cadang di gudang contoh.</p></div></div>
            <div className="surface filter-surface"><Search size={17} /><input type="search" aria-label="Cari kode atau nama barang" placeholder="Cari kode barang atau deskripsi item..." value={search} onChange={(event) => setSearch(event.target.value)} /></div>
            <div className="filter-tabs" aria-label="Filter kategori">{(['All', 'Part General', 'Official Hino'] as const).map((filter) => <button type="button" className={stockFilter === filter ? 'selected' : ''} aria-pressed={stockFilter === filter} onClick={() => setStockFilter(filter)} key={filter}>{filter === 'All' ? 'Semua' : filter}</button>)}</div>
            <div className="surface"><div className="table-scroll"><table><thead><tr><th>Kode Barang</th><th>Nama Barang</th><th>Kategori</th><th>Gudang</th><th>Stok</th></tr></thead><tbody>{state.items.filter((item) => (stockFilter === 'All' || item.category === stockFilter) && `${item.sku} ${item.name}`.toLowerCase().includes(search.toLowerCase())).map((item) => <tr key={item.id}><td className="strong-cell">{item.sku}</td><td>{item.name}</td><td>{item.category}</td><td>Gudang Demo</td><td><span className={item.stock < 10 ? 'stock-low' : 'stock-ok'}>{item.stock} {item.unit}</span></td></tr>)}</tbody></table>{!state.items.some((item) => (stockFilter === 'All' || item.category === stockFilter) && `${item.sku} ${item.name}`.toLowerCase().includes(search.toLowerCase())) && <p className="empty-state">Barang tidak ditemukan.</p>}</div></div>
            <section className="workflow-hint"><Package size={20} /><div><strong>Stok mengikuti tindakan demo</strong><p>Konfirmasi PO menambah jumlah masuk; persetujuan permintaan mengurangi jumlah keluar. Data kembali ke awal saat halaman dimuat ulang atau demo di-reset.</p></div></section>
          </>}
        </main>
      </div>
    </div>

    <footer className="demo-footer"><span>Much Panji Laksono · Limited Warehouse Prototype</span><a href="index.html#projects">Kembali ke Selected Works ↑</a></footer>

    {modal && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}><div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-head"><div><span>PUBLIC DEMO · SAMPLE DATA</span><h2 id="modal-title">{modal === 'receive' ? 'Pengecekan Barang Masuk' : modal === 'request' ? 'Buat Permintaan Part' : 'Setujui Permintaan'}</h2></div><button type="button" aria-label="Tutup dialog" onClick={closeModal}><X size={20} /></button></div>
      {modal === 'receive' && <form onSubmit={submitReceipt} className="modal-form"><div className="modal-summary"><strong>{state.purchaseOrder.reference}</strong><span>{state.purchaseOrder.supplier} · Brake Pad Set · Dipesan 12 Pcs</span></div><label htmlFor="received-qty">Qty Diterima (Pcs)</label><input id="received-qty" type="number" min="1" max="12" step="1" value={receivedQty} onChange={(event) => setReceivedQty(event.target.value)} required /><p>Pastikan jumlah barang sesuai kondisi fisik sebelum dikonfirmasi.</p>{formError && <p className="form-error">{formError}</p>}<div className="modal-actions"><button type="button" className="cancel-button" onClick={closeModal}>Batal</button><button type="submit" className="primary-button"><CheckCircle2 size={16} /> Ya, Terima</button></div></form>}
      {modal === 'request' && <form onSubmit={submitRequest} className="modal-form"><p>Contoh alur pengajuan dari Admin Part.</p><label htmlFor="request-item">Barang</label><select id="request-item" value={requestItem} onChange={(event) => setRequestItem(event.target.value)}>{state.items.map((item) => <option key={item.id} value={item.id}>{item.name} · {item.stock} Pcs tersedia</option>)}</select><label htmlFor="request-qty">Qty Diminta</label><input id="request-qty" type="number" min="1" max="999" step="1" value={requestQty} onChange={(event) => setRequestQty(event.target.value)} required /><label htmlFor="request-vehicle">Unit</label><select id="request-vehicle" value={vehicle} onChange={(event) => setVehicle(event.target.value)}><option>Unit DEMO-01</option><option>Unit DEMO-02</option></select><label htmlFor="request-mechanic">Mekanik</label><input id="request-mechanic" maxLength={40} value={mechanic} onChange={(event) => setMechanic(event.target.value)} required />{formError && <p className="form-error">{formError}</p>}<div className="modal-actions"><button type="button" className="cancel-button" onClick={closeModal}>Batal</button><button type="submit" className="primary-button"><Plus size={16} /> Buat Permintaan</button></div></form>}
      {modal === 'approve' && chosenRequest && <form onSubmit={submitApproval} className="modal-form"><div className="modal-summary"><strong>{chosenRequest.reference}</strong><span>{getItem(chosenRequest.itemId)?.name} · {chosenRequest.quantity} Pcs · {chosenRequest.vehicle}</span></div><p>Persetujuan mencatat pengeluaran barang dan mengurangi stok contoh.</p><label htmlFor="driver-name">Nama Sopir / Driver</label><input id="driver-name" placeholder="Masukkan nama sopir contoh" maxLength={40} value={driver} onChange={(event) => setDriver(event.target.value)} required />{formError && <p className="form-error">{formError}</p>}<div className="modal-actions"><button type="button" className="cancel-button" onClick={closeModal}>Batal</button><button type="submit" className="primary-button"><CheckCircle2 size={16} /> Ya, Setujui</button></div></form>}
    </div></div>}
  </div>;
}
