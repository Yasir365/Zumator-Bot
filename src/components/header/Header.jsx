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
            .catch(err => console.error(err));
    }, []);

    return (
        <header className="user-header">
            <div className="profile-container">
                <img src='/images/profile.webp' alt="img" lazyload="true" />
                {userInfo ? (
                    <>
                        <p className="title">
                            {userInfo.firstName} {userInfo.lastName} <small>(Conqueror)</small>
                        </p>
                    </>
                ) : (
                    <div className='profile-container'>
                        <p className="title">Jane Cooper (CEO)</p>
                    </div>
                )}
            </div>
            <div className="setting">
                <Link to="/settings">
                    <img src="/images/icons/setting.webp" alt="setting" />
                </Link>
            </div>
        </header>
    );
}
