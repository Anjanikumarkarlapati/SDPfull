import { useState } from 'react';
import { PRODUCTS } from '../data/data';
import ProductCard from '../components/ProductCard';

const CATS = ['all', 'pottery', 'textile', 'jewelry', 'art', 'woodwork'];

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter(p => {
    const matchCat = filter === 'all' || p.category === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.tribe.toLowerCase().includes(q) || p.artisan.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ background: 'var(--sand)', padding: '2rem' }}>
        <div style={{ display: 'flex', maxWidth: '700px', margin: '0 auto' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search crafts, tribes, artisans..."
            style={{ flex: 1, padding: '1rem 1.5rem', border: '1px solid var(--sand)', background: 'var(--cream)', fontFamily: "'Crimson Pro',serif", fontSize: '1rem', outline: 'none' }}
          />
          <button style={{ background: 'var(--ochre)', color: 'var(--cream)', border: 'none', padding: '0 1.5rem', fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
            Search
          </button>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '4rem 2rem 2rem' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ochre)', marginBottom: '1rem' }}>Marketplace</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '3rem', color: 'var(--deep-brown)' }}>
          All <em style={{ color: 'var(--ochre)' }}>Handcrafted</em> Items
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
    </div>
  );
}
