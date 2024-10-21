import './rewards.scss';
import { useState } from 'react';


export default function Rewards() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div className="rewards-page">

      <h3 className='heading'>Complete Task to Earn Coins</h3>

      <div className="daily-reward d-flex justify-content-between align-items-center">
        <div className='d-flex'>
          <img src='/images/friends/reward.png' alt="" style={{ borderRadius: 0 }} />
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
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/youtube.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>How to Trade?</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +250</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
            <hr />

            <div className="item d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/youtube.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Crypto Terms</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +250</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
          </div>
        )
      }


      {
        activeTab === 'onChain' && (
          <div className="tab-content">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/wallet.png" alt="" />
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
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/youtube.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Subscribe to YouTube</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +150</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
            <hr />

            <div className="item d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/twitter.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Connect Twitter</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +180</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
            <hr />

            <div className="item d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/instagram.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Follow Instagram</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +200</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
            <hr />

            <div className="item d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/facebook.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Join Facebook</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +130</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>
            <hr />

            <div className="item d-flex justify-content-between align-items-center w-100">
              <div className='d-flex align-items-center'>
                <img src="/images/icons/tiktok.png" alt="" />
                <div className='ms-2'>
                  <p className='bold'>Connect Tiktok</p>
                  <p className='small'><img src="/images/icons/bonas.png" alt="" /> +80</p>

                </div>
              </div>

              <button className="start">Start</button>
            </div>

          </div>
        )
      }


      {
        activeTab === 'friends' && (
          <div className="tab-content">
          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 10 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +50</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          <hr />
          
          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 20 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +100</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          <hr />

          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 30 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +150</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          <hr />

          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 40 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +200</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          <hr />

          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 50 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +250</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          <hr />

          <div className="item d-flex justify-content-between align-items-center w-100">
            <div className='d-flex align-items-center'>
              <img src="/images/icons/friends.png" alt="" />
              <div className='ms-2'>
                <p className='bold'>Invite 60 friends</p>
                <p className='small'><img src="/images/icons/bonas.png" alt="" /> +300</p>
              </div>
            </div>

            <button className="start">Start</button>
          </div>
          
        </div>
        )
      }



    </div>
  );
}
