import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, ARTISANS } from '../data/data';
import ProductCard from '../components/ProductCard';
import ArtisanCard from '../components/ArtisanCard';

const CATS = ['all', 'pottery', 'textile', 'jewelry', 'art', 'woodwork'];

export default function Home() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filtered = PRODUCTS
    .filter(p => filter === 'all' || p.category === filter)
    .slice(0, 8);

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* HERO */}
      <section style={{ minHeight: 'calc(100vh - 72px)', background: 'var(--ink)', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg,var(--ochre) 0,var(--ochre) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(-45deg,var(--ochre) 0,var(--ochre) 1px,transparent 1px,transparent 40px)' }} />

        <div style={{ padding: '8rem 5rem', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem' }}>
            ✦ Authentic Tribal Craftsmanship
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: '4.5rem', color: 'var(--cream)', lineHeight: 1.05, marginBottom: '2rem' }}>
            Where <em style={{ color: 'var(--gold)' }}>Ancient</em><br />
            Hands Meet<br />
            Global Hearts
          </h1>
          <p style={{ color: 'var(--sand)', fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '42ch', marginBottom: '3rem' }}>
            A marketplace connecting tribal artisans directly with conscious buyers worldwide.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => navigate('/shop')} style={{ background: 'var(--ochre)', color: 'var(--cream)', border: 'none', padding: '1rem 2.5rem', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Explore Crafts
            </button>
            <button onClick={() => navigate('/roles')} style={{ background: 'transparent', color: 'var(--sand)', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2.5rem', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Become an Artisan
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '3rem', alignContent: 'center' }}>
          {PRODUCTS.slice(0, 4).map(p => (
            <div key={p.id} onClick={() => navigate('/shop/' + p.id)} style={{ overflow: 'hidden', border: '1px solid rgba(196,116,42,0.3)', position: 'relative', cursor: 'pointer', height: '200px' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(28,16,8,0.88))', padding: '0.8rem' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", color: 'var(--cream)', fontSize: '0.82rem' }}>{p.name}</div>
                <div style={{ fontFamily: 'monospace', color: 'var(--gold)', fontSize: '0.65rem' }}>₹{p.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: 'var(--ochre)', padding: '2rem 4rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {[['2,400+', 'Tribal Artisans'], ['84', 'Tribal Communities'], ['56', 'Countries Reached'], ['₹4.2Cr', 'Artisan Earnings']].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: 'var(--cream)' }}>{num}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <section>
        <div style={{ textAlign: 'center', padding: '5rem 2rem 3rem' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1rem' }}>Featured Collection</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--deep-brown)' }}>
            Handpicked <em style={{ color: 'var(--ochre)' }}>Masterpieces</em>
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '0 2rem 2.5rem', flexWrap: 'wrap' }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem 1.5rem', border: '1px solid', cursor: 'pointer', background: filter === c ? 'var(--deep-brown)' : 'transparent', color: filter === c ? 'var(--cream)' : 'var(--mud)', borderColor: filter === c ? 'var(--deep-brown)' : 'var(--sand)' }}>
              {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '2px', padding: '0 2rem 5rem', maxWidth: '1400px', margin: '0 auto' }}>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ARTISANS */}
      <section style={{ background: 'var(--deep-brown)', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Meet the Makers</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--cream)' }}>
            Hands Behind <em style={{ color: 'var(--gold)' }}>Every Craft</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {ARTISANS.slice(0, 4).map(a => <ArtisanCard key={a.id} artisan={a} dark={true} />)}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '5rem 2rem', background: 'var(--sand)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1rem' }}>Customer Stories</div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--deep-brown)' }}>
            From Across the <em style={{ color: 'var(--ochre)' }}>Globe</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { text: 'The Dhokra figurine I received is breathtaking. Knowing my purchase supports a tribal family makes it even more meaningful.', author: 'Sarah Mitchell', loc: 'London, UK' },
            { text: 'Warli painting for our office lobby — visitors constantly ask about it. We learned the story behind each symbol. Priceless.', author: 'Ravi Sharma', loc: 'Bangalore, India' },
            { text: 'Kantha quilts as gifts for our team. Beautiful packaging and the cultural documentation card was a wonderful touch.', author: 'Priya Nair', loc: 'Toronto, Canada' },
          ].map(r => (
            <div key={r.author} style={{ background: 'var(--cream)', padding: '2rem', borderTop: '3px solid var(--ochre)' }}>
              <div style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', color: 'var(--mud)', lineHeight: 1.7, marginBottom: '1.5rem' }}>"{r.text}"</p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--deep-brown)' }}>{r.author}</div>
              <div style={{ color: 'var(--ochre)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{r.loc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--ink)', padding: '4rem', borderTop: '2px solid var(--ochre)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', maxWidth: '1200px', margin: '0 auto 3rem' }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: 'var(--cream)', marginBottom: '1rem' }}>
              Tribal<span style={{ color: 'var(--gold)' }}>Craft</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              A platform where ancient hands meet global hearts.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1.5rem' }}>Navigate</div>
            {[['Home', '/'], ['Shop', '/shop'], ['Artisans', '/artisans'], ['Join Us', '/roles']].map(([label, path]) => (
              <div key={label} onClick={() => navigate(path)} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '0.6rem', cursor: 'pointer' }}>{label}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1.5rem' }}>Dashboards</div>
            {[['Admin', '/dashboard/admin'], ['Artisan', '/dashboard/artisan'], ['Customer', '/dashboard/customer'], ['Consultant', '/dashboard/consultant']].map(([label, path]) => (
              <div key={label} onClick={() => navigate(path)} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '0.6rem', cursor: 'pointer' }}>{label}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1.5rem' }}>Support</div>
            {['FAQ', 'Shipping Policy', 'Returns', 'Contact Us'].map(l => (
              <div key={l} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '0.6rem', cursor: 'pointer' }}>{l}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', textAlign: 'center', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>
          © 2025 TribalCraft · Empowering Communities, Preserving Heritage
        </div>
      </footer>
    </div>
  );
}
