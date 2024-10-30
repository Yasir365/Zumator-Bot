import './header.scss';
import { Link } from 'react-router-dom';
import { updateCloseButton } from '../../services/api.service';

export default function Header() {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    return (
        <header className="user-header">
            <div className="d-flex align-items-center">
                <img src='/images/profile.webp' alt="img" lazyload="true" />
                {userInfo ? (
                    <>
                        <p className="title"> {userInfo.first_name} {userInfo.last_name} <small>(Conqueror)</small> </p>
                    </>
                ) : (
                    <p className="title">Jane Cooper <small>(CEO)</small></p>
                )}
            </div>
            <div className="setting">
                <Link to="/settings" onClick={updateCloseButton('other')}>
                    <img src="/images/icons/setting.webp" alt="setting" lazyload="true" />
                </Link>
            </div>
        </header>
    );
}
