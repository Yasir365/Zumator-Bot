import './rewards.scss';
import { useState } from 'react';
import FriendsReward from '../../components/friends-reward/Friends-reward';
import NewReward from '../../components/new-reward/New-Reward';
import SocialReward from '../../components/social-reward/Social-Reward';
import WalletReward from '../../components/wallet-reward/Wallet-Reward';

export default function Rewards() {
  const [activeTab, setActiveTab] = useState('new');


  return (
    <div className="rewards-page">

      <h3 className='heading'>Complete Task to Earn Coins</h3>

      <div className="daily-reward d-flex justify-content-between align-items-center">
        <div className='d-flex'>
          <img src='/images/friends/reward.webp' alt="" style={{ borderRadius: 0 }} />
          <div className='ms-2'>
            <p className="head"> Daily Reward</p>
            <p>Can be claim in</p>
            <p>16:26:59</p>
          </div>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

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
