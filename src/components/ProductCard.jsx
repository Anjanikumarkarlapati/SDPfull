import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [hov, setHov] = useState(false);

  const { id, name, tribe, state, artisan, price, old, img, stars, badge } = product;

  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(product);
    showToast(name + ' added to cart');
  }

  return (
    <div
      onClick={() => navigate('/shop/' + id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--cream)',
        border: '1px solid var(--sand)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? '0 20px 60px rgba(42,26,10,0.15)' : 'none'
      }}
    >
      <div style={{ height: '260px', overflow: 'hidden', position: 'relative', background: 'var(--sand)' }}>
        {badge && (
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--terracotta)', color: 'var(--cream)', fontFamily: 'monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.6rem', zIndex: 2 }}>
            {badge}
          </div>
        )}
        <img
          src={img}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hov ? 'scale(1.06)' : 'scale(1)' }}
        />
      </div>

      <div style={{ padding: '1.4rem 1.5rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '0.3rem' }}>
          {tribe} · {state}
        </div>
        <div style={{ color: 'var(--gold)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
          {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: 'var(--deep-brown)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
          {name}
        </div>
        <div style={{ color: 'var(--mud)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          by {artisan}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)' }}>
            {old && (
              <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--mud)', textDecoration: 'line-through', marginRight: '0.4rem' }}>
                ₹{old.toLocaleString()}
              </span>
            )}
            ₹{price.toLocaleString()}
          </div>
          <button
            onClick={handleAddToCart}
            style={{ background: 'var(--deep-brown)', color: 'var(--cream)', border: 'none', padding: '0.5rem 1rem', fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}
