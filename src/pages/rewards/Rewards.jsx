import './rewards.scss';
import { useState } from 'react';
import { rewardData } from '../../services/data.service';

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

      {
        activeTab === 'new' && (
          <div className="tab-content">
            {rewardData.new.map((item, index) => (
              <div className='w-100' key={index}>
                <div className="d-flex justify-content-between align-items-center pb-1">
                  <div className='d-flex align-items-center'>
                    <img src={item.image} alt="" />
                    <div className='ms-2'>
                      <p className='bold'>{item.title}</p>
                      <p className='small'><img src="/images/icons/bonas.webp" alt="" /> +{item.score}</p>

                    </div>
                  </div>

                  <button className="start">Start</button>
                </div>
                {index !== rewardData.new.length - 1 && (<hr />)}
              </div>
            ))}
          </div>
        )
      }


      {
        activeTab === 'onChain' && (
          <div className="tab-content">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/wallet.webp" alt="" />
                <span className='bold ms-2'>Connect to Wallet</span>
              </div>

              <button className="start">Start</button>
            </div>
          </div>
        )
      }


      {
        activeTab === 'social' && (
          <div className="tab-content">
            {rewardData.social.map((item, index) => (
              <div className='w-100' key={index}>
                <div className="d-flex justify-content-between align-items-center pb-1">
                  <div className='d-flex align-items-center'>
                    <img src={item.image} alt="" />
                    <div className='ms-2'>
                      <p className='bold'>{item.title}</p>
                      <p className='small'><img src="/images/icons/bonas.webp" alt="" /> +{item.score}</p>

                    </div>
                  </div>

                  <button className="start">Start</button>
                </div>
                {index !== rewardData.social.length - 1 && (<hr />)}
              </div>
            ))}
          </div>
        )
      }


      {
        activeTab === 'friends' && (
          <div className="tab-content">
            {rewardData.friends.map((item, index) => (
              <div className='w-100' key={index}>
                <div className="d-flex justify-content-between align-items-center pb-1">
                  <div className='d-flex align-items-center'>
                    <img src={item.image} alt="" />
                    <div className='ms-2'>
                      <p className='bold'>{item.title}</p>
                      <p className='small'><img src="/images/icons/bonas.webp" alt="" /> +{item.score}</p>

                    </div>
                  </div>

                  <button className="start">Start</button>
                </div>
                {index !== rewardData.friends.length - 1 && (<hr />)}
              </div>
            ))}
          </div>
        )
      }

    </div>
  );
}
