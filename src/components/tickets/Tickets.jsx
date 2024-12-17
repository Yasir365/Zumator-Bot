import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatTime } from '../../services/util.service';
import { cliamTicket } from '../../services/api.service';
import toastr from '../../services/toastr.service';
import { saveUser } from '../../store/userInfoSlice';

export default function Tickets() {
    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();
    const [isClaimed, setIsClaimed] = useState(true);
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const calculateRemainingTime = () => {
            if (!userInfo?.last_ticket_claim_at) {
                setRemainingTime(0);
                setIsClaimed(false);
                return;
            }

            const lastClaimDate = new Date(userInfo.last_ticket_claim_at);
            const currentDate = new Date();

            const nextClaimTime = new Date(lastClaimDate.getTime() + 3 * 60 * 60 * 1000);
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

    const handleClaim = async () => {
        if (!isClaimed) {
            const res = await cliamTicket({ user_id: userInfo.id });
            dispatch(saveUser(res));
            toastr('Success', 'Ticket Cliamed Successfully');
        }
    };

    return (
        <>
            <p>{t('Tickets')}</p>
            <p>{userInfo ? userInfo.tickets : 10}/10</p>
            <div className="d-flex align-items-center justify-content-between">
                <img src="/images/icons/clock.webp" alt="clock" />
                <span>{formatTime(remainingTime)}</span>
            </div>
            <div className="progress-container">
                <button className='claim' onClick={handleClaim} disabled={isClaimed} > {t('Claim')} </button>
            </div>
        </>
    )
}
