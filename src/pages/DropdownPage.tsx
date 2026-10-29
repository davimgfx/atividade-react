import { useState } from 'react';
import Dropdown from '../components/dropdown/Dropdown';

export default function DropdownPage() {
  const [message, setMessage] = useState('Nenhuma opção selecionada ainda.');

  return (
    <div>
      <Dropdown
        label="Ações"
        options={[
          {
            id: 'editar',
            label: 'Editar',
            onSelect: () => setMessage('Você selecionou: Editar'),
          },
          {
            id: 'duplicar',
            label: 'Duplicar',
            onSelect: () => setMessage('Você selecionou: Duplicar'),
          },
          {
            id: 'arquivar',
            label: 'Arquivar',
            disabled: true,
          },
          {
            id: 'excluir',
            label: 'Excluir',
            onSelect: () => setMessage('Você selecionou: Excluir'),
          },
        ]}
      />
      <p style={{ marginTop: '1rem' }}>{message}</p>
    </div>
  );
}
