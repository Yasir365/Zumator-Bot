import './header.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserInfo } from '../../services/telegram.service';

export default function Header() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        fetchUserInfo()
            .then(info => {
                setUserInfo(info);
            })
            .catch(err => setError(err));
    }, []);

    return (
        <header className="user-header">
            <div className="profile-container">
                {userInfo ? (
                    <>
                        <img src={userInfo.photoUrl} alt="img" lazyload="true" />
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
