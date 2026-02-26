import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((message) => {
    setMsg(message);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div style={{
          position: 'fixed', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--deep-brown)', color: 'var(--cream)',
          padding: '1rem 2rem', borderLeft: '4px solid var(--ochre)',
          fontFamily: 'monospace', fontSize: '0.8rem',
          zIndex: 9999, whiteSpace: 'nowrap',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        }}>
          {msg}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
