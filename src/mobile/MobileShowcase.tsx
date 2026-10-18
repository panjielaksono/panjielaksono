import { useState } from 'react';
import { Bolt, CheckCircle2, ChevronRight, Clock3, Footprints, House, Plus, Search, Shirt, ShoppingBag, UserRound, Wallet } from 'lucide-react';

type Kind = 'isilistrik' | 'mafits';
type PowerTab = 'home' | 'history' | 'profile';
type FitsTab = 'fits' | 'profile' | 'add';

const meters = [
  { name: 'Rumah Utama', id: '•••• 0001', balance: '12.50', low: false },
  { name: 'Kosan Bandung', id: '•••• 0002', balance: '145.20', low: false },
  { name: 'Rumah i sendiri', id: '•••• 5049', balance: '0.00', low: true },
];

const topupOptions = [
  { amount: 'Rp 20.000', power: '13.2 kWh' },
  { amount: 'Rp 50.000', power: '33.5 kWh' },
  { amount: 'Rp 100.000', power: '67.1 kWh' },
];

const fits = [
  { name: 'Everyday Jacket', size: 'L', date: '12 Sep 2026', note: 'A versatile layer for cooler days.', art: 'jacket', tone: 'olive' },
  { name: 'Weekend Sneakers', size: '42', date: '04 Aug 2026', note: 'Comfortable pair for daily walks.', art: 'sneakers', tone: 'sand' },
  { name: 'Canvas Tote', size: 'One size', date: '21 Jul 2026', note: 'Roomy bag for everyday essentials.', art: 'tote', tone: 'clay' },
];

const maFitsScreens = [
  { src: 'mobile-showcase/mafits-collection.jpg', label: 'Collection', detail: 'Search and browse saved fits.' },
  { src: 'mobile-showcase/mafits-add.jpg', label: 'Add a Fit', detail: 'Record photos, size, date, and notes.' },
  { src: 'mobile-showcase/mafits-profile.jpg', label: 'Profile', detail: 'See the personal vault at a glance.' },
];

const isiListrikScreens = [
  { src: 'mobile-showcase/isilistrik-home.jpg', label: 'Home', detail: 'Balance card and recent token history.' },
  { src: 'mobile-showcase/isilistrik-critical.jpg', label: 'Critical meter', detail: 'Low-balance state shown in red.' },
  { src: 'mobile-showcase/isilistrik-topup.jpg', label: 'Choose token', detail: 'Prototype amount and payment-method selection.' },
  { src: 'mobile-showcase/isilistrik-history.jpg', label: 'History', detail: 'Sample top-up records.' },
  { src: 'mobile-showcase/isilistrik-success.jpg', label: 'Completion', detail: 'Illustrative success state from the simulated checkout flow.' },
  { src: 'mobile-showcase/isilistrik-login.jpg', label: 'Login', detail: 'The entry screen of the original Flutter app.' },
];

function FitArtwork({ art }: { art: string }) {
  return art === 'jacket' ? <Shirt size={112} strokeWidth={1.1} /> : art === 'sneakers' ? <Footprints size={112} strokeWidth={1.1} /> : <ShoppingBag size={112} strokeWidth={1.1} />;
}

function PowerPhone() {
  const [tab, setTab] = useState<PowerTab>('home');
  const [meterIndex, setMeterIndex] = useState(0);
  const [showTopup, setShowTopup] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1);
  const meter = meters[meterIndex];

  return <div className="mobile-phone power-phone" aria-label="IsiListrik sample app interface">
    <div className="phone-status"><span>9:41</span><span>●●●  ▰</span></div>
    <div className="phone-scroll">
      {tab === 'home' && <>
        <div className="power-greeting"><div><small>Selamat Pagi,</small><strong>Pengguna Demo</strong></div><span className="power-avatar">P</span></div>
        <div className="power-section-label">METERAN SAYA <span>0{meterIndex + 1} / 0{meters.length}</span></div>
        <button type="button" className={`power-meter${meter.low ? ' is-low' : ''}`} onClick={() => setMeterIndex((meterIndex + 1) % meters.length)} aria-label="Switch sample meter">
          <span className="power-meter-top"><House size={20}/><span>{meter.name}<small>ID: {meter.id}</small></span></span>
          <span className="power-meter-balance"><small>Sisa Daya Listrik</small><strong>{meter.balance} <em>kWh</em></strong></span>
          <span className="power-meter-badge">{meter.low ? '⚠ Status: Kritis!' : '✓ Status: Aman'}</span>
        </button>
        <div className="power-dots">{meters.map((item, index) => <button type="button" key={item.name} className={index === meterIndex ? 'is-active' : ''} aria-label={`Show ${item.name}`} onClick={() => setMeterIndex(index)} />)}</div>
        <button type="button" className="power-topup-btn" onClick={() => setShowTopup(!showTopup)}>{showTopup ? 'Tutup Pilihan Token' : `Isi Token ${meter.name}`} <ChevronRight size={16}/></button>
        {showTopup && <div className="power-options"><div className="power-section-label">PILIH NOMINAL SIMULASI</div>{topupOptions.map((option, index) => <button type="button" className={selectedAmount === index ? 'is-selected' : ''} key={option.amount} onClick={() => setSelectedAmount(index)}><span>{option.amount}</span><small>≈ {option.power}</small></button>)}<p>Preview pilihan: {topupOptions[selectedAmount].amount}. Tidak ada pembayaran atau perubahan saldo.</p></div>}
        <div className="power-section-label power-history-title">RIWAYAT SINGKAT</div>
        <div className="power-history-row"><span className="power-history-icon"><Bolt size={18}/></span><span><strong>Isi Token 50k</strong><small>20 Okt · Kosan Bandung</small></span><b>+33.5</b></div>
        <div className="power-history-row"><span className="power-history-icon"><Bolt size={18}/></span><span><strong>Isi Token 20k</strong><small>15 Okt · Rumah Utama</small></span><b>+13.2</b></div>
      </>}
      {tab === 'history' && <><h2 className="phone-screen-title">Riwayat Transaksi</h2><p className="phone-sample-label">Sample records from the original prototype</p>{['Isi Token 50k','Isi Token 20k','Isi Token 100k'].map((item, index) => <div className="power-history-row" key={item}><span className="power-history-icon"><Clock3 size={18}/></span><span><strong>{item}</strong><small>{['20 Okt · Kosan Bandung','15 Okt · Rumah Utama','01 Okt · Rumah Utama'][index]}</small></span><b>{['+33.5','+13.2','+67.1'][index]}</b></div>)}</>}
      {tab === 'profile' && <div className="power-profile"><span className="power-profile-avatar">P</span><h2>Pengguna Demo</h2><p>Mobile prototype preview</p><div><House size={18}/> Kelola Meteran <ChevronRight size={17}/></div><div><Wallet size={18}/> Riwayat Token <ChevronRight size={17}/></div></div>}
    </div>
    <div className="phone-bottom-nav"><button type="button" className={tab === 'home' ? 'is-active' : ''} onClick={() => setTab('home')}><House size={19}/>Home</button><button type="button" className={tab === 'history' ? 'is-active' : ''} onClick={() => setTab('history')}><Clock3 size={19}/>Riwayat</button><button type="button" className={tab === 'profile' ? 'is-active' : ''} onClick={() => setTab('profile')}><UserRound size={19}/>Profil</button></div>
  </div>;
}

function FitsPhone() {
  const [tab, setTab] = useState<FitsTab>('fits');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<number | null>(null);
  const visibleFits = fits.filter((fit) => fit.name.toLowerCase().includes(query.toLowerCase()));

  return <div className="mobile-phone fits-phone" aria-label="maFits sample app interface">
    <div className="phone-status"><span>9:41</span><span>●●●  ▰</span></div>
    <div className="phone-scroll">
      {selected !== null ? <><button type="button" className="fits-back" onClick={() => setSelected(null)}>← Back to Fits</button><div className={`fits-detail-art tone-${fits[selected].tone}`}><FitArtwork art={fits[selected].art} /></div><div className="fits-detail-meta"><span>SAMPLE ITEM</span><h2>{fits[selected].name}</h2><b>Size {fits[selected].size}</b><p>Bought: {fits[selected].date}</p><h3>Fit Notes</h3><p>{fits[selected].note}</p></div></> : tab === 'fits' ? <><div className="fits-heading"><div><small>YOUR COLLECTION</small><h2>My Fits<span>.</span></h2></div><span className="fits-count">0{fits.length} ITEMS</span></div><label className="fits-search"><Search size={17}/><input aria-label="Search sample fits" placeholder="Search product..." value={query} onChange={(event) => setQuery(event.target.value)} /></label><p className="phone-sample-label">Curated sample items · No database connection</p><div className="fits-list">{visibleFits.length ? visibleFits.map((fit) => { const index = fits.indexOf(fit); return <button type="button" className="fits-item" key={fit.name} onClick={() => setSelected(index)}><span className={`fits-art tone-${fit.tone}`}><FitArtwork art={fit.art} /><small>MAFITS / SAMPLE</small></span><span className="fits-item-info"><strong>{fit.name}</strong><span>Size: {fit.size} <b>↗</b></span><small>Bought: {fit.date}</small></span></button>; }) : <p className="fits-empty">No sample fits match that search.</p>}</div></> : tab === 'add' ? <div className="fits-add-preview"><span>ADD FIT / ORIGINAL FLOW</span><h2>Keep the details.</h2><div><span>01</span> Choose up to four photos</div><div><span>02</span> Add name, size, date, and notes</div><div><span>03</span> Save to your collection</div><p>This showcase explains the flow only. Photo selection and saving are unavailable here.</p></div> : <div className="fits-profile"><div className="fits-profile-avatar"><UserRound size={56}/></div><h2>Demo Profile</h2><p>{fits.length} sample items in this showcase</p><div className="fits-profile-note">The original Flutter app stores item details and images in Supabase. This browser preview uses local sample data only.</div></div>}
    </div>
    {selected === null && <div className="fits-bottom-nav"><button type="button" className={tab === 'fits' ? 'is-active' : ''} onClick={() => setTab('fits')}><Shirt size={20}/>Fits</button><button type="button" className="fits-add" aria-label="Show add item flow" onClick={() => setTab('add')}><Plus size={23}/></button><button type="button" className={tab === 'profile' ? 'is-active' : ''} onClick={() => setTab('profile')}><UserRound size={20}/>Profile</button></div>}
  </div>;
}

export function MobileShowcase({ kind }: { kind: Kind }) {
  const power = kind === 'isilistrik';
  const [activeScreen, setActiveScreen] = useState(0);
  return <div className={`mobile-showcase ${power ? 'mobile-power' : 'mobile-fits'}`}>
    <nav className="mobile-topbar"><a href="index.html#projects">MPL<span> / PROJECTS</span></a><a href="index.html#projects">← Back to portfolio</a></nav>
    <header className="mobile-hero">
      <div className="mobile-hero-copy"><span className="mobile-eyebrow">FLUTTER APP / LIMITED SHOWCASE</span><h1>{power ? <><img className="power-title-icon" src="mobile-showcase/isilistrik-icon.jpg" alt="" />Isi<span>Listrik</span></> : <><img className="mafits-title-icon" src="mobile-showcase/mafits-icon.png" alt="" />ma<span>Fits</span></>}</h1><p>{power ? 'A mobile electricity-token prototype for viewing meter balances, choosing top-up amounts, and reviewing transaction history.' : 'A personal clothing vault for browsing fits, searching items, and keeping size, purchase date, photos, and notes together.'}</p><a href="#try-demo" className="mobile-hero-cta">Explore sample interface <span>↓</span></a><div className="mobile-tech">{power ? 'FLUTTER  /  DART  /  PROVIDER' : 'FLUTTER  /  DART  /  SUPABASE'}</div></div>
      <div className="mobile-hero-visual" aria-hidden="true"><div className="mobile-orbit one"/><div className="mobile-orbit two"/><div className={`mobile-hero-phone${power ? ' power-hero-phone' : ''}`}><img src={power ? 'mobile-showcase/isilistrik-home.jpg' : 'mobile-showcase/mafits-collection.jpg'} alt="" /></div><span>BUILT FOR MOBILE</span></div>
    </header>
    <main>
      <section className="mobile-demo-section" id="try-demo"><div className="mobile-demo-copy"><span className="mobile-section-index">01 / SAMPLE INTERFACE</span><h2>{power ? 'Electricity, at a glance.' : 'A wardrobe in your pocket.'}</h2><p>{power ? 'Tap between sample meters, open a top-up choice, or view history and profile screens. Amounts and balances are example values; no payment is made.' : 'Search the sample collection, open an item, or switch to the profile view. The original app supports adding photos and storing items in Supabase; this showcase makes no uploads or writes.'}</p><div className="mobile-demo-notice"><CheckCircle2 size={19}/><span>Browser preview with local sample data. No sign-in, payment, upload, or live backend access.</span></div><div className="mobile-feature-list">{(power ? ['Meter balance cards','Top-up amount selection','Transaction history'] : ['Searchable fit collection','Item size and notes','Photo-based item flow']).map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div></div><div className="mobile-phone-stage">{power ? <PowerPhone/> : <FitsPhone/>}</div></section>
      <section className="mobile-screen-gallery" aria-labelledby="mobile-gallery-title">
        <div className="mobile-gallery-copy"><span className="mobile-section-index">02 / ORIGINAL APP SCREENS</span><h2 id="mobile-gallery-title">Inside {power ? 'IsiListrik' : 'maFits'}.</h2><p>{power ? 'Actual screens from the Flutter prototype. Its checkout and completion views simulate a token purchase; this showcase does not process payments.' : 'Actual screens from the Flutter app. Select a view to see how the collection, item form, and profile are presented on mobile.'}</p><div className="mobile-gallery-tabs" role="group" aria-label={`Choose ${power ? 'IsiListrik' : 'maFits'} screenshot`}>{(power ? isiListrikScreens : maFitsScreens).map((screen, index) => <button type="button" className={activeScreen === index ? 'is-active' : ''} aria-pressed={activeScreen === index} key={screen.src} onClick={() => setActiveScreen(index)}><span>0{index + 1}</span>{screen.label}</button>)}</div><p className="mobile-screen-detail">{(power ? isiListrikScreens : maFitsScreens)[activeScreen].detail}</p></div>
        <div className="mobile-gallery-stage"><img src={(power ? isiListrikScreens : maFitsScreens)[activeScreen].src} alt={`${power ? 'IsiListrik' : 'maFits'} ${(power ? isiListrikScreens : maFitsScreens)[activeScreen].label} screen`} /></div>
      </section>
      <section className="mobile-about-section"><div><span className="mobile-section-index">03 / THE ORIGINAL PROJECT</span><h2>From Flutter to a focused showcase.</h2></div><div><p>{power ? 'The source app uses Flutter with Provider state for meter selection, device management, simulated token checkout, and transaction views. The portfolio presents a small, safe slice of that interface.' : 'The source app uses Flutter and Supabase for a fit collection, with image selection and compression before upload. The portfolio presents a local sample catalog that demonstrates the browsing experience.'}</p><a href="index.html#projects">Return to selected works →</a></div></section>
    </main><footer className="mobile-footer"><span>{power ? 'ISILISTRIK' : 'MAFITS'} / PORTFOLIO SHOWCASE</span><a href="index.html#projects">Back to projects ↑</a></footer>
  </div>;
}
