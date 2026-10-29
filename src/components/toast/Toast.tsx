import { useEffect } from 'react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
  onClose: () => void;
}

const ICONS: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
};

export default function Toast({
  type,
  message,
  duration = 4000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (duration <= 0) {
      return;
    }

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast-container">
      <div className={`toast toast--${type}`} role="status">
        <span className="toast__icon" aria-hidden="true">
          {ICONS[type]}
        </span>
        <p className="toast__message">{message}</p>
        <button
          className="toast__close"
          type="button"
          aria-label="Fechar notificação"
          onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
