import { useNavigate } from 'react-router-dom';

const ROLES = [
  {
    icon: '🛠️',
    title: 'Platform Admin',
    desc: 'Oversee the marketplace, manage users, monitor transactions, resolve disputes.',
    features: ['Manage artisan approvals', 'Monitor all transactions', 'Resolve customer disputes', 'Platform analytics'],
    path: '/dashboard/admin',
    color: 'var(--ochre)'
  },
  {
    icon: '🎨',
    title: 'Tribal Artisan',
    desc: 'Create your storefront, list handcrafted items, manage orders, reach customers worldwide.',
    features: ['Create & manage listings', 'Track orders real-time', 'Communicate with buyers', 'View earnings & payouts'],
    path: '/dashboard/artisan',
    color: 'var(--sage)'
  },
  {
    icon: '🛍️',
    title: 'Customer',
    desc: 'Discover authentic tribal crafts, support artisans directly, join exclusive promotions.',
    features: ['Browse curated collections', 'Purchase & track orders', 'Write product reviews', 'Exclusive promotions'],
    path: '/dashboard/customer',
    color: 'var(--gold)'
  },
  {
    icon: '📜',
    title: 'Cultural Consultant',
    desc: 'Authenticate listings, ensure cultural accuracy, protect tribal intellectual heritage.',
    features: ['Review & authenticate', 'Add cultural documentation', 'Flag misrepresentations', 'Certify artisan credentials'],
    path: '/dashboard/consultant',
    color: 'var(--terracotta)'
  },
];

export default function Roles() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ textAlign: 'center', padding: '5rem 2rem 3rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1rem' }}>Join the Platform</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--deep-brown)', marginBottom: '1rem' }}>
          Your Role in the <em style={{ color: 'var(--ochre)' }}>Ecosystem</em>
        </h2>
        <p style={{ color: 'var(--mud)', fontSize: '1.1rem', maxWidth: '55ch', margin: '0 auto', lineHeight: 1.7 }}>
          Whether you create, buy, manage, or protect — there is a place for you.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '2px', maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 5rem' }}>
        {ROLES.map(r => (
          <div key={r.title} style={{ background: 'var(--cream)', padding: '3rem 2.5rem', borderLeft: '4px solid ' + r.color }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{r.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)', marginBottom: '0.8rem' }}>{r.title}</div>
            <p style={{ color: 'var(--mud)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{r.desc}</p>
            <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
              {r.features.map(f => (
                <li key={f} style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--mud)', padding: '0.4rem 0', borderBottom: '1px solid var(--sand)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--ochre)' }}>→</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate(r.path)} style={{ width: '100%', padding: '0.75rem', background: 'var(--deep-brown)', color: 'var(--cream)', border: 'none', fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
              {r.title} Dashboard →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
