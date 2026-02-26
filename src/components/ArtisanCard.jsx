import { useState } from 'react';

export default function ArtisanCard({ artisan, dark }) {
  const [hov, setHov] = useState(false);
  const isDark = dark === true;
  const { name, tribe, state, specialty, products, sales, img } = artisan;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'var(--cream)',
        border: '1px solid ' + (hov ? 'var(--ochre)' : 'rgba(196,116,42,0.2)'),
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hov ? 'translateY(-4px)' : 'none',
        cursor: 'pointer'
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={img}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.5s', transform: hov ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontFamily: "'Playfair Display',serif", color: isDark ? 'var(--cream)' : 'var(--deep-brown)', fontSize: '1.1rem', marginBottom: '0.3rem' }}>
          {name}
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          {tribe} · {state}
        </div>
        <div style={{ color: isDark ? 'var(--sand)' : 'var(--mud)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          {specialty}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'monospace', color: 'var(--ochre)', fontSize: '1rem' }}>{products}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: isDark ? 'rgba(255,255,255,0.35)' : 'var(--mud)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Products</div>
          </div>
          <div>
            <div style={{ fontFamily: 'monospace', color: 'var(--ochre)', fontSize: '1rem' }}>{sales}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: isDark ? 'rgba(255,255,255,0.35)' : 'var(--mud)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
}
