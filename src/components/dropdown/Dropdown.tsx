import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  id: string;
  label: ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
}

export default function Dropdown({ label, options }: DropdownProps) {
  const dropdownId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao clicar fora do componente.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(option: DropdownOption) {
    if (option.disabled) {
      return;
    }

    option.onSelect?.();
    setIsOpen(false);
  }

  const menuId = `${dropdownId}-menu`;

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        className="dropdown__trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}>
        {label}
        <span className="dropdown__caret" aria-hidden="true">
          ▾
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu" id={menuId} role="menu">
          {options.map((option) => (
            <li key={option.id} role="none">
              <button
                className="dropdown__item"
                type="button"
                role="menuitem"
                disabled={option.disabled}
                onClick={() => handleSelect(option)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
