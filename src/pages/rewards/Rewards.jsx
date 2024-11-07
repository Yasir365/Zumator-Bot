import './rewards.scss';
import { useEffect, useState } from 'react';
import FriendsReward from '../../components/friends-reward/FriendsReward';
import NewReward from '../../components/new-reward/NewReward';
import SocialReward from '../../components/social-reward/SocialReward';
import WalletReward from '../../components/wallet-reward/WalletReward';
import { getRemainingTime, isRewardClaimedToday, setRewardClaimed } from '../../services/data.service';
import swalToastr from '../../services/toastr.service';
import { useDispatch, useSelector } from "react-redux";
import { updatePoints } from '../../services/api.service';


export default function Rewards() {
  const [activeTab, setActiveTab] = useState('new');
  const [isClaimed, setIsClaimed] = useState(isRewardClaimedToday());
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);


  useEffect(() => {
    if (isClaimed) {
      const interval = setInterval(() => {
        setRemainingTime(getRemainingTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isClaimed]);

  const handleClaim = async () => {
    if (!isClaimed) {
      const data = await updatePoints({ _id: userInfo._id, points: 100 });
      console.log(":::::::::::", data);
      
      if (data.success) {
        dispatch(saveUser(data));
        swalToastr('success', 'Daily reward claimed!');
        setRewardClaimed();
        setIsClaimed(true);
        setRemainingTime(getRemainingTime());
      }

    }
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="rewards-page">

      <h3 className='heading'>Complete Task to Earn Coins</h3>

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
