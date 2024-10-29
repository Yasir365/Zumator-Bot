import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Navbar() {
  const { t } = useTranslation();
  let tg;
  if (window.Telegram && window.Telegram.WebApp) {
    tg = window.Telegram.WebApp;
  }

  function updateButton() {
    if (window.Telegram && window.Telegram.WebApp) {
      console.log("window.location.pathname", window.location.pathname);

      // if (window.location.pathname != "OPS" || window.location.pathname != "ship-yard" || window.location.pathname != "friends" ||
      //     window.location.pathname != "arena" || window.location.pathname != "leaderboard" || window.location.pathname != "settings" ||
      //     window.location.pathname != "privacy-policy" || window.location.pathname != "change-language" || window.location.pathname != "rewards"
      // ) {
      if (window.location.pathname == "/") {
        tg.BackButton.hide();
        tg.MainButton.show().setText("Close").onClick(() => {
          tg.close();
        });
      } else {
        tg.MainButton.hide();
        tg.BackButton.show().onClick(() => {
          window.history.back();
        });
      }
    }
  }
  useEffect(() => {
    updateButton();
  }, [window.location.pathname]);

  updateButton();
  window.addEventListener("popstate", updateButton);

  return (
    <header className='user-navbar'>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav d-flex flex-row justify-content-evenly">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/" onClick={updateButton}>
                  <img src="/images/icons/frog.webp" alt="" lazyload="true" />
                  Base
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS" onClick={updateButton}>
                  <img src="/images/icons/gaming.webp" alt="" lazyload="true" />
                  Ops
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ship-yard" onClick={updateButton}>
                  <img src="/images/icons/shipyard.webp" alt="" lazyload="true" />
                  {t('shipYard')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends" onClick={updateButton}>
                  <img src="/images/icons/friends.webp" alt="" lazyload="true" />
                  Friends
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena" onClick={updateButton}>
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
