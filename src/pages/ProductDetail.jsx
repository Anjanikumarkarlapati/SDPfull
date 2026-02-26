import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/data';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const p = PRODUCTS.find(x => x.id === Number(id));

  if (!p) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', color: 'var(--mud)' }}>
        Product not found.
      </div>
    );
  }

  function handleAddToCart() {
    addToCart(p);
    showToast(p.name + ' added to cart');
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ padding: '2rem 2rem 0', maxWidth: '1100px', margin: '0 auto' }}>
        <button onClick={() => navigate('/shop')} style={{ background: 'none', border: 'none', fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ochre)', cursor: 'pointer' }}>
          ← Back to Shop
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1100px', margin: '2rem auto', padding: '0 2rem 5rem' }}>
        <div style={{ aspectRatio: '1', overflow: 'hidden', border: '1px solid var(--sand)' }}>
          <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '0.5rem' }}>
            {p.tribe} · {p.state}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: 'var(--deep-brown)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            {p.name}
          </h1>
          <div style={{ color: 'var(--mud)', fontSize: '1rem', marginBottom: '1.5rem' }}>
            Crafted by <strong>{p.artisan}</strong>
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '1rem' }}>
            {'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}
          </div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', color: 'var(--deep-brown)', marginBottom: '1.5rem' }}>
            {p.old && (
              <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'var(--mud)', marginRight: '0.5rem' }}>
                ₹{p.old.toLocaleString()}
              </span>
            )}
            ₹{p.price.toLocaleString()}
          </div>
          <p style={{ color: 'var(--mud)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>{p.desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            {[['Category', p.category.charAt(0).toUpperCase() + p.category.slice(1)], ['Origin', p.state], ['Artisan', p.artisan], ['Technique', 'Traditional Hand-made']].map(([label, val]) => (
              <div key={label} style={{ background: 'var(--sand)', padding: '1rem' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mud)', marginBottom: '0.3rem' }}>{label}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--deep-brown)' }}>{val}</div>
              </div>
            ))}
          </div>

          <button onClick={handleAddToCart} style={{ width: '100%', padding: '1.1rem', background: 'var(--deep-brown)', color: 'var(--cream)', border: 'none', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '0.75rem' }}>
            Add to Cart
          </button>

          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(122,140,106,0.1)', borderLeft: '3px solid var(--sage)' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'var(--sage)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>✅ Culturally Authenticated</div>
            <p style={{ fontSize: '0.85rem', color: 'var(--mud)', marginTop: '0.3rem' }}>Verified by our Cultural Consultants for authentic tribal origin.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
