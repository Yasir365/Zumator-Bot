import './header.scss';
import { Link } from 'react-router-dom';
import { updateCloseButton } from '../../services/api.service';

export default function Header() {
    let userInfo = localStorage.getItem('userInfo') || undefined;
    if (userInfo != undefined) {
        userInfo = JSON.parse(userInfo);
    }

    return (
        <header className="user-header">
            <div className="d-flex align-items-center">
                <img src='/images/profile.webp' alt="img" lazyload="true" />
                {userInfo != undefined && userInfo.user ? (
                    <>
                        <p className="title"> {userInfo.user.first_name} {userInfo.user.last_name} <small>(Conqueror)</small> </p>
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
