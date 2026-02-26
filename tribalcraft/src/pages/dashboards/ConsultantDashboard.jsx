import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { Sidebar, DashTitle, MetricsGrid, SectionTitle, ActionBtn, FormGroup, tableStyle, thStyle, tdStyle, inputStyle, submitBtnStyle } from './AdminDashboard';

var CONSULTANT_NAV = [['overview', '📊 Overview'], ['review', '🔍 Review Listings'], ['archive', '📚 Heritage Archive'], ['flags', '🚩 Flagged Items']];

export default function ConsultantDashboard() {
  var [tab, setTab] = useState('overview');
  var navigate = useNavigate();
  var toast = useToast();
  var showToast = toast.showToast;

  return (
    <div style={{ paddingTop: '72px', display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Sidebar role="Cultural Consultant" user="Dr. Meera Nair" nav={CONSULTANT_NAV} tab={tab} setTab={setTab} navigate={navigate} />
      <div style={{ background: 'var(--warm-white)', padding: '2.5rem', overflowY: 'auto' }}>

        {tab === 'overview' && (
          <div>
            <DashTitle title="Cultural Consultant Panel" sub="Dr. Meera Nair · Heritage Scholar" />
            <MetricsGrid metrics={[['14', 'Pending Reviews', 'Needs attention'], ['342', 'Items Certified', '↑ +18 this month'], ['3', 'Flagged Items', ''], ['28', 'Tribes Documented', '']]} />
            <SectionTitle>Pending Authentications</SectionTitle>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Artisan</th>
                  <th style={thStyle}>Claimed Tribe</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Warli Kitchen Shelf</td>
                  <td style={tdStyle}>Ramu Barela</td>
                  <td style={tdStyle}>Warli, Maharashtra</td>
                  <td style={tdStyle}>
                    <ActionBtn onClick={function() { showToast('Certified ✅'); }}>Certify</ActionBtn>
                    <span style={{ display: 'inline-block', width: '8px' }} />
                    <ActionBtn danger={true} onClick={function() { showToast('Flagged 🚩'); }}>Flag</ActionBtn>
                  </td>
                </tr>
                <tr>
                  <td style={tdStyle}>Tribal Brass Lamp</td>
                  <td style={tdStyle}>Sita Gond</td>
                  <td style={tdStyle}>Gond, MP</td>
                  <td style={tdStyle}>
                    <ActionBtn onClick={function() { showToast('Certified ✅'); }}>Certify</ActionBtn>
                    <span style={{ display: 'inline-block', width: '8px' }} />
                    <ActionBtn danger={true} onClick={function() { showToast('Flagged 🚩'); }}>Flag</ActionBtn>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === 'review' && (
          <div>
            <DashTitle title="Review Listings" sub="Listings awaiting cultural review" />
            <p style={{ color: 'var(--mud)' }}>All pending listings displayed here.</p>
          </div>
        )}

        {tab === 'archive' && (
          <div>
            <DashTitle title="Heritage Archive" sub="Document tribal craft traditions" />
            <div style={{ background: 'var(--cream)', border: '1px solid var(--sand)', padding: '2rem', maxWidth: '700px' }}>
              <FormGroup label="Tribe / Community"><input style={inputStyle} placeholder="e.g. Warli Tribe" /></FormGroup>
              <FormGroup label="State / Region"><input style={inputStyle} placeholder="e.g. Maharashtra" /></FormGroup>
              <FormGroup label="Craft Tradition"><input style={inputStyle} placeholder="e.g. Warli Painting" /></FormGroup>
              <FormGroup label="Historical Background">
                <textarea style={{ ...inputStyle, height: '120px', resize: 'vertical' }} placeholder="Document origins, cultural significance, techniques..." />
              </FormGroup>
              <button onClick={function() { showToast('Entry added to archive!'); }} style={submitBtnStyle}>Save to Archive</button>
            </div>
          </div>
        )}

        {tab === 'flags' && (
          <div>
            <DashTitle title="Flagged Items" sub="Items flagged for misrepresentation" />
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Seller</th>
                  <th style={thStyle}>Issue</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Fake Tribal Mask</td>
                  <td style={tdStyle}>External Seller</td>
                  <td style={tdStyle}>Claims tribal origin; mass manufactured</td>
                  <td style={tdStyle}><ActionBtn danger={true} onClick={function() { showToast('Listing removed!'); }}>Remove</ActionBtn></td>
                </tr>
                <tr>
                  <td style={tdStyle}>Misbranded Pottery</td>
                  <td style={tdStyle}>CraftHouse</td>
                  <td style={tdStyle}>Machine-made sold as handcrafted</td>
                  <td style={tdStyle}><ActionBtn danger={true} onClick={function() { showToast('Listing removed!'); }}>Remove</ActionBtn></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
