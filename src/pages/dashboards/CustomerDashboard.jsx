import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { Sidebar, DashTitle, MetricsGrid, SectionTitle, Badge, FormGroup, tableStyle, thStyle, tdStyle, inputStyle, submitBtnStyle } from './AdminDashboard';

var CUSTOMER_NAV = [['overview', '🏠 My Account'], ['orders', '📦 My Orders'], ['reviews', '⭐ My Reviews'], ['promotions', '🎁 Promotions']];

export default function CustomerDashboard() {
  var [tab, setTab] = useState('overview');
  var navigate = useNavigate();
  var toast = useToast();
  var showToast = toast.showToast;

  return (
    <div style={{ paddingTop: '72px', display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Sidebar role="Customer Panel" user="Anita Patel" nav={CUSTOMER_NAV} tab={tab} setTab={setTab} navigate={navigate} />
      <div style={{ background: 'var(--warm-white)', padding: '2.5rem', overflowY: 'auto' }}>

        {tab === 'overview' && (
          <div>
            <DashTitle title="My Account" sub="Welcome, Anita Patel · Member since 2023" />
            <MetricsGrid metrics={[['23', 'Orders Placed', ''], ['8', 'Wishlist Items', ''], ['12', 'Reviews Written', ''], ['₹42,800', 'Total Spent', '']]} />
            <SectionTitle>Recent Orders</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Order</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Artisan</th>
                  <th style={thStyle}>Amount</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={tdStyle}>#TC-1842</td><td style={tdStyle}>Madhubani Lotus Panel</td><td style={tdStyle}>Kamla Devi</td><td style={tdStyle}>₹2,500</td><td style={tdStyle}><Badge type="delivered">Delivered</Badge></td></tr>
                <tr><td style={tdStyle}>#TC-1821</td><td style={tdStyle}>Kantha Quilt</td><td style={tdStyle}>Parvati Murmu</td><td style={tdStyle}>₹3,800</td><td style={tdStyle}><Badge type="shipped">Shipped</Badge></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'orders' && (
          <div>
            <DashTitle title="My Orders" sub="All your purchases" />
            <p style={{ color: 'var(--mud)' }}>Full order history displayed here.</p>
          </div>
        )}

        {tab === 'reviews' && (
          <div>
            <DashTitle title="Write a Review" sub="Share your experience" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', maxWidth: '600px' }}>
              <FormGroup label="Product">
                <select style={inputStyle}>
                  <option>Madhubani Lotus — Kamla Devi</option>
                  <option>Kantha Quilt — Parvati Murmu</option>
                </select>
              </FormGroup>
              <FormGroup label="Rating">
                <div style={{ fontSize: '2rem', color: 'var(--gold)', cursor: 'pointer' }}>★★★★★</div>
              </FormGroup>
              <FormGroup label="Your Review">
                <textarea style={{ ...inputStyle, height: '100px', resize: 'vertical' }} placeholder="Share your experience with this product..." />
              </FormGroup>
              <button onClick={function() { showToast('Review submitted! Thank you.'); }} style={submitBtnStyle}>Submit Review</button>
            </div>
          </div>
        )}

        {tab === 'promotions' && (
          <div>
            <DashTitle title="Active Promotions" sub="Exclusive member offers" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', borderLeft: '4px solid var(--gold)', marginBottom: '1rem', maxWidth: '700px' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)', marginBottom: '0.3rem' }}>Heritage Week — 20% Off Paintings</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--gold)', marginBottom: '1rem' }}>Valid till 28 Feb 2025</div>
              <button onClick={function() { showToast('Coupon HERITAGE20 applied!'); }} style={submitBtnStyle}>Apply: HERITAGE20</button>
            </div>
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', borderLeft: '4px solid var(--ochre)', maxWidth: '700px' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)', marginBottom: '0.3rem' }}>First Order — Free Shipping</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--ochre)', marginBottom: '1rem' }}>For new members</div>
              <button onClick={function() { showToast('Coupon FREESHIP applied!'); }} style={submitBtnStyle}>Apply: FREESHIP</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
