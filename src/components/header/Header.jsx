import './header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Header() {
    const { t } = useTranslation();

    const userInfo = useSelector((state) => state.user.userInfo);

    return (
        <>
            <header className="user-header">
                <div className="d-flex align-items-center">
                    <Link to="/skins">
                        <img src='/images/profile.webp' alt="img" loading="lazy" />
                    </Link>
                    {userInfo ? (
                        <>
                            <p className="title">
                                {userInfo.first_name} {userInfo.last_name}
                                <small>({t('conqueror')})</small>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="title">Jane Cooper <small>(CEO)</small></p>
                        </>
                    )}
                </div>
                <div className="setting">
                    <Link to="/settings">
                        <img src="/images/icons/setting.webp" alt="setting" loading="lazy" />
                    </Link>
                </div>
            </header>
        </>
    );
}
