import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegação principal">
        <NavLink
          to="/accordion"
          className={({ isActive }) =>
            isActive
              ? 'site-nav__link site-nav__link--active'
              : 'site-nav__link'
          }>
          Acordeão
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'site-nav__link site-nav__link--active'
              : 'site-nav__link'
          }>
          Produtos
        </NavLink>
        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive
              ? 'site-nav__link site-nav__link--active'
              : 'site-nav__link'
          }>
          Barra de Progresso
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) =>
            isActive
              ? 'site-nav__link site-nav__link--active'
              : 'site-nav__link'
          }>
          Abas
        </NavLink>
      </nav>
    </header>
  );
}
