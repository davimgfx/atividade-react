import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/useTheme';

const LINKS = [
  { to: '/accordion', label: 'Acordeão' },
  { to: '/products', label: 'Produtos' },
  { to: '/progress', label: 'Barra de Progresso' },
  { to: '/tabs', label: 'Abas' },
  { to: '/dropdown', label: 'Menu Suspenso' },
  { to: '/toast', label: 'Notificação Toast' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <button
          className="site-nav__toggle"
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={() => setIsOpen((open) => !open)}>
          <span className="site-nav__toggle-icon" aria-hidden="true">
            ☰
          </span>
        </button>

        <nav
          id="main-nav"
          className={`site-nav${isOpen ? ' site-nav--open' : ''}`}
          aria-label="Navegação principal">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'site-nav__link site-nav__link--active'
                  : 'site-nav__link'
              }
              onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

      <button
          className="theme-toggle"
          type="button"
          aria-label={
            theme === 'light'
              ? 'Ativar modo escuro'
              : 'Ativar modo claro'
          }
          onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
