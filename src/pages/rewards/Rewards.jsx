import './rewards.scss';
import { useEffect, useState } from 'react';
import FriendsReward from '../../components/friends-reward/FriendsReward';
import NewReward from '../../components/new-reward/NewReward';
import SocialReward from '../../components/social-reward/SocialReward';
import WalletReward from '../../components/wallet-reward/WalletReward';
import { getRemainingTime, isRewardClaimedToday, formatTime } from '../../services/util.service';
import toastr from '../../services/toastr.service';
import { useDispatch, useSelector } from "react-redux";
import { claimDailyReward } from '../../services/api.service';
import { saveUser } from '../../store/userInfoSlice';


export default function Rewards() {
  const [activeTab, setActiveTab] = useState('new');
  const [isClaimed, setIsClaimed] = useState(isRewardClaimedToday());
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
      const nextClaimDate = new Date(lastClaimDate);
      nextClaimDate.setDate(lastClaimDate.getDate() + 1);

      const timeDifference = nextClaimDate - currentDate;

      if (timeDifference > 0) {
        setRemainingTime(timeDifference);
        setIsClaimed(true);
      } else {
        setRemainingTime(0);
        setIsClaimed(false);
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
      const params = {
        user_id: userInfo.id,
      };
      const data = await claimDailyReward(params);

      if (data) {
        dispatch(saveUser(data));
        toastr('success', 'Daily reward claimed!');
        setIsClaimed(true);
        setRemainingTime(24 * 60 * 60 * 1000);
      }
    }
  };


  return (
    <div className="rewards-page">

      <h3 className='heading'>Complete Task to Earn Coins</h3>

      {
        userInfo.last_claim_day_id != 'Day_30' &&
        <div className="daily-reward d-flex justify-content-between align-items-center" onClick={handleClaim}>
          <div className="d-flex">
            <img src='/images/friends/reward.webp' alt="" style={{ borderRadius: 0 }} />
            <div className="ms-2">
              <p className="head">Daily Reward</p>
              {isClaimed ? (
                <>
                  <p>Can be claimed in</p>
                  <p>{formatTime(remainingTime)}</p>
                </>
              ) : (
                <>
                  <p>Click to claim your daily reward!</p>
                  <p>00:00:00</p>
                </>
              )}
            </div>
          </div>
          <i className={`fa-solid fa-chevron-right ${isClaimed ? 'disabled' : ''}`} />
        </div>
      }

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={activeTab === 'new' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('new')} >
            New
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'onChain' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('onChain')} >
            On Chain
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'social' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('social')} >
            Socials
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'friends' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('friends')} >
            Friends
          </a>
        </li>
      </ul>

      {activeTab === 'new' && (<NewReward />)}
      {activeTab === 'onChain' && (<WalletReward />)}
      {activeTab === 'social' && (<SocialReward />)}
      {activeTab === 'friends' && (<FriendsReward />)}
    </div>
  );
}
