import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartClick }) {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [role, setRole] = useState('customer');

  function handleLogin() {
    setLoginOpen(false);
    navigate('/dashboard/' + role);
  }

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: 'var(--ink)', padding: '0 4rem', height: '72px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: '2px solid var(--ochre)'
  };

  const linkStyle = {
    color: 'var(--sand)', textDecoration: 'none',
    fontFamily: 'monospace', fontSize: '0.75rem',
    letterSpacing: '0.1em', textTransform: 'uppercase'
  };

  const btnOutline = {
    fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '0.5rem 1.2rem',
    border: '1px solid var(--ochre)', background: 'transparent',
    color: 'var(--ochre)', cursor: 'pointer'
  };

  const btnFill = {
    ...btnOutline,
    background: 'var(--ochre)', color: 'var(--cream)'
  };

  const overlayStyle = {
    position: 'fixed', inset: 0, background: 'rgba(28,16,8,0.82)',
    zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center'
  };

  const modalStyle = {
    background: 'var(--cream)', maxWidth: '480px', width: '90%',
    padding: '3rem', position: 'relative'
  };

  const labelStyle = {
    display: 'block', fontFamily: 'monospace', fontSize: '0.68rem',
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--mud)', marginBottom: '0.4rem'
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid var(--sand)', background: 'var(--cream)',
    fontFamily: "'Crimson Pro',serif", fontSize: '1rem',
    color: 'var(--ink)', outline: 'none', marginBottom: '1rem'
  };

  const submitStyle = {
    width: '100%', padding: '0.9rem',
    background: 'var(--ochre)', color: 'var(--cream)',
    border: 'none', fontFamily: 'monospace', fontSize: '0.75rem',
    letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer'
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="/" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: 'var(--cream)', textDecoration: 'none' }}>
          Tribal<span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Craft</span>
        </Link>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {[['Home', '/'], ['Shop', '/shop'], ['Artisans', '/artisans'], ['Join Us', '/roles']].map(([label, path]) => (
            <li key={path}>
              <Link to={path} style={linkStyle}>{label}</Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button style={btnOutline} onClick={() => setLoginOpen(true)}>Sign In</button>
          <button style={btnFill} onClick={() => setRegisterOpen(true)}>Register</button>
          <button onClick={onCartClick} style={{ background: 'none', border: 'none', color: 'var(--sand)', fontSize: '1.2rem', cursor: 'pointer', position: 'relative' }}>
            🛒
            {totalItems > 0 && (
              <span style={{ position: 'absolute', top: '-6px', right: '-8px', background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'monospace', fontSize: '0.6rem', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {loginOpen && (
        <div style={overlayStyle} onClick={() => setLoginOpen(false)}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <button onClick={() => setLoginOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--mud)' }}>✕</button>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: 'var(--deep-brown)', marginBottom: '0.3rem' }}>Welcome Back</h2>
            <p style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--ochre)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>SIGN IN TO YOUR ACCOUNT</p>
            <label style={labelStyle}>Email Address</label>
            <input style={inputStyle} type="email" placeholder="your@email.com" />
            <label style={labelStyle}>Password</label>
            <input style={inputStyle} type="password" placeholder="••••••••" />
            <label style={labelStyle}>Access as</label>
            <select style={inputStyle} value={role} onChange={e => setRole(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="artisan">Artisan</option>
              <option value="admin">Admin</option>
              <option value="consultant">Cultural Consultant</option>
            </select>
            <button style={submitStyle} onClick={handleLogin}>Sign In</button>
          </div>
        </div>
      )}

      {registerOpen && (
        <div style={overlayStyle} onClick={() => setRegisterOpen(false)}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <button onClick={() => setRegisterOpen(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--mud)' }}>✕</button>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.8rem', color: 'var(--deep-brown)', marginBottom: '0.3rem' }}>Join TribalCraft</h2>
            <p style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: 'var(--ochre)', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>CREATE YOUR ACCOUNT</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input style={inputStyle} placeholder="Priya" />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input style={inputStyle} placeholder="Sharma" />
              </div>
            </div>
            <label style={labelStyle}>Email</label>
            <input style={inputStyle} type="email" placeholder="your@email.com" />
            <label style={labelStyle}>Password</label>
            <input style={inputStyle} type="password" placeholder="••••••••" />
            <button style={submitStyle} onClick={() => setRegisterOpen(false)}>Create Account</button>
          </div>
        </div>
      )}
    </>
  );
}
