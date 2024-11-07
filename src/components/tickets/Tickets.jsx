import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Tickets() {
    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    return (
        <div>
            <p>{t('Tickets')}</p>
            <span>{userInfo ? userInfo.tickets : 10}/10</span>
        </div>
    )
}
