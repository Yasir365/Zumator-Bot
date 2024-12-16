import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatTime } from '../../services/util.service';
import { cliamTicket } from '../../services/api.service';
import toastr from '../../services/toastr.service';

export default function Tickets() {
    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();
    const [isClaimed, setIsClaimed] = useState(true);
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const calculateRemainingTime = () => {
            if (!userInfo?.last_claim_ticket_time) {
                setRemainingTime(0);
                setIsClaimed(false);
                return;
            }

            const lastClaimDate = new Date(userInfo.last_claim_ticket_time);
            const currentDate = new Date();

            const nextClaimTime = new Date(lastClaimDate.getTime() + 12 * 60 * 60 * 1000);
            const timeDifference = nextClaimTime - currentDate;

            if (timeDifference <= 0) {
                setRemainingTime(0);
                setIsClaimed(false);
            } else {
                setRemainingTime(timeDifference);
                setIsClaimed(true);
            }
        };

        calculateRemainingTime();

        const interval = setInterval(() => {
            calculateRemainingTime();
        }, 1000);

        return () => clearInterval(interval);
    }, [userInfo]);

    const handleClaim = () => {
        if (!isClaimed) {
            const res = cliamTicket({ user_id: userInfo.id });
            toastr.success('Ticket Cliamed Successfully', 'Success');
            dispatch(res);
        }
    };

    return (
        <>
            <p>{t('Tickets')}</p>
            <p>{userInfo ? userInfo.tickets : 10}/10</p>
            <div className="d-flex align-items-center justify-content-between">
                <img src="/images/icons/clock.webp" alt="clock" lazyLoad={true} />
                <span>{formatTime(remainingTime)}</span>
            </div>
            <div className="progress-container">
                <button className='claim' onClick={handleClaim} disabled={isClaimed} > {t('Claim')} </button>
            </div>
        </>
    )
}
