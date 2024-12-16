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
            <ul className="navbar-nav d-flex flex-row justify-content-evenly">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">
                  <img src="/images/icons/frog.webp" alt="" />
                  {t('Base')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS">
                  <img src="/images/icons/gaming.webp" alt="" />
                  {t('Ops')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/space-port">
                  <img src="/images/icons/shipyard.webp" alt="" />
                  {t('Space-Port')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends">
                  <img src="/images/icons/friends.webp" alt="" />
                  {t('Friends')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena">
                  <img src="/images/icons/podium.webp" alt="" />
                  {t('Arena')}
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}
