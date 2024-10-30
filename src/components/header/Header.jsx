import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    let userInfo =  undefined;
    try {
        // if (userInfo && userInfo != undefined) {
        //     userInfo = JSON.parse(userInfo);
        // }
        
    } catch (error) {
        console.error('Error fetching user info:', error);
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
                <Link to="/settings">
                    <img src="/images/icons/setting.webp" alt="setting" lazyload="true" />
                </Link>
            </div>
        </header>
    );
}
