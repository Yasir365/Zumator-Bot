import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Ensure that the code runs only when the app is opened in Telegram
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready(); // Initialize the Web App

            // Get the user's info
            const user = window.Telegram.WebApp.initDataUnsafe?.user;

            // Check if user info exists
            if (user) {
                setUserInfo({
                    firstName: user.first_name,
                    lastName: user.last_name,
                    username: user.username,
                    userId: user.id,
                });
                console.log('User info:', user); // Debugging: Log user info
            } else {
                console.error('User info not available');
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
                        <img src="/images/profile.png" alt="profile" />
                        <p className="title">
                            {userInfo.firstName} {userInfo.lastName} ({userInfo.username})
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
