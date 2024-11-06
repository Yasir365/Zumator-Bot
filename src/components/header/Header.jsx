import './header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Header() {
    const { t } = useTranslation();

    const userInfo = useSelector((state) => state.user.userInfo);
    // console.log("User Info From Store ::::::: ", userInfo);


    return (
        <header className="user-header">
            <div className="d-flex align-items-center">
                <img src='/images/profile.webp' alt="img" loading="lazy" />
                {userInfo && userInfo.user ? (
                    <>
                        <p className="title">
                            {userInfo.user.first_name} {userInfo.user.last_name}
                            <small>({t('conqueror')})</small>
                        </p>
                    </>
                ) : (
                    <p className="title">Jane Cooper <small>(CEO)</small></p>
                )}
            </div>
            <div className="setting">
                <Link to="/settings">
                    <img src="/images/icons/setting.webp" alt="setting" loading="lazy" />
                </Link>
            </div>
        </header>
    );
}
