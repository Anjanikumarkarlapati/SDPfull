import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { Sidebar, DashTitle, MetricsGrid, SectionTitle, Badge, FormGroup, tableStyle, thStyle, tdStyle, inputStyle, submitBtnStyle } from './AdminDashboard';

var ARTISAN_NAV = [['overview', '📊 Overview'], ['add', '➕ Add Product'], ['orders', '📦 Orders'], ['messages', '💬 Messages'], ['earnings', '💰 Earnings']];

export default function ArtisanDashboard() {
  var [tab, setTab] = useState('overview');
  var navigate = useNavigate();
  var toast = useToast();
  var showToast = toast.showToast;

  return (
    <div style={{ paddingTop: '72px', display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Sidebar role="Artisan Panel" user="Kamla Devi" nav={ARTISAN_NAV} tab={tab} setTab={setTab} navigate={navigate} />
      <div style={{ background: 'var(--warm-white)', padding: '2.5rem', overflowY: 'auto' }}>

        {tab === 'overview' && (
          <div>
            <DashTitle title="My Studio" sub="Welcome back, Kamla Devi · Mithila Community" />
            <MetricsGrid metrics={[['24', 'Active Listings', '↑ +2 this week'], ['187', 'Total Sales', '↑ +14 this month'], ['₹2.4L', 'Total Earnings', '↑ +₹18,000'], ['4.9', 'Avg Rating', '142 reviews']]} />
            <SectionTitle>Recent Orders</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Order</th>
                  <th style={thStyle}>Customer</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Earnings</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>#TC-1842</td><td style={tdStyle}>Sarah Mitchell</td><td style={tdStyle}>Madhubani Lotus</td><td style={tdStyle}>₹2,000</td><td style={tdStyle}><Badge type="delivered">Delivered</Badge></td></tr>
                <tr><td style={tdStyle}>#TC-1836</td><td style={tdStyle}>Priya Nair</td><td style={tdStyle}>Madhubani Canvas</td><td style={tdStyle}>₹4,000</td><td style={tdStyle}><Badge type="shipped">Shipped</Badge></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'add' && (
          <div>
            <DashTitle title="Add New Product" sub="List a new handcrafted item" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', maxWidth: '700px' }}>
              <FormGroup label="Product Name"><input style={inputStyle} placeholder="Madhubani Fish Panel" /></FormGroup>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormGroup label="Category">
                  <select style={inputStyle}>
                    <option>Pottery</option>
                    <option>Textiles</option>
                    <option>Jewellery</option>
                    <option>Paintings</option>
                    <option>Woodwork</option>
                  </select>
                </FormGroup>
                <FormGroup label="Price (₹)"><input style={inputStyle} type="number" placeholder="1500" /></FormGroup>
              </div>
              <FormGroup label="Description">
                <textarea style={{ ...inputStyle, height: '100px', resize: 'vertical' }} placeholder="Describe your craft..." />
              </FormGroup>
              <FormGroup label="Upload Images"><input style={inputStyle} type="file" accept="image/*" multiple /></FormGroup>
              <button onClick={function() { showToast('Product listed! Pending cultural review.'); }} style={submitBtnStyle}>Submit Listing</button>
            </div>
          </div>
        )}

        {tab === 'messages' && (
          <div>
            <DashTitle title="Customer Messages" sub="3 unread messages" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '1.5rem', borderLeft: '3px solid var(--ochre)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ fontFamily: "'Playfair Display',serif" }}>Sarah Mitchell</strong>
                <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--mud)' }}>2h ago</span>
              </div>
              <p style={{ color: 'var(--mud)', marginBottom: '1rem' }}>Can I request a custom size for the Madhubani Lotus Panel?</p>
              <button onClick={function() { showToast('Reply sent!'); }} style={{ background: 'var(--deep-brown)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontFamily: 'monospace', fontSize: '0.62rem', textTransform: 'uppercase', cursor: 'pointer' }}>Reply</button>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '1.5rem', borderLeft: '3px solid var(--sand)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ fontFamily: "'Playfair Display',serif" }}>Ravi Sharma</strong>
                <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--mud)' }}>1d ago</span>
              </div>
              <p style={{ color: 'var(--mud)', marginBottom: '1rem' }}>The painting arrived beautifully packed. Thank you so much!</p>
              <button onClick={function() { showToast('Reply sent!'); }} style={{ background: 'var(--deep-brown)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontFamily: 'monospace', fontSize: '0.62rem', textTransform: 'uppercase', cursor: 'pointer' }}>Reply</button>
            </div>
          </div>
        )}

        {tab === 'earnings' && (
          <div>
            <DashTitle title="Earnings" sub="80% of every sale goes directly to you" />
            <MetricsGrid metrics={[['₹2.4L', 'Total Earned', ''], ['₹18,000', 'This Month', ''], ['₹4,200', 'Pending Payout', '']]} />
            <SectionTitle>Payout History</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Month</th>
                  <th style={thStyle}>Amount</th>
                  <th style={thStyle}>Method</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>Feb 2025</td><td style={tdStyle}>₹16,400</td><td style={tdStyle}>Bank Transfer</td><td style={tdStyle}><Badge type="delivered">Paid</Badge></td></tr>
                <tr><td style={tdStyle}>Jan 2025</td><td style={tdStyle}>₹21,200</td><td style={tdStyle}>Bank Transfer</td><td style={tdStyle}><Badge type="delivered">Paid</Badge></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'orders' && (
          <div>
            <DashTitle title="My Orders" sub="All orders for your products" />
            <p style={{ color: 'var(--mud)' }}>Full order list displayed here.</p>
          </div>
        )}

      </div>
    </div>
  );
}
