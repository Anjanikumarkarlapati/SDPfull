import { ARTISANS } from '../data/data';
import ArtisanCard from '../components/ArtisanCard';

export default function Artisans() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ textAlign: 'center', padding: '5rem 2rem 3rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1rem' }}>Our Community</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--deep-brown)', marginBottom: '1rem' }}>
          Meet Our <em style={{ color: 'var(--ochre)' }}>Artisans</em>
        </h2>
        <p style={{ color: 'var(--mud)', fontSize: '1.1rem', maxWidth: '55ch', margin: '0 auto', lineHeight: 1.7 }}>
          Talented craftspeople from across India's tribal heartlands.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.5rem', padding: '0 2rem 5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {ARTISANS.map(a => <ArtisanCard key={a.id} artisan={a} dark={false} />)}
      </div>
    </div>
  );
}
