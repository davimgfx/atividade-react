import { useState } from 'react';
import Toast, { type ToastType } from '../components/toast/Toast';

const MESSAGES: Record<ToastType, string> = {
  success: 'Operação concluída com sucesso!',
  error: 'Algo deu errado. Tente novamente.',
  info: 'Esta é uma mensagem informativa.',
};

export default function ToastPage() {
  const [openToast, setOpenToast] = useState<ToastType | null>(null);

  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <button
        type="button"
        className="dropdown__trigger"
        onClick={() => setOpenToast('success')}>
        Mostrar sucesso
      </button>
      <button
        type="button"
        className="dropdown__trigger"
        onClick={() => setOpenToast('error')}>
        Mostrar erro
      </button>
      <button
        type="button"
        className="dropdown__trigger"
        onClick={() => setOpenToast('info')}>
        Mostrar informação
      </button>

      {openToast && (
        <Toast
          type={openToast}
          message={MESSAGES[openToast]}
          onClose={() => setOpenToast(null)}
        />
      )}
    </div>
  );
}
