import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeRoute, setActiveRoute] = useState('/');
  const { t } = useTranslation();
  let tg;
  if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
  }

  function updateButton() {
    if (window.Telegram && window.Telegram.WebApp) {

      if (activeRoute == '/') {
        tg.BackButton.hide();
        tg.CloseButton.show().setText("Close").onClick(() => {
          tg.close();
        });
      } else {
        tg.CloseButton.hide();
        tg.BackButton.show().onClick(() => {
          window.history.back();
        });
      }
    }
  }

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      tg.BackButton.hide();
      tg.CloseButton.show().setText("Close").onClick(() => {
        tg.close();
      });
    }
  }, [])

  useEffect(() => {
    updateButton();
  }, [activeRoute]);

  return (
    <header className='user-navbar'>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav d-flex flex-row justify-content-evenly">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/" onClick={() => setActiveRoute('/')}>
                  <img src="/images/icons/frog.webp" alt="" lazyload="true" />
                  Base
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS" onClick={() => setActiveRoute('other')}>
                  <img src="/images/icons/gaming.webp" alt="" lazyload="true" />
                  Ops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ship-yard" onClick={() => setActiveRoute('other')}>
                  <img src="/images/icons/shipyard.webp" alt="" lazyload="true" />
                  {t('shipYard')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends" onClick={() => setActiveRoute('other')}>
                  <img src="/images/icons/friends.webp" alt="" lazyload="true" />
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena" onClick={() => setActiveRoute('other')}>
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
