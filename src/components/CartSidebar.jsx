import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const { showToast } = useToast();

  function handleCheckout() {
    if (cart.length === 0) {
      showToast('Your cart is empty!');
      return;
    }
    clearCart();
    onClose();
    showToast('Order placed! Thank you for supporting tribal artisans 🎉');
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 998 }}
        />
      )}

      <div style={{
        position: 'fixed', top: '72px', right: 0,
        width: '380px', height: 'calc(100vh - 72px)',
        background: 'var(--cream)', borderLeft: '1px solid var(--sand)',
        zIndex: 999,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s ease',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--deep-brown)' }}>Your Cart</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: 'var(--mud)' }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--mud)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <p style={{ fontFamily: "'Playfair Display',serif" }}>Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--sand)', alignItems: 'center' }}>
                <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '0.9rem', color: 'var(--deep-brown)', marginBottom: '0.2rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--mud)' }}>by {item.artisan} · Qty: {item.qty}</div>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--terracotta)', cursor: 'pointer', fontFamily: 'monospace', fontSize: '0.7rem', textTransform: 'uppercase', padding: 0, marginTop: '0.3rem' }}>
                    Remove
                  </button>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--ochre)' }}>
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--sand)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mud)' }}>Total</span>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: 'var(--deep-brown)' }}>₹{totalPrice.toLocaleString()}</span>
          </div>
          <button onClick={handleCheckout} style={{ width: '100%', padding: '1rem', background: 'var(--ochre)', color: 'var(--cream)', border: 'none', fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
