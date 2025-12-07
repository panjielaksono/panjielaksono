const chaptersData = [
            // chapter 1
            { 
                title: "Business & Tech Trends", 
                content: `
                    <h2 style="color:#fa7a3e; margin-top:20px;"> 1.2 Business Process Management</h2>
                    <p><strong>Konsep Utama:</strong> Business Process adalah serangkaian langkah input menjadi output untuk mencapai tujuan. Efisiensi di sini sangat menentukan kinerja perusahaan.</p>
                    
                    <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0; border-radius:4px;">
                        <strong> Contoh Kasus: AutoTrader.com</strong><br>
                        Masalah: Proses kontrak lama butuh 8,3 hari.<br>
                        Solusi: Penerapan BPM.<br>
                        Hasil: Berkurang jadi 1 hari, sisa 6 tugas manual, dan biaya turun.
                    </div>

                    <p><strong>3 Komponen Proses Bisnis:</strong></p>
                    <ul>
                        <li><b>People:</b> Pelaku kegiatan (pegawai, manajer, pelanggan).</li>
                        <li><b>Technology:</b> Sistem, software, alat bantu.</li>
                        <li><b>Information:</b> Data untuk keputusan.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 1.3 The Power of Competitive Advantage</h2>
                    <p>Keunggulan yang membuat perusahaan mampu mengungguli pesaing. Dibentuk oleh struktur industri dan kemampuan adaptasi (agility).</p>
                    
                    <p><strong>Porter’s Five Forces Model:</strong></p>
                    <ol>
                        <li>Threat of New Entrants (Pesaing baru)</li>
                        <li>Bargaining Power of Suppliers (Kekuatan pemasok)</li>
                        <li>Bargaining Power of Buyers (Kekuatan pembeli)</li>
                        <li>Threat of Substitutes (Produk pengganti)</li>
                        <li>Industry Rivalry (Persaingan internal)</li>
                    </ol>

                    <p><strong>Strategi Menang:</strong> Cost Leadership (Murah), Differentiation (Unik), Niche Strategy (Fokus pasar sempit).</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 1.4 Enterprise Technology Trends</h2>
                    <ul>
                        <li><b>Mobile Business Apps:</b> Pindah ke cloud, efisien tapi ada risiko keamanan.</li>
                        <li><b>Social Engagement:</b> Aktif di sosmed tapi wajib patuh regulasi privasi.</li>
                        <li><b>NFC (Near Field Communication):</b> Pembayaran cepat & verifikasi produk.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 1.5 IT Expertise & Career Value</h2>
                    <p>Memahami teknologi memberi keunggulan karier. Tren pekerjaan IT tumbuh 53% dengan kenaikan gaji 4-6% per tahun.</p>
                    <p><b>Posisi Kunci:</b> CTO, Project Manager, Data Scientist, Cybersecurity Analyst.</p>
                    
                    <div style="margin-top:30px;">
                        <div style="background:#e3f2fd; padding:15px; border-radius:8px; margin-bottom:15px;">
                            <h4 style="margin-bottom:10px; color:#1565c0;"> Case Study: Pei Wei Asian Diner</h4>
                            <p><b>Masalah:</b> Promosi tradisional gagal.<br>
                            <b>Solusi:</b> Cross-channel marketing (Email, Twitter, FB).<br>
                            <b>Hasil:</b> 20.000 pendaftar baru dalam 2 minggu.</p>
                        </div>

                        <div style="background:#e8f5e9; padding:15px; border-radius:8px;">
                            <h4 style="margin-bottom:10px; color:#2e7d32;"> Case Study: Teradata</h4>
                            <p>Big data analytics membantu bisnis "Knowing More" agar bisa "Doing More". Keputusan jadi lebih cepat dan tepat.</p>
                        </div>
                    </div>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Besar Chapter 1</h3>
                        <p style="margin-bottom:0;">Dunia bisnis kini bergantung pada digital transformation. Pekerja modern harus adaptif dan melek teknologi agar tetap relevan.</p>
                    </div>
                ` 
            },
            // chapter 2
            { 
                    title: "Data Governance & IT Architecture", 
                    content: `
                        <p>Data dan teknologi informasi adalah dua komponen utama keberhasilan organisasi modern. Kuncinya ada pada pengelolaan data yang efisien dan arsitektur yang kuat.</p>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.1 Information Management</h2>
                        <p>Proses mengumpulkan, memproses, menyimpan, dan melindungi data agar konsisten di seluruh organisasi.</p>
                        
                        <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0; border-radius:4px;">
                            <strong> Masalah Umum Organisasi:</strong>
                            <ul style="margin-bottom:0;">
                                <li><b>Data Silos:</b> Data terisolasi di satu departemen saja.</li>
                                <li><b>Lost Data:</b> Data hilang atau tidak tercatat benar.</li>
                                <li><b>Nonstandardized:</b> Format berbeda menyulitkan analisis.</li>
                            </ul>
                        </div>
                        <p>Manfaat manajemen yang baik: Meningkatkan kualitas keputusan, mengurangi risiko error, dan menjamin kepatuhan regulasi.</p>

                        <h2 style="color:#fa7a3e;"> 2.2 Enterprise Architecture</h2>
                        <p><b>Enterprise Architecture (EA)</b> menggambarkan keseluruhan sistem teknologi, sedangkan <b>Data Governance</b> mengatur kebijakan siapa yang mengelola data.</p>
                        
                        <p><strong>4 Komponen Enterprise Architecture:</strong></p>
                        <ul>
                            <li><b>Business Arch:</b> Proses bisnis & tujuan organisasi.</li>
                            <li><b>Application Arch:</b> Koneksi antar aplikasi.</li>
                            <li><b>Data Arch:</b> Pengaturan penyimpanan & akses data.</li>
                            <li><b>Technical Arch:</b> Infrastruktur hardware & software.</li>
                        </ul>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.3 Information System</h2>
                        <p align="center" style="background:#e0e0e0; padding:10px; border-radius:8px; font-weight:bold; letter-spacing:1px;">
                            DATA ➔ INFORMASI ➔ KNOWLEDGE
                        </p>
                        <p><strong>Jenis Sistem Informasi:</strong></p>
                        <ul>
                            <li><b>TPS:</b> Mencatat transaksi harian.</li>
                            <li><b>MIS:</b> Menyediakan laporan rutin.</li>
                            <li><b>DSS:</b> Mendukung keputusan strategis.</li>
                            <li><b>Data Warehouse:</b> Analisis data jangka panjang.</li>
                        </ul>

                        <h2 style="color:#fa7a3e;"> 2.4 Data Centers & Cloud</h2>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom:20px;">
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <h4 style="margin:0; color:#fa7a3e;"> Data Center</h4>
                                <p style="font-size:14px;">Fasilitas fisik server perusahaan.<br>
                                <b>+:</b> Kontrol penuh.<br>
                                <b>-:</b> Mahal & terbatas.</p>
                            </div>
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <h4 style="margin:0; color:#fa7a3e;"> Cloud Computing</h4>
                                <p style="font-size:14px;">Akses resource via internet.<br>
                                <b>+:</b> Hemat & Scalable.<br>
                                <b>Tipe:</b> Public & Private.</p>
                            </div>
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <h4 style="margin:0; color:#fa7a3e;"> Virtualization</h4>
                                <p style="font-size:14px;">Satu server fisik, banyak Virtual Machine (VM).<br>
                                <b>+:</b> Efisiensi energi.</p>
                            </div>
                        </div>

                        <h2 style="color:#fa7a3e;"> 2.5 Cloud Services (Agility)</h2>
                        <p>Cloud membuat bisnis lincah (Agile) dan cepat beradaptasi.</p>

                        <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                            <tr style="background-color:#fa7a3e; color:white;">
                                <th style="padding:8px; text-align:left;">Model</th>
                                <th style="padding:8px; text-align:left;">Fungsi</th>
                                <th style="padding:8px; text-align:left;">Contoh</th>
                            </tr>
                            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>SaaS</b></td><td style="padding:8px;">Aplikasi via Web</td><td style="padding:8px;">Gmail</td></tr>
                            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>PaaS</b></td><td style="padding:8px;">Platform Dev</td><td style="padding:8px;">App Engine</td></tr>
                            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>IaaS</b></td><td style="padding:8px;">Sewa Infra</td><td style="padding:8px;">AWS EC2</td></tr>
                            <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>DaaS</b></td><td style="padding:8px;">Data on-demand</td><td style="padding:8px;">API Analytics</td></tr>
                        </table>

                        <div style="background:#ffebee; padding:10px; border-radius:5px;">
                            <strong> Risiko Cloud:</strong> Vendor lock-in, Keamanan data, Masalah privasi/hukum, dan SLA yang tidak jelas.
                        </div>

                        <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                            <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 2</h3>
                            <p>Data governance dan arsitektur TI adalah fondasi utama strategi teknologi jangka panjang untuk efisiensi dan keamanan.</p>
                            <p style="font-style:italic; border-top:1px solid #555; padding-top:10px; margin-top:10px;">“Data yang dikelola dengan baik bukan hanya aset, tapi kekuatan utama dalam membangun masa depan digital yang tangguh.”</p>
                        </div>
                    ` 
            },
            // chapter 3
            { 
                    title: "Data Management & Big Data", 
                    content: `
                        <p>Data adalah aset paling berharga. Melalui manajemen data, Big Data, dan pengelolaan arsip, organisasi bisa mencapai efisiensi jangka panjang.</p>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.1 Database Management (DBMS)</h2>
                        <p><strong>Database</strong> menyimpan data operasional harian, sedangkan <strong>Data Warehouse</strong> menyimpan data historis untuk analisis.</p>
                        
                        <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                            <strong> Arsitektur Database:</strong>
                            <ul style="margin-bottom:0;">
                                <li><b>Centralized:</b> Semua di satu server (Mudah, tapi rawan bottleneck).</li>
                                <li><b>Distributed:</b> Tersebar di lokasi jaringan (Cepat & efisien).</li>
                            </ul>
                        </div>
                        
                        <p><strong> Master Reference File (MRF):</strong> Sumber data utama acuan (contoh: data pelanggan) untuk mencegah duplikasi dan menjamin konsistensi.</p>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.2 Data Warehouse & Big Data</h2>
                        <p>DW menyatukan data lewat proses <b>ETL (Extract, Transform, Load)</b>. Ada juga <i>Active DW</i> untuk update real-time.</p>
                        
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px; margin-top:10px;">
                            <h4 style="margin-top:0; color:#fa7a3e;"> Big Data Analytics (4V)</h4>
                            <ul style="margin-bottom:0;">
                                <li><b>Volume:</b> Jumlah data besar.</li>
                                <li><b>Velocity:</b> Kecepatan pertumbuhan data.</li>
                                <li><b>Variety:</b> Format beragam (teks, gambar, sensor).</li>
                                <li><b>Veracity:</b> Keakuratan data.</li>
                            </ul>
                            <p style="font-size:13px; margin-top:10px; color:#666;">Teknologi: Hadoop, MapReduce, IoT Analytics.</p>
                        </div>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.3 Data & Text Mining</h2>
                        <p><b>Data Mining:</b> Pola dari data terstruktur.<br>
                        <b>Text Mining:</b> Pola dari data tidak terstruktur (email, sosmed).</p>

                        <div style="background:#e3f2fd; padding:15px; border-radius:8px; margin:15px 0;">
                            <strong> Nilai Bisnis Nyata:</strong>
                            <ul style="margin-bottom:0;">
                                <li><b>Argo Corp:</b> Stok turun 81% karena variasi produk efisien.</li>
                                <li><b>Walmart:</b> Konversi naik 10-15% dari analisis clickstream.</li>
                                <li><b>McDonald’s:</b> Hemat biaya via analisis gambar otomatis.</li>
                            </ul>
                        </div>

                        <h2 style="color:#fa7a3e;"> 2.4 Business Intelligence (BI)</h2>
                        <p>Integrasi data dan analisis untuk optimasi keputusan.</p>

                        <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                            <tr style="background-color:#fa7a3e; color:white;">
                                <th style="padding:8px; text-align:left;">Aspek</th>
                                <th style="padding:8px; text-align:left;">Business Intelligence</th>
                                <th style="padding:8px; text-align:left;">Business Analytics</th>
                            </tr>
                            <tr style="border-bottom:1px solid #ddd; background:#fff;"><td style="padding:8px;"><b>Fokus</b></td><td style="padding:8px;">Apa yang sudah terjadi?</td><td style="padding:8px;">Apa yang akan terjadi?</td></tr>
                            <tr style="border-bottom:1px solid #ddd; background:#f9f9f9;"><td style="padding:8px;"><b>Jenis</b></td><td style="padding:8px;">Descriptive</td><td style="padding:8px;">Predictive & Prescriptive</td></tr>
                            <tr style="border-bottom:1px solid #ddd; background:#fff;"><td style="padding:8px;"><b>Sumber</b></td><td style="padding:8px;">Data Warehouse</td><td style="padding:8px;">Data Mentah & Mining</td></tr>
                        </table>

                        <p> <b>Tantangan:</b> Information overload & kualitas data buruk.</p>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 2.5 Electronic Records (ERM)</h2>
                        <p>Sistem pengelolaan arsip digital untuk kebutuhan audit dan hukum (Legalitas).</p>
                        
                        <p><strong> Prinsip ARMA (Standar Internasional):</strong></p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 14px;">
                            <div>✅ Accountability</div>
                            <div>✅ Transparency</div>
                            <div>✅ Integrity</div>
                            <div>✅ Protection</div>
                            <div>✅ Compliance</div>
                            <div>✅ Availability</div>
                            <div>✅ Retention</div>
                            <div>✅ Disposition</div>
                        </div>

                        <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                            <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 3</h3>
                            <p>Manajemen data modern (DBMS, BI, ERM) adalah pilar digitalisasi. Data bukan sekadar catatan, tapi sumber wawasan strategis masa depan.</p>
                        </div>
                    ` 
            },
            // chapter 4
            { 
                title: " Networks & Sustainability", 
                content: `
                    <h2 style="color:#fa7a3e;"> 4.1 Data Networks & APIs</h2>
                    <p>Jaringan adalah tulang punggung bisnis digital. Isu utama saat ini adalah transisi dari <b>IPv4</b> (yang sudah habis) ke <b>IPv6</b> untuk mengakomodasi miliaran perangkat IoT baru.</p>
                    
                    <div style="background:#e3f2fd; padding:15px; border-radius:8px; margin-bottom:15px;">
                        <h4 style="margin-top:0; color:#1565c0;"> Case Study: Sony's IPv6 Migration</h4>
                        <p style="font-size:13px;">
                            <b>Masalah:</b> Sony memiliki banyak anak perusahaan dengan jaringan independen yang menggunakan alamat IP duplikat, menghambat komunikasi dan kolaborasi global.<br>
                            <b>Solusi:</b> Migrasi ke jaringan IPv6 yang menyediakan alamat IP hampir tak terbatas.<br>
                            <b>Hasil:</b> Terciptanya "One Sony" dengan kolaborasi real-time tanpa hambatan antar unit bisnis global.
                        </p>
                    </div>

                    <p><strong>API (Application Programming Interface):</strong></p>
                    <p>Gerbang software yang memungkinkan aplikasi berbeda untuk saling berbicara. Contoh: Uber menggunakan Google Maps API untuk peta.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 4.2 Wireless & Mobile Infrastructure</h2>
                    <p>Revolusi <b>4G & 5G</b> serta teknologi jarak dekat mengubah cara kita berinteraksi dengan dunia fisik.</p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>NFC (Near Field Comm):</b><br>Komunikasi jarak sangat dekat (tap). Digunakan untuk pembayaran (Apple Pay) dan tiket elektronik.
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>WiMAX & LTE:</b><br>Standar jaringan nirkabel kecepatan tinggi untuk area luas (MAN/WAN).
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Smart City:</b><br>Contoh: Santander, Spanyol menggunakan ribuan sensor untuk memantau lalu lintas dan polusi secara real-time.
                        </div>
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 4.3 Collaboration Technologies</h2>
                    <p>Teknologi jaringan memungkinkan kerja kelompok virtual dan berbagi pengetahuan (Knowledge Sharing).</p>
                    
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Intranet:</b> Jaringan privat internal perusahaan untuk karyawan.</li>
                        <li><b>Extranet:</b> Jaringan privat yang bisa diakses pihak luar terpercaya (supplier/partner).</li>
                        <li><b>VPN (Virtual Private Network):</b> Terowongan enkripsi aman untuk mengakses jaringan perusahaan dari jarak jauh.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 4.4 Sustainability & Green IT</h2>
                    <p>Industri ICT menyumbang jejak karbon signifikan. <b>Green IT</b> berfokus pada pengurangan dampak lingkungan melalui efisiensi energi di data center dan pengurangan limbah elektronik (e-waste).</p>
                    
                    <div style="background:#ffebee; padding:10px; border-left:4px solid #d32f2f;">
                        <strong> Ethical Issue: Distracted Driving</strong><br>
                        Konektivitas konstan memiliki sisi gelap. Penggunaan ponsel saat mengemudi (texting/calling) meningkatkan risiko kecelakaan secara signifikan, memicu banyak negara membuat hukum pelarangan yang ketat.
                    </div>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 4</h3>
                        <p>Jaringan bukan hanya soal kabel dan sinyal, tapi tentang efisiensi operasional dan keberlanjutan. Tantangannya adalah menyeimbangkan kebutuhan akan kecepatan (5G/Broadband) dengan tanggung jawab lingkungan (Green IT) dan etika sosial.</p>
                    </div>
                ` 
            },
            // chapter 5
            { 
            title: "Cybersecurity & Risk", 
            content: `
                <p>Teknologi membawa manfaat sekaligus risiko. Manajemen risiko siber (cyber risk management) diperlukan untuk melindungi aset digital, data, dan reputasi.</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 5.1 The Face of Cyberthreats</h2>
                <p>Ancaman makin canggih (contoh: <b>APT - Advanced Persistent Threats</b>). Pertahanan tradisional tidak cukup karena Cloud, Mobile, dan IoT memperluas celah serangan.</p>

                <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                    <strong> Strategi Pertahanan:</strong>
                    <ul style="margin-bottom:0;">
                        <li>Fokus pada data kritis & infrastruktur vital.</li>
                        <li>Pelatihan SDM & Incident Response Plan.</li>
                        <li>Investasi deteksi dini & real-time monitoring.</li>
                    </ul>
                </div>

                <p><strong> Konsep Dasar Keamanan:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                    <tr style="background-color:#fa7a3e; color:white;">
                        <th style="padding:8px; text-align:left;">Istilah</th>
                        <th style="padding:8px; text-align:left;">Penjelasan</th>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Threat</b></td><td style="padding:8px;">Tindakan/entitas penyebab kerugian.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Vulnerability</b></td><td style="padding:8px;">Kelemahan/Celah keamanan.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Exploit</b></td><td style="padding:8px;">Teknik memanfaatkan celah.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Risk</b></td><td style="padding:8px;">Probabilitas kejadian x Kerugian.</td></tr>
                </table>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 5.2 Cyber Risk Management</h2>
                <p>Proses identifikasi, evaluasi, dan pengendalian risiko ke tingkat yang dapat diterima.</p>
                
                <p><strong> Prinsip Utama (CIA Triad):</strong></p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; text-align:center; margin-bottom:20px;">
                    <div style="background:#e3f2fd; padding:10px; border-radius:5px;">
                        <h4 style="margin:0; color:#1565c0;">Confidentiality</h4>
                        <p style="font-size:12px;">Hanya akses berwenang.</p>
                    </div>
                    <div style="background:#e8f5e9; padding:10px; border-radius:5px;">
                        <h4 style="margin:0; color:#2e7d32;">Integrity</h4>
                        <p style="font-size:12px;">Data tidak diubah tanpa izin.</p>
                    </div>
                    <div style="background:#fff3e0; padding:10px; border-radius:5px;">
                        <h4 style="margin:0; color:#e65100;">Availability</h4>
                        <p style="font-size:12px;">Data ada saat butuh.</p>
                    </div>
                </div>
                
                <p><b>Mekanisme Kontrol:</b> Firewall, Enkripsi, Autentikasi (MFA), dan IDS (Intrusion Detection System).</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 5.3 Mobile & Cloud Security</h2>
                <p><b>Risiko:</b> BYOD (Bring Your Own Device), Phishing, dan Aplikasi berbahaya.</p>
                <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                    <li><b>Biometrik:</b> Fingerprint/Face ID.</li>
                    <li><b>Remote Wipe:</b> Hapus data jarak jauh jika HP hilang.</li>
                    <li><b>Patch & Update:</b> Selalu update sistem.</li>
                    <li><b>Cloud Security:</b> Enkripsi berlapis.</li>
                </ul>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 5.4 Defending Against Fraud</h2>
                <p>Jenis: Penggelapan (Embezzlement), Suap, Korupsi, dan Manipulasi Laporan Keuangan.</p>

                <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                    <tr style="background-color:#333; color:white;">
                        <th style="padding:8px; text-align:left;">Upaya</th>
                        <th style="padding:8px; text-align:left;">Penjelasan</th>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Audit</b></td><td style="padding:8px;">Pemeriksaan internal rutin.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Control</b></td><td style="padding:8px;">Kontrol internal ketat.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Monitoring</b></td><td style="padding:8px;">Pantau aktivitas karyawan.</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Edukasi</b></td><td style="padding:8px;">Pelatihan etika kerja.</td></tr>
                </table>

                <div style="background:#ffebee; padding:15px; border-left:4px solid #d32f2f; margin:15px 0;">
                    <strong> RED FLAGS (Tanda Bahaya):</strong>
                    <ul style="margin-bottom:0;">
                        <li><b>Keuangan:</b> Laporan laba aneh, transaksi ganda.</li>
                        <li><b>Perilaku:</b> Karyawan hidup mewah mendadak, menolak cuti, sering lembur sendirian.</li>
                    </ul>
                </div>

                <h2 style="color:#fa7a3e;"> 5.5 Compliance & Control</h2>
                <p>Prinsip: Prevention, Detection, Containment, Recovery, Correction.</p>
                <p><b>Penerapan Penting:</b>
                    <br>👉 <i>Business Continuity Planning (BCP):</i> Rencana pemulihan bencana.
                    <br>👉 <i>Information Systems Auditing:</i> Evaluasi efektivitas sistem.
                </p>

                <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                    <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 5</h3>
                    <p>Keamanan siber adalah tanggung jawab seluruh organisasi, bukan hanya IT. Diperlukan manajemen risiko, pertahanan berlapis, dan budaya etika.</p>
                    <p style="font-style:italic; border-top:1px solid #555; padding-top:10px; margin-top:10px;">“Cybersecurity bukan hanya tentang teknologi — tapi tentang kesadaran, tanggung jawab, dan kolaborasi.”</p>
                </div>
            ` 
            },
            // chapter 6
            { 
            title: "Search & Recommendation Tech", 
            content: `
                <p>Teknologi pencarian, semantik, dan rekomendasi adalah fondasi strategi digital modern untuk menarik pembeli dan menciptakan pengalaman personal.</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 6.1 Search Technology</h2>
                <p>Membantu pengguna menemukan informasi relevan, tidak hanya di Google tapi juga di <b>Internal Database</b> dan <b>E-Commerce Search</b>.</p>
                
                <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                    <strong> Manfaat Utama:</strong>
                    <ul style="margin-bottom:0;">
                        <li>Menghubungkan perusahaan dengan konsumen.</li>
                        <li>Mengubah data pencarian menjadi <i>Business Insight</i>.</li>
                    </ul>
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 6.2 Organic Search (SEO)</h2>
                <p><b>SEO</b> adalah proses meningkatkan visibilitas website di hasil pencarian alami (tanpa iklan).</p>
                
                <div style="background:#e8f5e9; padding:15px; border-radius:8px; margin-bottom:15px;">
                    <h4 style="margin-top:0; color:#2e7d32;"> Manfaat SEO:</h4>
                    <ul style="margin-bottom:0;">
                        <li>Menarik pelanggan tanpa biaya iklan berulang (Hemat).</li>
                        <li>Meningkatkan kredibilitas & Brand Awareness.</li>
                        <li>Trafik jangka panjang.</li>
                    </ul>
                </div>

                <h2 style="color:#fa7a3e;"> 6.3 Pay-Per-Click (PPC)</h2>
                <p>Model iklan berbayar (Google Ads, Social Ads) untuk trafik instan.</p>
                
                <p><strong> Keunggulan vs Kelemahan PPC:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                    <tr style="background-color:#fa7a3e; color:white;">
                        <th style="padding:8px; text-align:left; width:50%;">✅ Keunggulan</th>
                        <th style="padding:8px; text-align:left; width:50%;">❌ Kelemahan</th>
                    </tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Hasil Cepat & Terukur</td><td style="padding:8px;">Biaya Tinggi (Keyword Populer)</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Target Audiens Spesifik</td><td style="padding:8px;">Traffic Hilang jika Stop Bayar</td></tr>
                    <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;">Fleksibel</td><td style="padding:8px;">Butuh Monitoring Rutin</td></tr>
                </table>

                <p><b>Strategi Efektif:</b> Riset Keyword, Optimasi Ad Copy, dan Landing Page yang cepat.</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 6.4 Semantic Technology</h2>
                <p>Sistem memahami <b>makna dan konteks</b> data, bukan sekadar mencocokkan kata kunci.</p>
                
                <p><strong> Komponen Utama:</strong></p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom:20px;">
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>Ontology:</b><br>Struktur hubungan antar konsep.
                    </div>
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>Metadata & RDF:</b><br>Format Subjek-Predikat-Objek.
                    </div>
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>SPARQL:</b><br>Bahasa kueri berbasis makna.
                    </div>
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 6.5 Recommendation Engines</h2>
                <p>Sistem yang menyarankan produk/konten (Upselling & Cross-selling).</p>
                
                <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                    <li><b>Content-Based:</b> Berdasarkan kemiripan produk.</li>
                    <li><b>Collaborative Filtering:</b> Berdasarkan perilaku user lain yang mirip.</li>
                    <li><b>Hybrid System:</b> Kombinasi keduanya (Paling Akurat).</li>
                </ul>

                <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                    <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 6</h3>
                    <p>Integrasi SEO, PPC, dan Recommendation Engine memungkinkan bisnis menjangkau audiens yang tepat dengan pengalaman yang personal, meningkatkan penjualan dan loyalitas.</p>
                </div>
            ` 
            },
            // chapter 7
            { 
            title: "Social Networking & Metrics", 
            content: `
                <p>Era <b>Web 2.0</b> mengubah pengguna dari sekadar pembaca menjadi pencipta konten. Ini membuka peluang besar bagi bisnis untuk kolaborasi dan pemasaran.</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 7.1 Web 2.0: The Social Web</h2>
                <p>Generasi web yang menekankan pada interaktivitas, partisipasi, dan <i>User-Generated Content</i>.</p>
                
                <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                    <strong> Ciri Utama:</strong>
                    <ul style="margin-bottom:0;">
                        <li><b>Interaktif:</b> Komunikasi dua arah.</li>
                        <li><b>Platform Sosial:</b> Jejaring pertemanan.</li>
                        <li><b>Real-time:</b> Berbagi informasi instan.</li>
                        <li><b>Contoh:</b> YouTube, Wikipedia, Facebook.</li>
                    </ul>
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 7.2 Social Networking Services (SNS)</h2>
                <p>Platform seperti LinkedIn, Instagram, dan Facebook memungkinkan pembentukan relasi digital dan komunitas online.</p>
                
                <p><strong> Fungsi bagi Bisnis:</strong></p>
                <ul>
                    <li>Meningkatkan <b>Branding</b> perusahaan.</li>
                    <li>Komunikasi dua arah dengan konsumen.</li>
                    <li>Biaya pemasaran rendah, jangkauan luas.</li>
                </ul>

                <h2 style="color:#fa7a3e;"> 7.3 Blogs & Microblogs</h2>
                <p>Sarana engagement melalui konten berkualitas (Blog) atau update cepat (Microblog seperti X/Twitter).</p>
                <div style="background:#f5f5f5; padding:10px; border-radius:5px; text-align:center;">
                    <p style="margin:0;"> <b>Kunci Sukses:</b> Konsisten, Relevan, dan Komunikatif.</p>
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 7.4 Mashups, Metrics & Tools</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                    <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                        <h4 style="margin-top:0; color:#fa7a3e;"> Mashups</h4>
                        <p style="font-size:13px;">Menggabungkan data dari berbagai sumber jadi layanan baru.</p>
                        <p style="font-size:12px; color:#666;">Contoh: <b>Traveloka</b> (Data tiket + Hotel + Maps + Ulasan).</p>
                    </div>

                    <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                        <h4 style="margin-top:0; color:#fa7a3e;"> Social Metrics</h4>
                        <ul style="font-size:13px; padding-left:20px; margin-bottom:0;">
                            <li><b>Engagement Rate:</b> Tingkat interaksi.</li>
                            <li><b>Sentiment:</b> Opini positif/negatif.</li>
                            <li><b>Conversion:</b> Aksi nyata (beli).</li>
                        </ul>
                    </div>

                    <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                        <h4 style="margin-top:0; color:#fa7a3e;"> Tools</h4>
                        <p style="font-size:13px;">Alat pantau percakapan digital real-time.</p>
                        <p style="font-size:12px; color:#666;">Contoh: Starbucks memantau keluhan di Twitter.</p>
                    </div>
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 7.5 Enterprise 2.0 (Workplace)</h2>
                <p>Menggunakan alat sosial dalam perusahaan untuk kolaborasi (Knowledge Sharing).</p>
                <ul>
                    <li><b>Komunikasi:</b> Slack / Yammer.</li>
                    <li><b>Dokumentasi:</b> Google Drive / Confluence.</li>
                    <li><b>Panduan:</b> Wiki Internal.</li>
                </ul>

                <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                    <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 7</h3>
                    <p>Media sosial bukan sekadar alat komunikasi, tapi strategi bisnis modern. Organisasi yang sukses memanfaatkan alat ini untuk meningkatkan engagement, memperluas pasar, dan memperkuat kolaborasi internal.</p>
                </div>
            ` 
            },
            // chapter 8
            { 
                title: "Retail, E-Commerce & Mobile", 
                content: `
                    <p>Dunia retail berubah pesat. Toko fisik kini bersaing dengan e-commerce. Fenomena <b>Showrooming</b> (lihat di toko, beli online) menjadi tantangan besar.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 8.1 Retail Challenges & Omni-Channel</h2>
                    <p><b>Retail:</b> Penjualan barang eceran langsung ke konsumen akhir.</p>
                    
                    <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                        <strong> Tantangan Retail Modern:</strong>
                        <ul style="margin-bottom:0;">
                            <li><b>Empowered Price Sensitivity:</b> Konsumen mudah bandingkan harga via HP.</li>
                            <li><b>Channel Hopping:</b> Pindah-pindah dari toko ke online.</li>
                            <li><b>Need for Convenience:</b> Ingin serba cepat & praktis.</li>
                        </ul>
                    </div>

                    <p><strong> Solusi: Omni-Channel Retailing</strong></p>
                    <p>Mengintegrasikan semua saluran (Toko Fisik, Web, App, Sosmed) agar pengalaman belanja menyatu. Tujuannya agar pelanggan bisa pindah channel tanpa hambatan.</p>
                    
                    <p><b>Contoh Strategi:</b></p>
                    <ul>
                        <li><b>Mobile Display (QR Code):</b> Scan untuk info produk.</li>
                        <li><b>Mobile Payment (NFC):</b> Bayar tap di kasir (Google Wallet).</li>
                        <li><b>Augmented Reality (AR):</b> Pengalaman visual 3D.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 8.2 E-Commerce Models</h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;"> B2C (Business to Consumer)</h4>
                            <p style="font-size:13px;">Transaksi langsung bisnis ke konsumen individu.</p>
                            <ul style="font-size:12px; padding-left:20px;">
                                <li>Toko Online (Website Sendiri)</li>
                                <li>Marketplace (Shopee/Tokopedia)</li>
                                <li>Subscription (Berlangganan)</li>
                            </ul>
                        </div>

                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;"> B2B (Business to Business)</h4>
                            <p style="font-size:13px;">Transaksi antar perusahaan (Grosir/Supplier).</p>
                            <ul style="font-size:12px; padding-left:20px;">
                                <li><b>E-Procurement:</b> Pengadaan digital.</li>
                                <li><b>EDI:</b> Pertukaran dokumen otomatis.</li>
                                <li><b>SCM:</b> Manajemen rantai suplai.</li>
                            </ul>
                        </div>
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 8.3 Mobile Commerce (M-Commerce)</h2>
                    <p>Transaksi komersial via perangkat seluler (Smartphone/Tablet).</p>
                    
                    <p><strong> Mobile Payment Systems:</strong></p>
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>NFC (Near-Field Communication):</b> Tap to pay (Apple Pay).</li>
                        <li><b>QR Code:</b> Scan barcode (Starbucks App).</li>
                        <li><b>Micropayments:</b> Transaksi kecil cepat (Vending machine).</li>
                        <li><b>Mobile Banking:</b> Layanan bank via aplikasi.</li>
                    </ul>

                    <div style="background:#ffebee; padding:15px; border-left:4px solid #d32f2f; margin:15px 0;">
                        <strong> Risiko Keamanan Mobile Banking:</strong>
                        <ul style="margin-bottom:0;">
                            <li><b>Cloning:</b> Duplikasi nomor ponsel.</li>
                            <li><b>Phishing:</b> Website/Email palsu.</li>
                            <li><b>Smishing:</b> Penipuan via SMS.</li>
                            <li><b>Vishing:</b> Penipuan via Telepon suara.</li>
                        </ul>
                    </div>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 8</h3>
                        <p>Retail masa depan adalah yang adaptif & digital (Omni-channel). Mobile payment memberi efisiensi, namun keamanan tetap jadi prioritas utama.</p>
                    </div>
                ` 
            },
            // chapter 9
            { 
                title: "Effective Business Functions", 
                content: `
                    <p>Keberhasilan bisnis bergantung pada efisiensi fungsi internal (Manajer, Karyawan, Proses) dan dukungan teknologi. Sistem fungsional (Functional Systems) menyediakan data real-time untuk pengambilan keputusan di semua level manajemen.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 9.1 Solving Challenges at All Levels</h2>
                    <p>Tiga level manajemen dalam organisasi (Piramida):</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">1. Strategic Level</h4>
                            <p style="font-size:13px;"><b>Fokus:</b> Jangka panjang, Visi Misi.<br><b>Pertanyaan:</b> "What do we do?"</p>
                        </div>
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">2. Managerial Level</h4>
                            <p style="font-size:13px;"><b>Fokus:</b> Taktis, Kebijakan, Prosedur.<br><b>Pertanyaan:</b> "How do we do it?"</p>
                        </div>
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">3. Operational Level</h4>
                            <p style="font-size:13px;"><b>Fokus:</b> Harian, Detail, Real-time.<br><b>Pertanyaan:</b> "How well do we do it?"</p>
                        </div>
                    </div>

                    <p><strong> ACID Test (Data Integrity):</strong></p>
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Atomicity:</b> Transaksi harus tuntas semua atau batal semua.</li>
                        <li><b>Consistency:</b> Data harus valid sesuai aturan.</li>
                        <li><b>Isolation:</b> Transaksi tidak boleh saling ganggu.</li>
                        <li><b>Durability:</b> Data tidak boleh hilang meski sistem crash (Backup).</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 9.2 Manufacturing & Production (POM)</h2>
                    <p>Mengubah input (bahan, tenaga kerja) menjadi output (barang/jasa).</p>

                    <p><strong> Transportation Management Systems (TMS):</strong></p>
                    <p>Menangani perencanaan rute, pengiriman, dan logistik. Tren saat ini mendukung <i>Intermodal Transportation</i> (kombinasi kapal, truk, kereta) dan penggunaan Big Data.</p>

                    <p><strong> Inventory Control Systems:</strong></p>
                    <div style="border:1px solid #ddd; padding:15px; border-radius:8px; margin-bottom:15px;">
                        <h4 style="margin-top:0; color:#fa7a3e;">Metode Pengendalian Stok:</h4>
                        <ul style="margin-bottom:0;">
                            <li><b>JIT (Just-in-Time):</b> Barang tiba saat dibutuhkan (Minim gudang, tapi risiko stockout tinggi).</li>
                            <li><b>Lean Manufacturing:</b> Menghilangkan pemborosan (waste) yang tidak memberi nilai tambah.</li>
                            <li><b>EOQ (Economic Order Quantity):</b> Menghitung jumlah order optimal untuk meminimalkan biaya.</li>
                        </ul>
                    </div>

                    <p><b>CIM (Computer-Integrated Manufacturing):</b> Sistem otomatisasi pabrik terintegrasi dari desain hingga produksi.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 9.3 Sales and Marketing Systems</h2>
                    <p>Mendukung riset pasar, promosi, dan layanan pelanggan.</p>

                    <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                        <strong> Data-Driven Marketing:</strong>
                        <ul style="margin-bottom:0;">
                            <li><b>Push-through Ads:</b> Iklan muncul berdasarkan lokasi/profil user (Contextual).</li>
                            <li><b>Pull-through Ads:</b> Iklan muncul saat user mencari keyword tertentu.</li>
                        </ul>
                    </div>
                    <p><b>Contoh Teknologi:</b> Self-checkout kiosks, Sales Force Automation (Salesforce), dan Profitability Analysis.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 9.4 Accounting, Finance & Compliance</h2>
                    <p>Mengelola arus kas, aset, dan kepatuhan regulasi (GAAP/FASB).</p>

                    <p><strong> XBRL (eXtensible Business Reporting Language):</strong></p>
                    <p>Standar pelaporan data keuangan elektronik (tagging data) agar mudah dicari dan dianalisis oleh regulator (SEC) dan investor.</p>

                    <div style="background:#ffebee; padding:15px; border-left:4px solid #d32f2f; margin:15px 0;">
                        <strong> Fraud Prevention:</strong>
                        <p style="margin:0;">Faktor risiko fraud: Kepercayaan berlebih tanpa pengawasan, kontrol internal lemah, dan pemisahan tugas yang tidak jelas.</p>
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 9.5 Human Resource Systems (HRIS)</h2>
                    <p>Sistem untuk rekrutmen, pelatihan, evaluasi, dan kepatuhan hukum ketenagakerjaan.</p>

                    <p><strong>Fungsi Utama HRIS:</strong></p>
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Recruitment:</b> Mencari talenta (via LinkedIn/Headhunter).</li>
                        <li><b>Performance Evaluation:</b> Penilaian kinerja digital.</li>
                        <li><b>Training:</b> Pengembangan skill karyawan.</li>
                        <li><b>Benefits Admin:</b> Pengelolaan gaji, asuransi, dan cuti.</li>
                    </ul>

                    <p><b>Isu Etika:</b> Privasi data karyawan dan pengawasan penyalahgunaan zat (narkoba/alkohol) di tempat kerja.</p>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 9</h3>
                        <p>Sistem fungsional yang efektif (POM, Marketing, Finance, HR) adalah tulang punggung operasional perusahaan. Integrasi data antar departemen mencegah "Silo" dan meningkatkan akurasi keputusan strategis.</p>
                    </div>
                ` 
            },
            // chapter 10
            { 
                title: "Strategic Enterprise Systems", 
                content: `
                    <p>Sistem perusahaan (Enterprise Systems) adalah kunci untuk mengintegrasikan proses bisnis, mendukung keputusan strategis, dan meningkatkan kolaborasi.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 10.1 Enterprise Support Levels</h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">1. Strategic (Executive)</h4>
                            <p style="font-size:13px;">Dashboard untuk keputusan jangka panjang & KPI.</p>
                        </div>
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">2. Managerial (Middle)</h4>
                            <p style="font-size:13px;">MIS & DSS untuk pengendalian operasional & laporan.</p>
                        </div>
                        <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">3. Operational (Daily)</h4>
                            <p style="font-size:13px;">TPS untuk otomatisasi transaksi harian.</p>
                        </div>
                    </div>

                    <div style="background:#f9f9f9; padding:15px; border-radius:8px;">
                        <p><strong>✅ Faktor Sukses:</strong> Dukungan top management, pelatihan user, kualitas data.</p>
                        <p><strong>❌ Penyebab Gagal:</strong> Resistensi karyawan, data tidak akurat, biaya bengkak.</p>
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 10.2 Enterprise Social Platforms (ESP)</h2>
                    <p>Media sosial privat perusahaan untuk kolaborasi internal.</p>
                    
                    <p><strong>Platform Populer:</strong></p>
                    <ul style="background:#fff3e0; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Yammer:</b> Jejaring sosial internal mirip Facebook.</li>
                        <li><b>SharePoint:</b> Manajemen dokumen & intranet (Microsoft).</li>
                        <li><b>Jive:</b> Komunikasi tim & knowledge sharing.</li>
                        <li><b>Chatter:</b> Diskusi real-time terstruktur (Salesforce).</li>
                    </ul>
                    <p><b>Tujuan:</b> Mengurangi ketergantungan email, menyimpan <i>tacit knowledge</i>, dan mempercepat inovasi.</p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 10.3 Enterprise Resource Planning (ERP)</h2>
                    <p>Sistem terintegrasi yang mengelola seluruh proses bisnis inti.</p>

                    <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                        <tr style="background-color:#fa7a3e; color:white;">
                            <th style="padding:8px; text-align:left;">Komponen</th>
                            <th style="padding:8px; text-align:left;">Fungsi</th>
                        </tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Finance</b></td><td style="padding:8px;">Transaksi, Laporan, Anggaran.</td></tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>HR</b></td><td style="padding:8px;">Payroll, Rekrutmen, Data Karyawan.</td></tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>Manufaktur</b></td><td style="padding:8px;">Produksi, Stok, Kualitas.</td></tr>
                    </table>
                    
                    <div style="background:#ffebee; padding:10px; border-left:4px solid #d32f2f;">
                        <strong> Risiko ERP:</strong> Biaya tinggi, jadwal molor, data kotor dari sistem lama.
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 10.4 Supply Chain Management (SCM)</h2>
                    <p>Pengelolaan aliran barang dari pemasok ke pelanggan.</p>
                    <ul>
                        <li><b>Planning:</b> Prediksi permintaan & jadwal produksi.</li>
                        <li><b>Sourcing:</b> Pilih supplier & pembelian.</li>
                        <li><b>Distribution:</b> Logistik & pengiriman ke pelanggan.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 10.5 Customer Relationship Management (CRM)</h2>
                    <p>Sistem untuk mengelola hubungan dengan pelanggan (Leads ➔ Sales ➔ Service).</p>

                    <p><strong>3 Pilar & Jenis CRM:</strong></p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Operational:</b><br>Otomatisasi Sales & Marketing sehari-hari.
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Analytical:</b><br>Analisis data pola pembelian.
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Collaborative:</b><br>Berbagi info antar tim (Sales - Support).
                        </div>
                    </div>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 10</h3>
                        <p>Integrasi ERP, SCM, dan CRM menciptakan efisiensi total. Perusahaan dapat mengambil keputusan strategis berbasis data real-time, menekan biaya, dan meningkatkan kepuasan pelanggan.</p>
                    </div>
                ` 
            },
            // chapter 11
            { 
                title: "Data Visualization & GIS", 
                content: `
                    <h2 style="color:#fa7a3e;"> 11.1 Data Visualization & Learning</h2>
                    <p>Data visualization memanfaatkan cara kerja otak manusia memproses visual untuk memahami data kompleks (Big Data) secara instan. Manusia memproses gambar 60.000 kali lebih cepat daripada teks . Tujuannya adalah:</p>
                    <ul>
                        <li><b>Discovery:</b> Menemukan pola, tren, atau anomali yang tersembunyi dalam data mentah .</li>
                        <li><b>Learning:</b> Memahami hubungan antar variabel untuk pengambilan keputusan strategis. Melalui visualisasi interaktif, pengguna dapat "belajar" dari data dengan melakukan drill-down .</li>
                    </ul>
                    
                    <p><strong>Jenis Visualisasi Populer:</strong></p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom:15px;">
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Heat Maps:</b><br>Menggunakan warna (misal: hijau ke merah) untuk menunjukkan intensitas atau status kritis di area tertentu, memudahkan identifikasi masalah dengan cepat .
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b>Tag Clouds:</b><br>Menampilkan frekuensi kata/istilah dengan ukuran font yang berbeda; makin sering muncul, makin besar teksnya, berguna untuk analisis teks tidak terstruktur .
                        </div>
                    </div>

                    <div style="background:#e3f2fd; padding:15px; border-radius:8px; margin-bottom:20px;">
                        <h4 style="margin-top:0; color:#1565c0;"> Case Study: Safeway & PepsiCo (Deloitte HIVE)</h4>
                        <p style="font-size:13px;">
                            <b>Tantangan:</b> Safeway kesulitan mendeteksi tren "stock-out" (barang habis) hanya dengan spreadsheet Excel tradisional yang terbatas .<br>
                            <b>Solusi:</b> Menggunakan Data Visualization canggih di Deloitte HIVE (Highly Immersive Visual Environment) untuk menganalisis terabytes data POS (Point of Sales) .<br>
                            <b>Hasil:</b> 
                            <ul style="font-size:12px; padding-left:20px;">
                                <li>Akurasi prediksi permintaan naik 35% .</li>
                                <li>Mengurangi inventaris di gudang secara signifikan, menghemat biaya penyimpanan .</li>
                                <li>Menemukan masalah spesifik, misal stok habis di toko daerah wisata (Catalina Island) karena lonjakan turis yang tidak terdeteksi sebelumnya .</li>
                            </ul>
                        </p>
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 11.2 Enterprise Data Mashups</h2>
                    <p><b>Enterprise Mashups</b> adalah teknik menggabungkan data bisnis internal (misal: sales, inventory) dengan data eksternal (misal: cuaca, peta, berita) secara <i>real-time</i> tanpa perlu proses ETL (Extract, Transform, Load) yang berat ke Data Warehouse .</p>
                    
                    <p><strong>Keuntungan Bisnis:</strong></p>
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Self-Service BI:</b> Pengguna bisnis (non-IT) bisa membuat dashboard sendiri dengan metode <i>drag-and-drop</i>, mengurangi ketergantungan pada tim IT .</li>
                        <li><b>Agility:</b> Sumber data baru bisa ditambahkan dengan cepat tanpa menunggu departemen IT membangun infrastruktur baru, memungkinkan respons cepat terhadap perubahan pasar .</li>
                        <li><b>Contoh Logistics Mashup:</b> Menampilkan peta lokasi toko + data badai (berita cuaca) + status stok generator listrik untuk antisipasi bencana secara proaktif .</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 11.3 Digital Dashboards</h2>
                    <p>Dashboard adalah antarmuka visual yang menampilkan <b>KPI (Key Performance Indicators)</b> dan status operasional secara <i>real-time</i> agar manajer bisa mengambil tindakan korektif segera . Dashboard yang efektif harus intuitif dan interaktif.</p>
                    
                    <p><strong>Metrik Dashboard Berdasarkan Fungsi :</strong></p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom:10px;">
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b style="color:#fa7a3e;">Financial:</b><br>Net income, Cash flow, Profit (Actual vs Expected), Perubahan A/R dan A/P.
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b style="color:#fa7a3e;">Sales Team:</b><br>Jumlah Leads, Closing rate per sales person, Penjualan per wilayah, Analisis "Conversion Funnel".
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <b style="color:#fa7a3e;">Order Fulfillment:</b><br>Persentase pengiriman tepat waktu, Tingkat produk cacat (rework), Perubahan tingkat inventaris.
                        </div>
                    </div>
                    
                    <div style="background:#fff3e0; padding:10px; border-left:4px solid #fa7a3e;">
                        <strong> Prinsip Dashboard:</strong><br>
                        "If you can't measure it, you can't improve it." (Peter Drucker). Dashboard memberi visibilitas untuk peningkatan berkelanjutan (Continuous Improvement) dan akuntabilitas karyawan .
                    </div>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 11.4 Geospatial Data & GIS</h2>
                    <p><b>GIS (Geographic Information Systems)</b> menangkap, mengelola, dan menganalisis data berdasarkan lokasi spasial (Geospatial Data). Ini lebih dari sekadar peta datar; ini adalah analisis berlapis (layers) yang menghubungkan data "di mana" dengan "apa" .</p>
                    
                    <ul style="margin-bottom:15px;">
                        <li><b>Geocoding:</b> Proses mengubah alamat teks (misal: kode pos) menjadi titik koordinat (geospatial data) untuk dianalisis dalam peta .</li>
                        <li><b>Location-Awareness:</b> Memanfaatkan GPS, RFID, dan sinyal seluler untuk melacak pergerakan aset atau pelanggan secara real-time, memungkinkan strategi pemasaran berbasis lokasi .</li>
                    </ul>
                    
                    <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                        <h4 style="margin-top:0; color:#fa7a3e;"> Case Study: General Motors (GM)</h4>
                        <p style="font-size:13px;">
                            GM menggunakan GIS untuk memetakan demografi lokal, karakteristik lokasi, dan posisi dealer pesaing. Dengan analisis spasial ini, GM bisa menargetkan iklan secara spesifik ke area dengan potensi pembeli tertinggi, bukan menembak secara acak.<br>
                            <b>Hasil:</b> GM berhasil meningkatkan penjualan meskipun anggaran iklannya dipotong, karena iklannya lebih tepat sasaran dan efisien .
                        </p>
                    </div>
                ` 
            },
            // chapter 12
            { 
                title: "Chapter 12: IT Strategy & Balanced Scorecard", 
                content: `
                    <h2 style="color:#fa7a3e;"> 12.1 IT Strategy & Planning</h2>
                    <p><b>IT Strategy:</b> Bukan sekadar beli komputer, tapi rencana komprehensif (1-5 tahun) yang mengarahkan investasi teknologi agar selaras (Aligned) dengan tujuan bisnis dan meningkatkan nilai pemegang saham.</p>
                    
                    <div style="background:#e3f2fd; padding:15px; border-radius:8px; margin-bottom:15px;">
                        <h4 style="margin-top:0; color:#1565c0;"> Case Study: Intel's IT Strategic Planning</h4>
                        <p style="font-size:13px;">
                            Intel menggunakan pendekatan 6 langkah untuk menyelaraskan IT dengan bisnis:
                            <ol style="margin-bottom:0; padding-left:20px;">
                                <li><b>Enterprise Vision:</b> Memahami visi jangka panjang perusahaan.</li>
                                <li><b>Outlook:</b> Melihat tren teknologi & bisnis 2-5 tahun ke depan.</li>
                                <li><b>Gap Analysis:</b> Membandingkan kondisi saat ini vs masa depan.</li>
                                <li><b>Strategic Focus:</b> Menentukan prioritas & budget tahunan.</li>
                                <li><b>Governance:</b> Pengambilan keputusan supplier/sourcing.</li>
                                <li><b>Measurement:</b> Evaluasi bulanan menggunakan <i>Balanced Scorecard</i>.</li>
                            </ol>
                        </p>
                    </div>

                    <p><strong>3 Tipe Business Value Drivers:</strong></p>
                    <ul style="background:#f5f5f5; padding:15px 15px 15px 30px; border-radius:8px;">
                        <li><b>Operational (Short-term):</b> Faktor efisiensi harian. Contoh: Mengurangi biaya bahan baku, meningkatkan volume penjualan.</li>
                        <li><b>Financial (Medium-term):</b> Faktor keuangan. Contoh: Mengurangi biaya modal (cost of capital), manajemen hutang.</li>
                        <li><b>Sustainability (Long-term):</b> Faktor kelangsungan hidup. Contoh: Kepatuhan regulasi (hukum), reputasi brand, inovasi.</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 12.2 IT-Business Alignment</h2>
                    <p>Masalah utama perusahaan adalah "Disconnect" antara CIO (Chief Information Officer) dan C-Level lainnya. IT harus bergeser dari sekadar "penyedia layanan" menjadi "mitra strategis".</p>
                    <p><i>*Survey PwC menunjukkan perusahaan dengan kolaborasi IT-Bisnis yang kuat 4x lebih mungkin menjadi top performer.</i></p>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 12.3 Balanced Scorecard (BSC)</h2>
                    <p>Metode manajemen strategis yang "menyeimbangkan" indikator finansial (masa lalu) dengan indikator operasional (masa depan).</p>

                    <table style="width:100%; border-collapse: collapse; margin:15px 0; font-size:14px;">
                        <tr style="background-color:#fa7a3e; color:white;">
                            <th style="padding:8px; text-align:left;">Perspektif</th>
                            <th style="padding:8px; text-align:left;">Fokus & Pertanyaan</th>
                        </tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>1. Financial</b></td><td style="padding:8px;"><i>"To succeed financially, how should we appear to our shareholders?"</i> (Revenue, Profit, ROI).</td></tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>2. Customer</b></td><td style="padding:8px;"><i>"To achieve our vision, how should we appear to our customers?"</i> (Market share, Satisfaction, Loyalty).</td></tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>3. Internal Process</b></td><td style="padding:8px;"><i>"To satisfy shareholders and customers, what business processes must we excel at?"</i> (Cycle time, Quality, Productivity).</td></tr>
                        <tr style="border-bottom:1px solid #ddd;"><td style="padding:8px;"><b>4. Innovation & Growth</b></td><td style="padding:8px;"><i>"To achieve our vision, how will we sustain our ability to change and improve?"</i> (Employee skills, IT capabilities).</td></tr>
                    </table>
                    
                    <p><strong>Lagging vs Leading Indicators:</strong></p>
                    <ul>
                        <li><b>Lagging:</b> Konfirmasi hasil masa lalu (Contoh: Laporan Keuangan).</li>
                        <li><b>Leading:</b> Prediksi masa depan (Contoh: Kepuasan pelanggan hari ini memprediksi revenue bulan depan).</li>
                    </ul>
                    <hr style="margin:20px 0; opacity:0.3;">

                    <h2 style="color:#fa7a3e;"> 12.4 IT Sourcing & Cloud Strategy</h2>
                    <p>Keputusan strategis apakah akan mengembangkan sistem secara internal (<b>In-house</b>) atau menyerahkan ke pihak ketiga (<b>Sourcing</b>).</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">Onshore Sourcing</h4>
                            <p style="font-size:13px;">Vendor berada di negara yang sama. Lebih mudah komunikasi, tapi biaya mungkin lebih tinggi.</p>
                        </div>
                        <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                            <h4 style="margin-top:0; color:#fa7a3e;">Offshoring</h4>
                            <p style="font-size:13px;">Vendor di negara lain (misal: India, China). Biaya tenaga kerja murah, tapi risiko budaya dan kontrol tinggi.</p>
                        </div>
                    </div>

                    <p><strong> Risiko Outsourcing (Hidden Costs):</strong></p>
                    <ul style="background:#ffebee; padding:15px 15px 15px 30px; border-radius:8px; border-left: 4px solid #d32f2f;">
                        <li><b>Shirking:</b> Vendor sengaja bekerja di bawah standar namun menagih biaya penuh.</li>
                        <li><b>Poaching:</b> Vendor mencuri ide/strategi klien untuk dijual ke kompetitor lain.</li>
                        <li><b>Opportunistic Repricing:</b> Vendor menaikkan harga di tengah kontrak jangka panjang ketika klien sudah bergantung padanya (Vendor Lock-in).</li>
                    </ul>

                    <p><b>Cloud Strategy:</b> Hindari <i>Tactical Adoption</i> (asal pakai cloud tanpa rencana). Gunakan <i>Coordinated Strategy</i> untuk integrasi data yang aman antara sistem Cloud dan On-Premise.</p>

                    <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                        <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 12</h3>
                        <p>IT Strategy bukan dokumen statis, melainkan proses dinamis yang harus diukur menggunakan Balanced Scorecard. Keputusan Sourcing (Outsourcing/Cloud) harus didasarkan pada nilai strategis, bukan hanya penghematan biaya sesaat.</p>
                    </div>
                ` 
            },
            // chapter 13
           { 
            title: "Project Management & SDLC", 
            content: `
                <h2 style="color:#fa7a3e;"> 13.1 Project Management Concepts</h2>
                <p><b>Proyek</b> adalah usaha sementara (memiliki awal dan akhir yang jelas) untuk menciptakan produk, layanan, atau hasil yang unik. Ini berbeda dengan <b>Operasional (Business as Usual)</b> yang bersifat repetitif dan berkelanjutan.</p>
                
                <div style="background:#f9f9f9; padding:10px; border-radius:5px; margin-bottom:15px;">
                    <strong> Project Portfolio Management (PPM):</strong><br>
                    Pendekatan strategis untuk memilih dan mengelola sekumpulan proyek. Tujuannya bukan hanya "melakukan proyek dengan benar" (Project Management), tapi "melakukan proyek yang benar" (Strategic Alignment).
                </div>

                <div style="text-align:center; margin:20px 0;">
                    <p style="font-weight:bold; color:#fa7a3e;">THE TRIPLE CONSTRAINT (Segitiga PM)</p>
                    <div style="display:inline-block; border:2px solid #fa7a3e; padding:15px; border-radius:8px; background:white;">
                        <strong>TIME</strong> (Waktu) ↔ <strong>COST</strong> (Biaya) ↔ <strong>SCOPE</strong> (Ruang Lingkup)
                    </div>
                    <p style="font-size:12px; margin-top:5px;">Kualitas (Quality) berada di tengah. Jika Anda mengubah satu sisi (misal: mempercepat Waktu), sisi lain pasti terpengaruh (Biaya naik atau Scope dikurangi).</p>
                </div>
                
                <div style="background:#ffebee; padding:10px; border-left:4px solid #d32f2f;">
                    <b> Scope Creep:</b> Fenomena penambahan fitur/permintaan kecil secara terus-menerus tanpa penyesuaian anggaran atau jadwal. Ini adalah penyebab utama kegagalan proyek (Runaway Projects).
                </div>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 13.2 Planning, Execution & Monitoring</h2>
                <p>Dokumen dan alat vital dalam perencanaan proyek:</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; margin-bottom:15px;">
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>1. Business Case & SOW:</b><br>Dokumen justifikasi investasi (Why we do this?) dan <i>Statement of Work</i> (SOW) yang berfungsi sebagai kontrak legal tentang apa yang akan dikerjakan.
                    </div>
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>2. WBS (Work Breakdown Structure):</b><br>Hierarki dekomposisi proyek menjadi paket kerja yang lebih kecil. WBS adalah fondasi untuk estimasi biaya dan jadwal.
                    </div>
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>3. Milestones & Gantt Chart:</b><br>Titik pencapaian penting (Milestones) dan grafik batang horizontal (Gantt) untuk memvisualisasikan jadwal dan durasi tugas.
                    </div>
                    <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                        <b>4. Project Baseline:</b><br>Rencana final yang disetujui (Master Plan). Setiap perubahan setelah ini harus melalui proses <i>Change Control</i> formal, bukan asal ubah.
                    </div>
                </div>

                <p><b>Critical Path (Jalur Kritis):</b> Rangkaian tugas terpanjang dalam proyek. Jika satu tugas di jalur ini tertunda, maka tanggal selesai proyek <b>pasti</b> tertunda. Manajer proyek harus memantau jalur ini dengan ketat.</p>
                <hr style="margin:20px 0; opacity:0.3;">

                <h2 style="color:#fa7a3e;"> 13.4 System Development Life Cycle (SDLC)</h2>
                <p>Kerangka kerja terstruktur untuk pengembangan sistem informasi:</p>
                <ul style="padding-left:20px;">
                    <li style="margin-bottom:10px;">
                        <b>1. Requirements Analysis:</b> Mengidentifikasi "Defisiensi" sistem lama dan kebutuhan pengguna. Tahap paling krusial untuk menghindari kegagalan.
                    </li>
                    <li style="margin-bottom:10px;">
                        <b>2. System Analysis (Feasibility Study):</b> Uji kelayakan sebelum lanjut.
                        <ul style="font-size:13px; background:#f0f0f0; padding:8px; border-radius:4px;">
                            <li><i>Technical:</i> Apakah teknologinya tersedia?</li>
                            <li><i>Economic:</i> Cost-Benefit Analysis, ROI, NPV (Apakah menguntungkan?).</li>
                            <li><i>Legal:</i> Apakah melanggar hukum/regulasi?</li>
                            <li><i>Behavioral:</i> Apakah user mau menggunakannya? (Human Factor).</li>
                        </ul>
                    </li>
                    <li style="margin-bottom:10px;">
                        <b>3. Development & Testing:</b> Coding dan pengujian.
                        <br><i>Unit Testing</i> (per modul) vs <i>Integrated Testing</i> (keseluruhan sistem).
                    </li>
                    <li style="margin-bottom:10px;">
                        <b>4. Implementation (Deployment Strategies):</b>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size:13px; margin-top:5px;">
                            <div style="border:1px solid #ccc; padding:5px;"><b>Parallel:</b> Sistem lama & baru jalan bareng. (Aman, Mahal).</div>
                            <div style="border:1px solid #ccc; padding:5px;"><b>Direct:</b> Langsung ganti total. (Murah, Berisiko Tinggi).</div>
                            <div style="border:1px solid #ccc; padding:5px;"><b>Pilot:</b> Uji di satu area/cabang dulu.</div>
                            <div style="border:1px solid #ccc; padding:5px;"><b>Phased:</b> Bertahap per modul/fungsi.</div>
                        </div>
                    </li>
                    <li>
                        <b>5. Maintenance:</b> Pemeliharaan, audit pasca-implementasi, dan update rutin.
                    </li>
                </ul>
                
                <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin-top:20px;">
                    <h4 style="margin-top:0; color:#d32f2f;"> Case Study: Denver Int'l Airport (DIA) Disaster</h4>
                    <p style="font-size:13px; text-align:justify;">
                        Proyek sistem bagasi otomatis DIA adalah contoh klasik kegagalan manajemen proyek.
                        <br><b>Penyebab Kegagalan:</b>
                        <br>1. <b>Optimisme Berlebih:</b> Mengabaikan saran ahli yang mengatakan jadwal tidak realistis.
                        <br>2. <b>Scope Creep:</b> Terus menerima perubahan desain dari maskapai tanpa penyesuaian waktu.
                        <br>3. <b>Ignored Interface:</b> Desain bangunan fisik tidak memperhitungkan jalur bagasi (sudut terlalu tajam).
                        <br><b>Dampak:</b> Bandara telat buka 16 bulan, kerugian $560 Juta, dan sistem otomatis akhirnya dibuang kembali ke manual.
                    </p>
                </div>
            ` 
           },
            // chapter 14
            { 
                    title: "Ethical Risks & Responsibilities", 
                    content: `
                        <h2 style="color:#fa7a3e;"> 14.1 Privacy & Civil Rights</h2>
                        <p>Di era Big Data, privasi telah bergeser dari "hak untuk dibiarkan sendiri" menjadi "hak untuk mengontrol informasi pribadi". Fenomena <b>Privacy Paradox</b> menunjukkan kontradiksi psikologis: 50% pengguna internet mengaku sangat khawatir tentang penyalahgunaan data, namun perilaku mereka justru sukarela menukar data pribadi demi kenyamanan aplikasi gratis.</p>
                        
                        <div style="background:#fff3e0; padding:15px; border-left:4px solid #fa7a3e; margin:15px 0;">
                            <strong> Risiko Diskriminasi Digital (Civil Rights):</strong><br>
                            Sistem AI dan algoritma seringkali mewarisi bias manusia. Contohnya, algoritma perbankan yang secara tidak adil menolak pinjaman untuk kelompok minoritas tertentu, atau algoritma rekrutmen yang memfilter CV berdasarkan gender. Ini melanggar hak sipil dan prinsip kesetaraan.
                        </div>

                        <p><strong>Social Media Recruitment: Pisau Bermata Dua</strong></p>
                        <p>77% perusahaan menggunakan media sosial untuk menyaring kandidat. Meskipun efektif untuk melihat "culture fit", praktik ini berisiko tinggi melanggar hukum jika manajer perekrutan melihat informasi <i>Protected Classes</i> (Ras, Agama, Orientasi Seksual, Disabilitas) dan secara tidak sadar menggunakannya sebagai dasar penolakan (Bias Implisit).</p>
                        
                        <div style="background:#f9f9f9; padding:15px; border-radius:5px;">
                            <b>Solusi & Best Practice:</b>
                            <ul style="margin:5px 0 0 20px; font-size:13px;">
                                <li>Gunakan jasa pihak ketiga untuk melakukan <i>background check</i> agar informasi sensitif tersaring sebelum sampai ke pengambil keputusan.</li>
                                <li>Jangan pernah meminta password akun media sosial pelamar (Ilegal di banyak negara bagian AS dan melanggar etika privasi global).</li>
                                <li>Tetapkan rubrik penilaian objektif sebelum melihat profil kandidat.</li>
                            </ul>
                        </div>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 14.2 Responsible Conduct & Innovation</h2>
                        <p>Tanggung jawab profesional IT tertuang dalam prinsip: <i>"Just because you CAN do something, doesn't mean you SHOULD."</i> Inovasi seringkali bergerak lebih cepat daripada regulasi hukum, menciptakan area abu-abu etika.</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom:20px;">
                            <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                                <strong style="color:#fa7a3e;">Kasus Prediksi Kehamilan Target:</strong><br>
                                <p style="font-size:13px; text-align:justify;">
                                    Data analyst Target mengembangkan algoritma yang melacak pembelian 25 produk (seperti losion tanpa pewangi & suplemen seng). Mereka berhasil memprediksi skor kehamilan pelanggan remaja dan mengirimkan kupon perlengkapan bayi ke rumahnya. Ayahnya marah dan menuntut toko, namun ternyata prediksi algoritma benar. Ini memicu debat global tentang batas antara "Pemasaran Efektif" dan "Invasi Privasi".
                                </p>
                            </div>
                            <div style="border:1px solid #ddd; padding:15px; border-radius:8px;">
                                <strong style="color:#fa7a3e;">Dilema Etika 3D Printing:</strong><br>
                                <p style="font-size:13px; text-align:justify;">
                                    Teknologi ini mendemokratisasi manufaktur, namun membawa risiko besar:
                                    <br>1. <b>Pelanggaran IP:</b> Barang bermerek bisa dicetak bajakan di rumah.
                                    <br>2. <b>Keamanan Publik:</b> Cetak biru senjata api (Ghost Guns) yang bisa lolos detektor logam tersebar di internet.
                                    <br>3. <b>Bio-ethics:</b> Pencetakan organ tubuh manusia (Bioprinting) tanpa regulasi medis.
                                </p>
                            </div>
                        </div>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 14.3 Technology Addiction & Productivity</h2>
                        <p>Tempat kerja modern menghadapi epidemi <b>Cognitive Overload</b>. Banjir notifikasi email, pesan instan, dan media sosial menciptakan gangguan konstan yang menurunkan IQ fungsional karyawan hingga 10 poin (setara dengan begadang semalaman).</p>
                        
                        <div style="background:#ffebee; padding:15px; border-radius:8px; margin-bottom:15px;">
                            <h4 style="margin-top:0; color:#d32f2f;"> Mitos Multitasking</h4>
                            <p style="font-size:13px; margin-bottom:0;">
                                Secara neurologis, otak manusia tidak bisa melakukan dua tugas kognitif kompleks sekaligus. Yang terjadi adalah <b>Rapid Task Switching</b> yang memakan energi glukosa otak. Dampaknya:
                                <ul style="margin-top:5px;">
                                    <li>Waktu penyelesaian tugas 50% lebih lama.</li>
                                    <li>Tingkat kesalahan naik hingga 50%.</li>
                                    <li>Penurunan kemampuan memori jangka pendek.</li>
                                </ul>
                            </p>
                        </div>
                        <hr style="margin:20px 0; opacity:0.3;">

                        <h2 style="color:#fa7a3e;"> 14.4 Transformative Tech Trends</h2>
                        <p>Empat tren teknologi yang membentuk masa depan bisnis namun membawa tantangan etis baru:</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom:20px;">
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <b style="color:#fa7a3e;">1. Digital-Physical Blur:</b><br>
                                IoT dan Wearables membuat benda mati menjadi "pintar". Risiko: Peretasan alat medis (pacemaker) atau mobil otonom.
                            </div>
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <b style="color:#fa7a3e;">2. Crowdsourcing:</b><br>
                                <i>Borderless Enterprise</i> menggunakan tenaga kerja global (Cloud Labor). Isu etis: Upah rendah dan eksploitasi pekerja lepas tanpa tunjangan.
                            </div>
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <b style="color:#fa7a3e;">3. Data Supply Chain:</b><br>
                                Aliran data yang lancar antar departemen. Tantangan: Menjaga keamanan data saat diakses oleh ribuan karyawan (Insider Threat).
                            </div>
                            <div style="border:1px solid #ddd; padding:10px; border-radius:5px;">
                                <b style="color:#fa7a3e;">4. Hyperscale Computing:</b><br>
                                Data center raksasa untuk AI. Isu: Konsumsi energi masif yang berdampak pada jejak karbon (Green IT menjadi imperatif).
                            </div>
                        </div>

                        <div style="background:#333; color:white; padding:20px; border-radius:10px; margin-top:30px; border:2px solid #fa7a3e;">
                            <h3 style="color:#fa7a3e; margin-top:0;"> Kesimpulan Chapter 14</h3>
                            <p>Manajer TI masa depan tidak hanya dituntut memiliki kompetensi teknis, tetapi juga <b>Kompas Moral</b> yang kuat. Keseimbangan harus ditemukan antara mengejar profitabilitas bisnis, menghormati privasi individu, dan meminimalkan dampak sosial negatif dari teknologi yang diterapkan.</p>
                        </div>
                    ` 
            }
        ];