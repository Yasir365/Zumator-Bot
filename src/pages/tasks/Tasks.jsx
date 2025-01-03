import './tasks.scss';
import { useEffect, useState } from 'react';
import FriendsReward from '../../components/friends-reward/FriendsReward';
import NewReward from '../../components/new-reward/NewReward';
import SocialReward from '../../components/social-reward/SocialReward';
import WalletReward from '../../components/wallet-reward/WalletReward';
import { dailyReward, formatTime } from '../../services/util.service';
import toastr from '../../services/toastr.service';
import { useDispatch, useSelector } from "react-redux";
import { claimDailyReward } from '../../services/api.service';
import { saveUser } from '../../store/userInfoSlice';
import { useTranslation } from 'react-i18next';


export default function Tasks() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('new');
  const [isClaimed, setIsClaimed] = useState(true);
  const [remainingTime, setRemainingTime] = useState();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);



  useEffect(() => {
    const calculateRemainingTime = () => {
      if (!userInfo?.last_claim_date_time) {
        setRemainingTime(0);
        setIsClaimed(false);
        return;
      }

      const lastClaimDate = new Date(userInfo.last_claim_date_time);
      const currentDate = new Date();

      const lastClaimDay = new Date(lastClaimDate.getFullYear(), lastClaimDate.getMonth(), lastClaimDate.getDate());
      const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

      if (currentDay > lastClaimDay) {
        setRemainingTime(0);
        setIsClaimed(false);
      } else {
        const nextDayStart = new Date(currentDay);
        nextDayStart.setDate(nextDayStart.getDate() + 1);
        const timeDifference = nextDayStart - currentDate;

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
  };

  return (
    <div className="tasks-page">
      <h3 className='heading'>{t('Complete-Task-to-Earn-Coins')}</h3>

      {
        userInfo.last_claim_day_id != 'Day_30' &&
        <div className="daily-reward d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="img-wrapper">
              <img src='/images/icons/reward.png' alt="" style={{ borderRadius: 0 }} />
            </div>
            <div className="ms-2">
              <p className="head">{t('Daily-Reward')}</p>
              {isClaimed ? (
                <>
                  <p>{t('Can-be-claimed-in')}</p>
                  <p>{formatTime(remainingTime)}</p>
                </>
              ) : (
                <>
                  <p className='title'>{t('Click-to-claim-your-daily-reward')}</p>
                  <p>00:00:00</p>
                </>
              )}
            </div>
          </div>
          <i className={`fa-solid fa-chevron-right ${isClaimed ? 'disabled' : ''}`} data-bs-toggle="modal" data-bs-target="#dailyRewardModal" />
        </div>
      }


      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={activeTab === 'new' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('new')} >
            {t('New')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'onChain' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('onChain')} >
            {t('On-Chain')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'social' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('social')} >
            {t('Socials')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'friends' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('friends')} >
            {t('Friends')}
          </a>
        </li>
      </ul>

      {activeTab === 'new' && (<NewReward />)}
      {activeTab === 'onChain' && (<WalletReward />)}
      {activeTab === 'social' && (<SocialReward />)}
      {activeTab === 'friends' && (<FriendsReward />)}



      {/* Daily Reward Modal */}
      <div className="modal fade-up text-center" id="dailyRewardModal" aria-labelledby="dailyRewardModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h5>{t('Daily-Reward')}</h5>
              <div className="card-wrapper">
                {dailyReward.map((item, index) => (
                  <div key={index} className={`card`} >
                    <div>{item.name}</div>
                    <div className='d-flex justify-content-center'>
                      <img className='m-0' src="/images/icons/usdt.png" alt="" />
                    </div>
                    <div>{item.coins}</div>
                    <button type="button" className="btn btn-success mt-2" onClick={() => handleProceed(item)}>
                      {t('Claim')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
