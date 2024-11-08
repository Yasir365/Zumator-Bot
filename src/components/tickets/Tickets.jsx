import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';

export default function Tickets() {
    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    const [date] = useState(new Date());
    const [formattedDate] = useState(moment(date).format('hh:mm:ss'));

    return (
        <>
            <p>{t('Tickets')}</p>
            <p>{userInfo ? userInfo.tickets : 10}/10</p>
            <div className="d-flex align-items-center justify-content-between">
                <img src="/images/icons/clock.webp" alt="clock" lazyLoad={true} />
                <span>{formattedDate}</span>
            </div>
            <div className="progress-container">
                <button className='claim'>{t('Claim')}</button>
            </div>
        </>
    )
}
