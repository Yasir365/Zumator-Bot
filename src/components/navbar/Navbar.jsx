import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className='user-navbar'>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">
                  <img src="/images/icons/frog.webp" alt="" />
                  Base
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS">
                  <img src="/images/icons/gaming.webp" alt="" />
                  Ops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ship-yard">
                  <img src="/images/icons/shipyard.webp" alt="" />
                  {t('shipYard')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends">
                  <img src="/images/icons/friends.webp" alt="" />
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena">
                  <img src="/images/icons/podium.webp" alt="" />
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
