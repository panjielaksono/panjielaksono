import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ClipboardList, LayoutDashboard, Plus, ReceiptText, RotateCcw, ShieldCheck, ShoppingBag, UtensilsCrossed, Wallet, UsersRound } from 'lucide-react';

type Tab = 'overview' | 'tables' | 'orders' | 'menu' | 'expenses' | 'reports';
type Order = { id: string; table: string; customer: string; items: string; total: number; status: 'Open' | 'Paid'; paymentMethod?: 'Cash' | 'QRIS' };
type Expense = { id: number; title: string; amount: number; note: string };
const tableNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
const tableName = (number: number) => `Table ${String(number).padStart(2, '0')}`;

const initialOrders: Order[] = [
  { id: 'ORD-2401', table: 'Table 02', customer: 'Ayu Pratama', items: 'Ayam bakar, 2 es teh', total: 61600, status: 'Paid', paymentMethod: 'Cash' },
  { id: 'ORD-2402', table: 'Table 05', customer: 'Bima Saputra', items: '2 mie goreng, kopi susu', total: 81400, status: 'Paid', paymentMethod: 'QRIS' },
  { id: 'ORD-2403', table: 'Table 01', customer: 'Nadia Putri', items: 'Ayam bakar, es teh', total: 48400, status: 'Open' },
  { id: 'ORD-2404', table: 'Table 06', customer: 'Raka Wijaya', items: 'Ayam bakar', total: 35200, status: 'Open' },
];
const initialExpenses: Expense[] = [
  { id: 1, title: 'Beras 5 kg', amount: 38000, note: 'Bahan dapur' },
  { id: 2, title: 'Gas dapur', amount: 17000, note: 'Kebutuhan operasional' },
];
const newCustomers = ['Dina Maharani', 'Fajar Nugroho', 'Salsa Ramadhani', 'Arif Hidayat'];
const sampleMenu = [
  { name: 'Ayam bakar', category: 'Makanan', price: 32000, stock: 18 },
  { name: 'Es teh', category: 'Minuman', price: 12000, stock: 35 },
  { name: 'Mie goreng', category: 'Makanan', price: 28000, stock: 12 },
  { name: 'Kopi susu', category: 'Minuman', price: 18000, stock: 21 },
];
const rupiah = (value: number) => `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;

function PreviewPanel() {
  return <div className="pos-preview-panel" aria-label="Sample POS dashboard preview">
    <div className="pos-preview-top"><span className="pos-preview-mark"><UtensilsCrossed size={14} /> KEDAI RONA</span><span>● ● ●</span></div>
    <div className="pos-preview-content"><small>OVERVIEW / FICTIONAL RECORDS</small><h3>One place for the shift.</h3><div className="pos-preview-stats"><div><span>Today's sales</span><strong>Rp 143k</strong></div><div><span>Available tables</span><strong>10/12</strong></div></div><div className="pos-preview-order"><span>ORD-2403</span><b>Table 01</b><small>Nadia · Open</small><i>Rp 48,4k</i></div><div className="pos-preview-order"><span>ORD-2404</span><b>Table 06</b><small>Raka · Open</small><i>Rp 35,2k</i></div></div>
  </div>;
}

export function PosShowcase() {
  const [tab, setTab] = useState<Tab>('overview');
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [selectedTable, setSelectedTable] = useState(1);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'QRIS'>('Cash');
  const [cashReceived, setCashReceived] = useState('');
  const [lastPayment, setLastPayment] = useState<{ table: number; id: string; method: string; change: number } | null>(null);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseNote, setExpenseNote] = useState('');
  const paidOrders = orders.filter((order) => order.status === 'Paid');
  const revenue = paidOrders.reduce((sum, order) => sum + order.total, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const activeOrders = orders.filter((order) => order.status === 'Open');
  const openCount = activeOrders.length;
  const availableTables = tableNumbers.filter((number) => !activeOrders.some((order) => order.table === tableName(number)));
  const selectedOrder = activeOrders.find((order) => order.table === tableName(selectedTable));

  const addSampleOrder = (requestedTable?: number) => {
    const chosenTable = requestedTable && availableTables.includes(requestedTable) ? requestedTable : availableTables[0];
    if (!chosenTable) return;
    setOrders((current) => [...current, { id: `ORD-${2401 + current.length}`, table: tableName(chosenTable), customer: newCustomers[(current.length - initialOrders.length) % newCustomers.length], items: 'Ayam bakar, es teh', total: 48400, status: 'Open' }]);
    setSelectedTable(chosenTable);
    setPaymentOpen(false);
    setTab('tables');
  };
  const selectTable = (number: number) => { setSelectedTable(number); setPaymentOpen(false); setCashReceived(''); };
  const confirmPayment = () => {
    if (!selectedOrder || (paymentMethod === 'Cash' && Number(cashReceived) < selectedOrder.total)) return;
    setOrders((current) => current.map((order) => order.id === selectedOrder.id ? { ...order, status: 'Paid', paymentMethod } : order));
    setLastPayment({ table: selectedTable, id: selectedOrder.id, method: paymentMethod, change: paymentMethod === 'Cash' ? Number(cashReceived) - selectedOrder.total : 0 });
    setPaymentOpen(false);
    setCashReceived('');
  };
  const addExpense = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = Number(expenseAmount);
    if (!expenseTitle.trim() || !Number.isFinite(amount) || amount <= 0) return;
    setExpenses((current) => [...current, { id: Date.now(), title: expenseTitle.trim(), amount, note: expenseNote.trim() }]);
    setExpenseTitle(''); setExpenseAmount(''); setExpenseNote('');
  };

  return <div className="pos-page">
    <nav className="pos-topbar"><a href="index.html#projects">MPL <span>/ SELECTED WORKS</span></a><a href="index.html#projects"><ArrowRight size={14} /> Back to portfolio</a></nav>
    <header className="pos-hero">
      <div className="pos-hero-copy"><span className="pos-kicker">PRIVATE CLIENT WORK / SANITIZED SHOWCASE</span><h1>Restaurant POS<br /><em>&amp; operations.</em></h1><p>A Flutter workflow bringing orders, tables, menu stock, expenses, and reporting into one restaurant interface.</p><a className="pos-hero-link" href="#prototype">Explore the limited demo <ArrowUpRight size={18} /></a><div className="pos-stack">FLUTTER / DART / RIVERPOD / FIRESTORE</div></div>
      <div className="pos-hero-art"><PreviewPanel /><span className="pos-art-caption">FICTIONAL DATA · LOCAL INTERACTIONS ONLY</span></div>
    </header>
    <main>
      <section className="pos-intro"><div><span className="pos-section-label">01 / CASE STUDY</span><h2>From order to overview.</h2></div><div><p>The original app covers menu management, a full table availability board, order handling, expense records, and financial reports. This public version recreates a small part of that connected workflow with fictional records.</p><div className="pos-capabilities"><span>12-table floor view</span><span>Order flow</span><span>Menu stock</span><span>Reports</span></div></div></section>
      <section className="pos-demo-section" id="prototype"><div className="pos-demo-heading"><div><span className="pos-section-label">02 / LIMITED INTERFACE</span><h2>Explore a restaurant shift.</h2><p>Open the table board, inspect an occupied table, record a simulated payment, or add an expense. Nothing is saved or sent to a server.</p></div><button className="pos-reset" type="button" onClick={() => { setOrders(initialOrders); setExpenses(initialExpenses); selectTable(1); setLastPayment(null); setExpenseTitle(''); setExpenseAmount(''); setExpenseNote(''); setTab('overview'); }}><RotateCcw size={15} /> Reset walkthrough</button></div>
        <div className="pos-app">
          <aside className="pos-sidebar"><div className="pos-brand"><span><UtensilsCrossed size={18} /></span><div><strong>Kedai Rona</strong><small>FICTIONAL RESTAURANT</small></div></div><div className="pos-side-label">WORKSPACE</div><div className="pos-nav" role="tablist" aria-label="POS showcase screens">
            <button type="button" role="tab" aria-selected={tab === 'overview'} className={tab === 'overview' ? 'active' : ''} onClick={() => setTab('overview')}><LayoutDashboard size={17} /> Overview</button>
            <button type="button" role="tab" aria-selected={tab === 'tables'} className={tab === 'tables' ? 'active' : ''} onClick={() => setTab('tables')}><UtensilsCrossed size={17} /> Tables <span>{availableTables.length}/{tableNumbers.length}</span></button>
            <button type="button" role="tab" aria-selected={tab === 'orders'} className={tab === 'orders' ? 'active' : ''} onClick={() => setTab('orders')}><ClipboardList size={17} /> Orders <span>{openCount}</span></button>
            <button type="button" role="tab" aria-selected={tab === 'menu'} className={tab === 'menu' ? 'active' : ''} onClick={() => setTab('menu')}><ShoppingBag size={17} /> Menu</button>
            <button type="button" role="tab" aria-selected={tab === 'expenses'} className={tab === 'expenses' ? 'active' : ''} onClick={() => setTab('expenses')}><Wallet size={17} /> Expenses</button>
            <button type="button" role="tab" aria-selected={tab === 'reports'} className={tab === 'reports' ? 'active' : ''} onClick={() => setTab('reports')}><ReceiptText size={17} /> Reports</button>
          </div><div className="pos-sidebar-note"><ShieldCheck size={17} /><span>Fictional names and local interactions. Client identity and connected services are excluded.</span></div></aside>
          <div className="pos-workspace" role="tabpanel"><div className="pos-workspace-top"><span>KEDAI RONA / {tab.toUpperCase()}</span><span className="pos-demo-pill">LOCAL DATA</span></div>
            {tab === 'overview' && <><div className="pos-view-heading"><div><small>TODAY AT KEDAI RONA</small><h3>Good day at the counter.</h3><p>A snapshot of fictional restaurant activity.</p></div><button className="pos-primary" type="button" disabled={availableTables.length === 0} onClick={() => addSampleOrder()}><Plus size={16} /> Add order</button></div><div className="pos-metrics"><div><span>Paid sales</span><strong>{rupiah(revenue)}</strong><small>{paidOrders.length} completed orders</small></div><div><span>Open orders</span><strong>{String(openCount).padStart(2, '0')}</strong><small>Awaiting payment</small></div><div><span>Available tables</span><strong>{String(availableTables.length).padStart(2, '0')}/{tableNumbers.length}</strong><small>Calculated from active orders</small></div></div><div className="pos-floor-summary"><div><span>LIVE FLOOR / TABLES</span><h4>Check every table at a glance.</h4><p>Active orders occupy a table; completing an order makes it available again.</p></div><div className="pos-floor-mini">{tableNumbers.map((number) => { const occupied = activeOrders.some((order) => order.table === tableName(number)); return <button type="button" key={number} className={occupied ? 'occupied' : 'available'} aria-label={`${tableName(number)}, ${occupied ? 'occupied' : 'available'}`} onClick={() => { selectTable(number); setTab('tables'); }}>{String(number).padStart(2, '0')}</button>; })}</div><button type="button" onClick={() => setTab('tables')}>Open table board <ArrowRight size={15} /></button></div><div className="pos-overview-bottom"><div><h4>Recent orders</h4>{orders.slice(-3).reverse().map((order) => <div className="pos-recent" key={order.id}><span className="pos-recent-icon"><ReceiptText size={17} /></span><div><strong>{order.id}</strong><small>{order.table} · {order.items}</small></div><b>{rupiah(order.total)}</b></div>)}</div><div className="pos-flow-card"><span>WORKFLOW</span><h4>One connected view.</h4><p>Orders occupy tables while active. Completed sales and expenses feed the report view.</p><button type="button" onClick={() => setTab('reports')}>View report <ArrowRight size={15} /></button></div></div></>}
            {tab === 'tables' && <><div className="pos-view-heading"><div><small>TABLE MANAGEMENT</small><h3>Table availability</h3><p>Select a table to see whether it is occupied or ready for the next order.</p></div><div className="pos-table-legend"><span><i className="available" /> Available {availableTables.length}</span><span><i className="occupied" /> Occupied {openCount}</span></div></div><div className="pos-table-layout"><div className="pos-table-grid">{tableNumbers.map((number) => { const order = activeOrders.find((item) => item.table === tableName(number)); return <button type="button" key={number} className={`pos-table-card ${order ? 'occupied' : 'available'} ${selectedTable === number ? 'selected' : ''}`} aria-pressed={selectedTable === number} onClick={() => selectTable(number)}><span className="pos-table-icon">{order ? <UsersRound size={24} /> : <UtensilsCrossed size={24} />}</span><strong>{tableName(number)}</strong><small>{order ? 'Occupied' : 'Available'}</small>{order && <em>{order.customer}</em>}</button>; })}</div><aside className="pos-table-detail"><span>SELECTED TABLE</span><h4>{tableName(selectedTable)}</h4>{selectedOrder ? <><div className="pos-detail-status occupied">Occupied · active order</div><dl><div><dt>Order</dt><dd>{selectedOrder.id}</dd></div><div><dt>Customer</dt><dd>{selectedOrder.customer}</dd></div><div><dt>Items</dt><dd>{selectedOrder.items}</dd></div><div><dt>Total</dt><dd>{rupiah(selectedOrder.total)}</dd></div></dl>{paymentOpen ? <div className="pos-payment"><strong>Simulate payment</strong><p>Select a method and confirm. This records a local status only.</p><div className="pos-payment-methods"><button type="button" className={paymentMethod === 'Cash' ? 'selected' : ''} onClick={() => setPaymentMethod('Cash')}>Cash</button><button type="button" className={paymentMethod === 'QRIS' ? 'selected' : ''} onClick={() => setPaymentMethod('QRIS')}>QRIS</button></div>{paymentMethod === 'Cash' && <label>Amount received (Rp)<input type="number" min={selectedOrder.total} step="1" value={cashReceived} onChange={(event) => setCashReceived(event.target.value)} placeholder={String(selectedOrder.total)} />{cashReceived && Number(cashReceived) >= selectedOrder.total && <small>Change: {rupiah(Number(cashReceived) - selectedOrder.total)}</small>}</label>}{paymentMethod === 'QRIS' && <p className="pos-payment-note">QRIS confirmation is simulated. No code is generated and no money moves.</p>}<button className="pos-primary" type="button" disabled={paymentMethod === 'Cash' && (!cashReceived || Number(cashReceived) < selectedOrder.total)} onClick={confirmPayment}><CheckCircle2 size={16} /> Confirm {paymentMethod} payment</button><button className="pos-payment-cancel" type="button" onClick={() => setPaymentOpen(false)}>Cancel</button></div> : <><p>Record a payment to complete this order and release the table.</p><button className="pos-primary" type="button" onClick={() => { setPaymentOpen(true); setPaymentMethod('Cash'); setCashReceived(''); }}><Wallet size={16} /> Simulate payment</button></>}</> : <><div className="pos-detail-status available">Available · ready to seat</div>{lastPayment?.table === selectedTable && <div className="pos-payment-success"><CheckCircle2 size={16} /> {lastPayment.id} paid by {lastPayment.method}{lastPayment.method === 'Cash' ? ` · Change ${rupiah(lastPayment.change)}` : ''}</div>}<p>This table has no active order. Create a fictional order here to see it become occupied.</p><button className="pos-primary" type="button" onClick={() => addSampleOrder(selectedTable)}><Plus size={16} /> Create order</button></>}</aside></div></>}
            {tab === 'orders' && <><div className="pos-view-heading"><div><small>ORDER MANAGEMENT</small><h3>Orders</h3><p>Open an occupied table to record a simulated payment.</p></div><button className="pos-primary" type="button" disabled={availableTables.length === 0} onClick={() => addSampleOrder()}><Plus size={16} /> Add order</button></div><div className="pos-table-wrap"><table className="pos-data-table"><thead><tr><th>Order</th><th>Table</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Action</th></tr></thead><tbody>{orders.slice().reverse().map((order) => <tr key={order.id}><td><strong>{order.id}</strong></td><td>{order.table}</td><td>{order.customer}</td><td>{order.items}</td><td>{rupiah(order.total)}</td><td><span className={`pos-status ${order.status === 'Paid' ? 'paid' : 'open'}`}>{order.status}</span></td><td>{order.status === 'Open' ? <button className="pos-text-action" type="button" onClick={() => { selectTable(Number(order.table.slice(-2))); setTab('tables'); setPaymentOpen(true); }}>Take payment</button> : <span className="pos-paid-method"><CheckCircle2 size={14} /> {order.paymentMethod}</span>}</td></tr>)}</tbody></table></div></>}
            {tab === 'menu' && <><div className="pos-view-heading"><div><small>MENU MANAGEMENT</small><h3>Menu items</h3><p>Fictional items illustrate price and stock visibility.</p></div></div><div className="pos-menu-grid">{sampleMenu.map((item) => <article key={item.name}><div className="pos-menu-icon"><UtensilsCrossed size={23} /></div><small>{item.category}</small><h4>{item.name}</h4><strong>{rupiah(item.price)}</strong><span>{item.stock} in stock</span></article>)}</div></>}
            {tab === 'expenses' && <><div className="pos-view-heading"><div><small>EXPENSE RECORDS</small><h3>Pengeluaran</h3><p>Record a title, amount, and optional note. Entries update the report immediately.</p></div></div><div className="pos-expense-layout"><form className="pos-expense-form" onSubmit={addExpense}><h4>Add an expense</h4><label>Keperluan<input required maxLength={60} value={expenseTitle} onChange={(event) => setExpenseTitle(event.target.value)} placeholder="Contoh: Minyak goreng" /></label><label>Nominal (Rp)<input required type="number" min="1" step="1" value={expenseAmount} onChange={(event) => setExpenseAmount(event.target.value)} placeholder="25000" /></label><label>Catatan (optional)<input maxLength={100} value={expenseNote} onChange={(event) => setExpenseNote(event.target.value)} placeholder="Kebutuhan dapur" /></label><button className="pos-primary" type="submit"><Plus size={16} /> Save expense</button></form><div className="pos-expense-list"><div className="pos-expense-list-head"><h4>Recent expenses</h4><strong>{rupiah(totalExpenses)}</strong></div>{expenses.length === 0 ? <p>No expense entries.</p> : expenses.slice().reverse().map((expense) => <div className="pos-expense-row" key={expense.id}><span className="pos-expense-icon"><ShoppingBag size={17} /></span><div><strong>{expense.title}</strong><small>{expense.note || 'No note'}</small></div><b>{rupiah(expense.amount)}</b><button type="button" aria-label={`Remove ${expense.title}`} onClick={() => setExpenses((current) => current.filter((item) => item.id !== expense.id))}>Remove</button></div>)}</div></div></>}
            {tab === 'reports' && <><div className="pos-view-heading"><div><small>FINANCIAL OVERVIEW</small><h3>Shift report</h3><p>Calculated from completed local orders and the current expense entries.</p></div></div><div className="pos-report-grid"><div><Wallet size={22} /><span>Paid sales</span><strong>{rupiah(revenue)}</strong></div><div><ReceiptText size={22} /><span>Pengeluaran</span><strong>{rupiah(totalExpenses)}</strong></div><div className="pos-profit"><ArrowUpRight size={22} /><span>Sales minus expenses</span><strong>{rupiah(revenue - totalExpenses)}</strong></div></div><div className="pos-report-note"><ShieldCheck size={19} /><p>These records are fictional and reset with the walkthrough. The original app also filters reports by day or month and produces a PDF; no client records are displayed here.</p></div><button type="button" className="pos-report-expenses" onClick={() => setTab('expenses')}>Manage expenses <ArrowRight size={15} /></button></>}
          </div>
        </div><p className="pos-demo-disclaimer">Names and transactions are fictional. Cash and QRIS actions only change local page state; no payment, receipt, or database request occurs.</p>
      </section>
      <section className="pos-about"><div><span className="pos-section-label">03 / ORIGINAL BUILD</span><h2>Built for the rhythm of a small restaurant.</h2></div><div><p>The source project uses Flutter, Riverpod, and Firebase Firestore for menu, orders, and expenses. It also contains role-specific owner and cashier screens, local restaurant settings, and PDF receipt and financial report flows.</p><p>The public case study keeps the workflow idea and removes the client name, credentials, source code, configuration, and live data.</p><a href="index.html#projects">Return to selected works <ArrowRight size={16} /></a></div></section>
    </main><footer className="pos-footer"><span>PRIVATE CLIENT PROJECT / PUBLIC WORKFLOW STUDY</span><a href="index.html#projects">Back to projects ↑</a></footer>
  </div>;
}
