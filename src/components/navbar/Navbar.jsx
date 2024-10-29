import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { updateCloseButton } from '../../services/api.service';

export default function Navbar() {
  const { t } = useTranslation();
  

  return (
    <header className='user-navbar'>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav d-flex flex-row justify-content-evenly">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/" onClick={() => updateCloseButton('main')}>
                  <img src="/images/icons/frog.webp" alt="" lazyload="true" />
                  Base
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS" onClick={() => updateCloseButton('other')}>
                  <img src="/images/icons/gaming.webp" alt="" lazyload="true" />
                  Ops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ship-yard" onClick={() => updateCloseButton('other')}>
                  <img src="/images/icons/shipyard.webp" alt="" lazyload="true" />
                  {t('shipYard')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends" onClick={() => updateCloseButton('other')}>
                  <img src="/images/icons/friends.webp" alt="" lazyload="true" />
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena" onClick={() => updateCloseButton('other')}>
                  <img src="/images/icons/podium.webp" alt="" lazyload="true" />
                  {t('arena')}
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}
