import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar() {
  return (
    <header className='user-navbar'>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/">
                  <img src="/images/nav-icon/frog.png" alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/OPS">
                  <img src="/images/nav-icon/gaming.png" alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ship-yard">
                  <img src="/images/nav-icon/shipyard.png" alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends">
                  <img src="/images/nav-icon/friends.png" alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/money">
                  <img src="/images/nav-icon/money.png" alt="" />
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}
