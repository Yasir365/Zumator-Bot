import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();

            const user = window.Telegram.WebApp.initDataUnsafe?.user;

            if (user) {
                setUserInfo({
                    firstName: user.first_name,
                    lastName: user.last_name,
                    userId: user.id,
                    photoUrl: user.photo_url
                });
                console.log('User info:', user);
            } else {
                console.log('User info not available');
            }
        } else {
            console.error('Telegram WebApp SDK is not available');
        }
    }, []);

    return (
        <header className="user-header">
            <div className="profile-container">
                {userInfo ? (
                    <>
                        <img src={userInfo.photoUrl} alt="" lazyload="true" />
                        <p className="title">
                            {userInfo.firstName} {userInfo.lastName} <small>(Conqueror)</small>
                        </p>
                    </>
                ) : (
                    <p>Loading user info...</p>
                )}
            </div>
            <div className="setting">
                <Link to="/settings">
                    <img src="/images/icons/setting.png" alt="setting" />
                </Link>
            </div>
        </header>
    );
}
