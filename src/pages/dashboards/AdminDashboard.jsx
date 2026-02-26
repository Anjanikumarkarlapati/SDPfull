import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

// ── Shared Styles ──────────────────────────────────────────
export const tableStyle = { width: '100%', borderCollapse: 'collapse', background: 'var(--cream)', marginBottom: '2rem' };
export const thStyle = { background: 'var(--deep-brown)', color: 'var(--sand)', fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.8rem 1rem', textAlign: 'left' };
export const tdStyle = { padding: '0.9rem 1rem', borderBottom: '1px solid var(--sand)', fontSize: '0.9rem', color: 'var(--ink)' };
export const inputStyle = { width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--sand)', background: 'var(--cream)', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', color: 'var(--ink)', outline: 'none' };
export const submitBtnStyle = { padding: '0.9rem 2rem', background: 'var(--ochre)', color: 'var(--cream)', border: 'none', fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' };

// ── Shared Components ──────────────────────────────────────
export function Sidebar({ role, user, nav, tab, setTab, navigate }) {
  return (
    <div style={{ background: 'var(--deep-brown)', padding: '2rem 0', minHeight: '100%' }}>
      <div style={{ padding: '0 1.5rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '0.3rem' }}>{role}</div>
        <div style={{ fontFamily: "'Playfair Display',serif", color: 'var(--cream)', fontSize: '1.1rem' }}>{user}</div>
      </div>
      <ul style={{ listStyle: 'none' }}>
        {nav.map(function(item) {
          const key = item[0];
          const label = item[1];
          return (
            <li key={key}>
              <button
                onClick={function() { setTab(key); }}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.75rem 1.5rem', background: tab === key ? 'rgba(196,116,42,0.15)' : 'none', border: 'none', borderLeft: tab === key ? '3px solid var(--ochre)' : '3px solid transparent', color: tab === key ? 'var(--cream)' : 'rgba(255,255,255,0.5)', fontFamily: 'monospace', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                {label}
              </button>
            </li>
          );
        })}
        <li>
          <button
            onClick={function() { navigate('/'); }}
            style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.75rem 1.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', fontSize: '0.72rem', textTransform: 'uppercase', cursor: 'pointer', marginTop: '2rem' }}
          >
            ← Back to Site
          </button>
        </li>
      </ul>
    </div>
  );
}

export function DashTitle({ title, sub }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: 'var(--deep-brown)', marginBottom: '0.3rem' }}>{title}</h2>
      <p style={{ color: 'var(--mud)', fontFamily: 'monospace', fontSize: '0.9rem' }}>{sub}</p>
    </div>
  );
}

export function MetricsGrid({ metrics }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
      {metrics.map(function(m) {
        return (
          <div key={m[1]} style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '1.5rem', borderLeft: '4px solid var(--ochre)' }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: 'var(--deep-brown)', lineHeight: 1 }}>{m[0]}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mud)', marginTop: '0.3rem' }}>{m[1]}</div>
            {m[2] && <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--sage)', marginTop: '0.5rem' }}>{m[2]}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)', margin: '2rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--sand)' }}>
      {children}
    </h3>
  );
}

export function Badge({ type, children }) {
  var bg = 'rgba(212,168,83,0.2)';
  var color = '#7A5A10';
  if (type === 'delivered') { bg = 'rgba(196,116,42,0.15)'; color = 'var(--ochre)'; }
  if (type === 'shipped')   { bg = 'rgba(122,140,106,0.2)'; color = '#3A5A2A'; }
  if (type === 'active')    { bg = 'rgba(122,140,106,0.2)'; color = '#3A5A2A'; }
  return (
    <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', background: bg, color: color }}>
      {children}
    </span>
  );
}

export function ActionBtn({ onClick, children, danger }) {
  return (
    <button
      onClick={onClick}
      style={{ background: danger ? 'var(--terracotta)' : 'var(--deep-brown)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontFamily: 'monospace', fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}

export function FormGroup({ label, children }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontFamily: 'monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mud)', marginBottom: '0.4rem' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Admin Dashboard ────────────────────────────────────────
var ADMIN_NAV = [['overview', '📊 Overview'], ['orders', '🧾 Transactions'], ['disputes', '⚖️ Disputes'], ['promotions', '🎯 Promotions']];

export default function AdminDashboard() {
  var [tab, setTab] = useState('overview');
  var navigate = useNavigate();
  var toast = useToast();
  var showToast = toast.showToast;

  return (
    <div style={{ paddingTop: '72px', display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Sidebar role="Admin Panel" user="Rajesh Kumar" nav={ADMIN_NAV} tab={tab} setTab={setTab} navigate={navigate} />
      <div style={{ background: 'var(--warm-white)', padding: '2.5rem', overflowY: 'auto' }}>

        {tab === 'overview' && (
          <div>
            <DashTitle title="Platform Overview" sub="Last updated: Today" />
            <MetricsGrid metrics={[['2,419', 'Total Artisans', '↑ +12 this week'], ['18,432', 'Active Listings', '↑ +245 this week'], ['₹4.2Cr', 'Total GMV', '↑ +8.3% this month'], ['56', 'Countries', '↑ +3 new'], ['7', 'Open Disputes', 'Needs attention']]} />
            <SectionTitle>Recent Transactions</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Order ID</th>
                  <th style={thStyle}>Customer</th>
                  <th style={thStyle}>Artisan</th>
                  <th style={thStyle}>Amount</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>#TC-1842</td><td style={tdStyle}>Sarah Mitchell</td><td style={tdStyle}>Kamla Devi</td><td style={tdStyle}>₹2,500</td><td style={tdStyle}><Badge type="delivered">Delivered</Badge></td></tr>
                <tr><td style={tdStyle}>#TC-1841</td><td style={tdStyle}>Ravi Sharma</td><td style={tdStyle}>Jangarh Singh</td><td style={tdStyle}>₹1,800</td><td style={tdStyle}><Badge type="shipped">Shipped</Badge></td></tr>
                <tr><td style={tdStyle}>#TC-1840</td><td style={tdStyle}>Priya Nair</td><td style={tdStyle}>Parvati Murmu</td><td style={tdStyle}>₹3,800</td><td style={tdStyle}><Badge type="pending">Pending</Badge></td></tr>
              </tbody>
            </table>
            <SectionTitle>Pending Artisan Approvals</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Tribe</th>
                  <th style={thStyle}>State</th>
                  <th style={thStyle}>Craft</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>Munni Oraon</td><td style={tdStyle}>Oraon Tribe</td><td style={tdStyle}>Jharkhand</td><td style={tdStyle}>Pottery</td><td style={tdStyle}><ActionBtn onClick={function() { showToast('Artisan approved!'); }}>Approve</ActionBtn></td></tr>
                <tr><td style={tdStyle}>Tara Bhil</td><td style={tdStyle}>Bhil Tribe</td><td style={tdStyle}>Gujarat</td><td style={tdStyle}>Paintings</td><td style={tdStyle}><ActionBtn onClick={function() { showToast('Artisan approved!'); }}>Approve</ActionBtn></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'orders' && (
          <div>
            <DashTitle title="Transactions" sub="All platform orders" />
            <p style={{ color: 'var(--mud)' }}>Full transaction history displayed here.</p>
          </div>
        )}

        {tab === 'disputes' && (
          <div>
            <DashTitle title="Dispute Resolution" sub="7 open disputes" />
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Customer</th>
                  <th style={thStyle}>Artisan</th>
                  <th style={thStyle}>Issue</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>#D-218</td><td style={tdStyle}>Mark Lee</td><td style={tdStyle}>Heera Nayak</td><td style={tdStyle}>Item damaged</td><td style={tdStyle}><Badge type="active">Open</Badge></td><td style={tdStyle}><ActionBtn onClick={function() { showToast('Dispute resolved!'); }}>Resolve</ActionBtn></td></tr>
                <tr><td style={tdStyle}>#D-217</td><td style={tdStyle}>Nadia Ali</td><td style={tdStyle}>Arthi Toda</td><td style={tdStyle}>Wrong item</td><td style={tdStyle}><Badge type="active">Open</Badge></td><td style={tdStyle}><ActionBtn onClick={function() { showToast('Dispute resolved!'); }}>Resolve</ActionBtn></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'promotions' && (
          <div>
            <DashTitle title="Manage Promotions" sub="Create platform-wide offers" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', maxWidth: '600px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup label="Promotion Name"><input style={inputStyle} placeholder="Heritage Week Sale" /></FormGroup>
                <FormGroup label="Discount %"><input style={inputStyle} type="number" placeholder="20" /></FormGroup>
                <FormGroup label="Start Date"><input style={inputStyle} type="date" /></FormGroup>
                <FormGroup label="End Date"><input style={inputStyle} type="date" /></FormGroup>
              </div>
              <button onClick={function() { showToast('Promotion launched!'); }} style={submitBtnStyle}>Launch Promotion</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
