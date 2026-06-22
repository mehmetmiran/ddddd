admin-style.css
Aciklama: Admin Stilleri - Sidebar, tablolar, modal, grafik container
Boyut: 17499 karakter | Satir: 993
/* Admin Panel Styles */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background: #f0f2f5;
 color: #333;
}
/* Login Screen */
.login-screen {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 9999;
}
.login-box {
 background: white;
 border-radius: 20px;
 padding: 50px;
 width: 100%;
 max-width: 420px;
 box-shadow: 0 25px 50px rgba(0,0,0,0.3);
 animation: slideUp 0.5s ease;
}
@keyframes slideUp {
 from { opacity: 0; transform: translateY(30px); }
 to { opacity: 1; transform: translateY(0); }
}
.login-logo {
 text-align: center;
 margin-bottom: 35px;
}
.login-logo .logo-icon {
 width: 70px;
 height: 70px;
 background: linear-gradient(135deg, #2c5282 0%, #1e3a5f 100%);
 border-radius: 16px;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 auto 15px;
 color: white;
 font-size: 32px;
}
.login-logo h1 {
 color: #1e3a5f;
 font-size: 28px;
 letter-spacing: 2px;
}
.login-logo p {
 color: #718096;
 font-size: 16px;
 margin-top: 5px;
}
.login-box .form-group {
 margin-bottom: 20px;
}
.login-box label {
 display: block;
 margin-bottom: 8px;
 font-weight: 600;
 color: #4a5568;
 font-size: 14px;
}
.login-box label i {
 margin-right: 8px;
 color: #2c5282;
}
.login-box input {
 width: 100%;
 padding: 14px 16px;
 border: 2px solid #e2e8f0;
 border-radius: 10px;
 font-size: 15px;
 transition: all 0.3s;
 background: #fafbfc;
}
.login-box input:focus {
 outline: none;
 border-color: #2c5282;
 background: white;
 box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.1);
}
.btn-login {
 width: 100%;
 padding: 14px;
 background: linear-gradient(135deg, #2c5282 0%, #1e3a5f 100%);
 color: white;
 border: none;
 border-radius: 10px;
 font-size: 16px;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.3s;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
}
.btn-login:hover {
 transform: translateY(-2px);
 box-shadow: 0 6px 20px rgba(44, 82, 130, 0.4);
}
.login-hint {
 text-align: center;
 margin-top: 20px;
 color: #a0aec0;
 font-size: 13px;
}
/* Admin Wrapper */
.admin-wrapper {
 display: flex;
 min-height: 100vh;
}
.admin-wrapper.hidden {
 display: none;
}
/* Sidebar */
.sidebar {
 width: 260px;
 background: #1e3a5f;
 color: white;
 display: flex;
 flex-direction: column;
 position: fixed;
 height: 100vh;
 z-index: 100;
 transition: transform 0.3s;
}
.sidebar-header {
 padding: 25px 20px;
 display: flex;
 align-items: center;
 gap: 12px;
 border-bottom: 1px solid rgba(255,255,255,0.1);
}
.sidebar-header .logo-icon {
 width: 40px;
 height: 40px;
 background: white;
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #1e3a5f;
 font-size: 18px;
}
.sidebar-header h2 {
 font-size: 20px;
 letter-spacing: 1px;
}
.sidebar-nav {
 flex: 1;
 padding: 20px 0;
 overflow-y: auto;
}
.sidebar-nav .nav-item {
 display: flex;
 align-items: center;
 padding: 14px 25px;
 color: #a0aec0;
 text-decoration: none;
 font-size: 14px;
 font-weight: 600;
 transition: all 0.3s;
 position: relative;
}
.sidebar-nav .nav-item i {
 width: 24px;
 margin-right: 12px;
 font-size: 16px;
}
.sidebar-nav .nav-item:hover {
 color: white;
 background: rgba(255,255,255,0.05);
}
.sidebar-nav .nav-item.active {
 color: white;
 background: rgba(255,255,255,0.1);
 border-left: 3px solid #ffd700;
}
.badge {
 margin-left: auto;
 background: #e53e3e;
 color: white;
 font-size: 11px;
 padding: 2px 8px;
 border-radius: 10px;
 font-weight: bold;
}
.sidebar-footer {
 padding: 15px 0;
 border-top: 1px solid rgba(255,255,255,0.1);
}
/* Main Content */
.main-content {
 flex: 1;
 margin-left: 260px;
 min-height: 100vh;
}
/* Top Bar */
.top-bar {
 background: white;
 padding: 15px 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 box-shadow: 0 2px 10px rgba(0,0,0,0.05);
 position: sticky;
 top: 0;
 z-index: 50;
}
.menu-toggle {
 background: none;
 border: none;
 font-size: 20px;
 color: #4a5568;
 cursor: pointer;
 padding: 8px;
 border-radius: 8px;
 transition: all 0.2s;
}
.menu-toggle:hover {
 background: #f0f2f5;
}
.top-bar-right {
 display: flex;
 align-items: center;
 gap: 20px;
}
.search-box {
 position: relative;
}
.search-box i {
 position: absolute;
 left: 14px;
 top: 50%;
 transform: translateY(-50%);
 color: #a0aec0;
}
.search-box input {
 padding: 10px 14px 10px 40px;
 border: 2px solid #e2e8f0;
 border-radius: 10px;
 width: 250px;
 font-size: 14px;
 transition: all 0.3s;
}
.search-box input:focus {
 outline: none;
 border-color: #2c5282;
}
.notifications {
 position: relative;
 cursor: pointer;
 font-size: 20px;
 color: #4a5568;
 padding: 8px;
}
.notif-badge {
 position: absolute;
 top: 2px;
 right: 2px;
 width: 18px;
 height: 18px;
 background: #e53e3e;
 color: white;
 border-radius: 50%;
 font-size: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-weight: bold;
}
.user-menu {
 display: flex;
 align-items: center;
 gap: 10px;
 cursor: pointer;
 padding: 6px 12px;
 border-radius: 10px;
 transition: all 0.2s;
}
.user-menu:hover {
 background: #f0f2f5;
}
.user-menu img {
 width: 36px;
 height: 36px;
 border-radius: 50%;
}
.user-menu span {
 font-weight: 600;
 font-size: 14px;
 color: #2d3748;
}
/* Pages */
.page {
 display: none;
 padding: 30px;
 animation: fadeIn 0.3s ease;
}
.page.active {
 display: block;
}
@keyframes fadeIn {
 from { opacity: 0; }
 to { opacity: 1; }
}
.page-header {
 margin-bottom: 30px;
}
.page-header h1 {
 color: #1e3a5f;
 font-size: 26px;
 display: flex;
 align-items: center;
 gap: 12px;
}
.page-header h1 i {
 color: #2c5282;
}
.page-header p {
 color: #718096;
 margin-top: 5px;
 font-size: 15px;
}
/* Stats Grid */
.stats-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
 gap: 20px;
 margin-bottom: 30px;
}
.stat-card {
 background: white;
 border-radius: 16px;
 padding: 25px;
 display: flex;
 align-items: center;
 gap: 18px;
 box-shadow: 0 4px 15px rgba(0,0,0,0.05);
 transition: transform 0.3s;
}
.stat-card:hover {
 transform: translateY(-3px);
}
.stat-icon {
 width: 60px;
 height: 60px;
 border-radius: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 24px;
 color: white;
}
.stat-card.blue .stat-icon { background: linear-gradient(135deg, #4299e1, #3182ce); }
.stat-card.green .stat-icon { background: linear-gradient(135deg, #48bb78, #38a169); }
.stat-card.orange .stat-icon { background: linear-gradient(135deg, #ed8936, #dd6b20); }
.stat-card.purple .stat-icon { background: linear-gradient(135deg, #9f7aea, #805ad5); }
.stat-info h3 {
 font-size: 28px;
 color: #1e3a5f;
 margin-bottom: 4px;
}
.stat-info p {
 color: #718096;
 font-size: 14px;
}
/* Dashboard Grid */
.dashboard-grid {
 display: grid;
 grid-template-columns: 2fr 1fr;
 gap: 20px;
 margin-bottom: 20px;
}
.dashboard-card {
 background: white;
 border-radius: 16px;
 padding: 25px;
 box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.dashboard-card.full-width {
 grid-column: 1 / -1;
}
.card-header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
}
.card-header h3 {
 color: #1e3a5f;
 font-size: 18px;
 display: flex;
 align-items: center;
 gap: 10px;
}
.card-header h3 i {
 color: #2c5282;
}
.btn-small {
 padding: 8px 16px;
 background: #edf2f7;
 color: #4a5568;
 border: none;
 border-radius: 8px;
 font-size: 13px;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.2s;
 text-decoration: none;
 display: inline-flex;
 align-items: center;
 gap: 6px;
}
.btn-small:hover {
 background: #e2e8f0;
}
.chart-container {
 height: 280px;
 position: relative;
}
/* Data Table */
.table-responsive {
 overflow-x: auto;
}
.data-table {
 width: 100%;
 border-collapse: collapse;
}
.data-table thead {
 background: #f7fafc;
}
.data-table th {
 padding: 14px 16px;
 text-align: left;
 font-size: 13px;
 font-weight: 700;
 color: #4a5568;
 text-transform: uppercase;
 letter-spacing: 0.5px;
 border-bottom: 2px solid #e2e8f0;
}
.data-table td {
 padding: 14px 16px;
 font-size: 14px;
 color: #2d3748;
 border-bottom: 1px solid #edf2f7;
}
.data-table tbody tr:hover {
 background: #f7fafc;
}
.status-badge {
 padding: 4px 12px;
 border-radius: 20px;
 font-size: 12px;
 font-weight: 600;
}
.status-active { background: #c6f6d5; color: #22543d; }
.status-completed { background: #bee3f8; color: #2a4365; }
.status-cancelled { background: #fed7d7; color: #742a2a; }
.action-btns {
 display: flex;
 gap: 8px;
}
.action-btn {
 width: 32px;
 height: 32px;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 13px;
 transition: all 0.2s;
}
.action-btn.edit { background: #ebf8ff; color: #2c5282; }
.action-btn.delete { background: #fed7d7; color: #c53030; }
.action-btn.view { background: #f0fff4; color: #38a169; }
.action-btn:hover {
 transform: scale(1.1);
}
/* Filter Bar */
.filter-bar {
 display: flex;
 gap: 15px;
 margin-bottom: 25px;
 flex-wrap: wrap;
 align-items: center;
}
.filter-group {
 position: relative;
}
.filter-group input,
.filter-group select {
 padding: 10px 14px;
 border: 2px solid #e2e8f0;
 border-radius: 10px;
 font-size: 14px;
 background: white;
 min-width: 200px;
}
.filter-group input:focus,
.filter-group select:focus {
 outline: none;
 border-color: #2c5282;
}
.filter-group i {
 position: absolute;
 right: 12px;
 top: 50%;
 transform: translateY(-50%);
 color: #a0aec0;
}
.btn-primary {
 padding: 10px 20px;
 background: linear-gradient(135deg, #2c5282 0%, #1e3a5f 100%);
 color: white;
 border: none;
 border-radius: 10px;
 font-size: 14px;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.3s;
 display: inline-flex;
 align-items: center;
 gap: 8px;
}
.btn-primary:hover {
 transform: translateY(-2px);
 box-shadow: 0 4px 12px rgba(44, 82, 130, 0.3);
}
.btn-success {
 padding: 10px 20px;
 background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
 color: white;
 border: none;
 border-radius: 10px;
 font-size: 14px;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.3s;
 display: inline-flex;
 align-items: center;
 gap: 8px;
}
.btn-success:hover {
 transform: translateY(-2px);
 box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
}
.btn-secondary {
 padding: 10px 20px;
 background: #edf2f7;
 color: #4a5568;
 border: none;
 border-radius: 10px;
 font-size: 14px;
 font-weight: 600;
 cursor: pointer;
 transition: all 0.3s;
}
.btn-secondary:hover {
 background: #e2e8f0;
}
/* Pagination */
.pagination {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 15px;
 margin-top: 25px;
}
.pagination button {
 width: 40px;
 height: 40px;
 border: 2px solid #e2e8f0;
 background: white;
 border-radius: 10px;
 cursor: pointer;
 color: #4a5568;
 transition: all 0.2s;
}
.pagination button:hover {
 border-color: #2c5282;
 color: #2c5282;
}
/* Action Bar */
.action-bar {
 margin-bottom: 25px;
}
/* Stations Grid */
.stations-grid {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
 gap: 20px;
}
.station-card-admin {
 background: white;
 border-radius: 16px;
 padding: 25px;
 box-shadow: 0 4px 15px rgba(0,0,0,0.05);
 transition: all 0.3s;
 border: 2px solid transparent;
}
.station-card-admin:hover {
 border-color: #2c5282;
 transform: translateY(-3px);
}
.station-card-header {
 display: flex;
 align-items: center;
 gap: 15px;
 margin-bottom: 20px;
}
.station-card-icon {
 width: 50px;
 height: 50px;
 background: linear-gradient(135deg, #2c5282, #1e3a5f);
 border-radius: 12px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: white;
 font-size: 20px;
}
.station-card-title h4 {
 color: #1e3a5f;
 font-size: 18px;
}
.station-card-title p {
 color: #718096;
 font-size: 13px;
 margin-top: 2px;
}
.station-card-details {
 margin-bottom: 20px;
}
.station-card-details p {
 display: flex;
 align-items: center;
 gap: 10px;
 padding: 8px 0;
 color: #4a5568;
 font-size: 14px;
 border-bottom: 1px solid #f0f4f8;
}
.station-card-details p i {
 color: #2c5282;
 width: 20px;
}
.station-card-actions {
 display: flex;
 gap: 10px;
}
/* Report Cards */
.report-cards {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
 gap: 20px;
 margin-bottom: 30px;
}
.report-card {
 background: white;
 border-radius: 16px;
 padding: 30px;
 text-align: center;
 cursor: pointer;
 transition: all 0.3s;
 box-shadow: 0 4px 15px rgba(0,0,0,0.05);
 border: 2px solid transparent;
}
.report-card:hover {
 border-color: #2c5282;
 transform: translateY(-5px);
 box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
.report-card i {
 font-size: 40px;
 color: #2c5282;
 margin-bottom: 15px;
}
.report-card h3 {
 color: #1e3a5f;
 font-size: 18px;
 margin-bottom: 8px;
}
.report-card p {
 color: #718096;
 font-size: 14px;
}
/* Settings */
.settings-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
 gap: 20px;
}
.settings-card {
 background: white;
 border-radius: 16px;
 padding: 30px;
 box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.settings-card h3 {
 color: #1e3a5f;
 font-size: 18px;
 margin-bottom: 25px;
 display: flex;
 align-items: center;
 gap: 10px;
}
.settings-card h3 i {
 color: #2c5282;
}
.settings-card .form-group {
 margin-bottom: 18px;
}
.settings-card label {
 display: block;
 margin-bottom: 8px;
 font-weight: 600;
 color: #4a5568;
 font-size: 14px;
}
.settings-card input,
.settings-card select,
.settings-card textarea {
 width: 100%;
 padding: 12px 14px;
 border: 2px solid #e2e8f0;
 border-radius: 10px;
 font-size: 14px;
 transition: all 0.3s;
}
.settings-card input:focus,
.settings-card select:focus,
.settings-card textarea:focus {
 outline: none;
 border-color: #2c5282;
}
.settings-card .checkbox-group {
 display: flex;
 align-items: center;
 gap: 10px;
 margin-bottom: 12px;
}
.settings-card .checkbox-group input {
 width: auto;
}
/* Modal */
.modal-overlay {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0,0,0,0.5);
 display: none;
 align-items: center;
 justify-content: center;
 z-index: 1000;
 backdrop-filter: blur(4px);
}
.modal-overlay.active {
 display: flex;
}
.modal {
 background: white;
 border-radius: 20px;
 width: 90%;
 max-width: 600px;
 max-height: 90vh;
 overflow-y: auto;
 animation: modalSlide 0.3s ease;
}
@keyframes modalSlide {
 from { opacity: 0; transform: translateY(-30px); }
 to { opacity: 1; transform: translateY(0); }
}
.modal-header {
 padding: 25px 30px;
 border-bottom: 1px solid #e2e8f0;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.modal-header h3 {
 color: #1e3a5f;
 font-size: 20px;
 display: flex;
 align-items: center;
 gap: 10px;
}
.modal-close {
 background: none;
 border: none;
 font-size: 28px;
 color: #a0aec0;
 cursor: pointer;
 transition: color 0.2s;
}
.modal-close:hover {
 color: #e53e3e;
}
.modal-body {
 padding: 25px 30px;
}
.modal-footer {
 padding: 20px 30px;
 border-top: 1px solid #e2e8f0;
 display: flex;
 justify-content: flex-end;
 gap: 12px;
}
/* Responsive */
@media (max-width: 1024px) {
 .sidebar {
 transform: translateX(-100%);
 }
 .sidebar.open {
 transform: translateX(0);
 }
 .main-content {
 margin-left: 0;
 }
 .dashboard-grid {
 grid-template-columns: 1fr;
 }
}
@media (max-width: 768px) {
 .stats-grid {
 grid-template-columns: 1fr 1fr;
 }
 .filter-bar {
 flex-direction: column;
 align-items: stretch;
 }
 .filter-group input,
 .filter-group select {
 width: 100%;
 }
 .settings-grid {
 grid-template-columns: 1fr;
 }
 .page {
 padding: 20px;
 }
}