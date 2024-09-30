import './header.scss'
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        const navbarToggler = document.getElementById('navbarToggler');
        const navbarButtons = document.querySelectorAll('.nav-link');

        navbarButtons.forEach(button => {
            button.addEventListener('click', () => {
                navbarToggler.classList.remove('show');
            });
        });
    }, []);
    return (
        <header className='user-header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src='/images/logo.ico' alt="Nav Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" >
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/"> Base </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/ops"> Ops </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/air-drop"> Air Drop </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/friends"> Friends </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/arena"> Arena </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
