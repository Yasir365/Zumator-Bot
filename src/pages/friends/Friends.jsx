import './friends.scss'
import { friendsData } from '../../services/data.service';
import { handleInviteClick, getInvitedFriends, generateInviteLink } from '../../services/api.service';
import { useEffect, useState } from 'react';
import swalToastr from '../../services/toastr.service';

export default function Friends() {
  const ref = localStorage.getItem('ref');
  const [invitedFriends, setInvitedFriends] = useState([]);

  useEffect(() => {
    setInvitedFriends(getInvitedFriends())
  }, [])

  const copyLink = () => {
    swalToastr('success', 'Link copied to clipboard')
    navigator.clipboard.writeText(generateInviteLink())
  }

  return (
    <div className='firends-page'>
      <h3 className='heading'>Invite Friends</h3>
      <h6 className="sub-heading">You and your friends will get bonuses</h6>

      <div className="item mt-4">
        <div className="card-info">
          <div className="card-image">
            <img src='/images/friends/reward.webp' alt="" style={{ borderRadius: 0 }} />
          </div>
          <div className='reward'>
            <div className="title">Invite a friend</div>
            <div className="value"><img src="/images/icons/bonas.webp" alt="" /> <span className='warn'>+0.1 </span> for you and your friend </div>
          </div>
        </div>
      </div>

      <div className="item mt-4">
        <div className="card-info">
          <div className="card-image">
            <img src='/images/friends/reward.webp' alt="" style={{ borderRadius: 0 }} />
          </div>
          <div className='reward'>
            <div className="title">Invite a friend with Telegram Premium</div>
            <div className="value"><img src="/images/icons/bonas.webp" alt="" /> <span className='warn'>+0.3 </span> for you and your friend </div>
          </div>
        </div>
      </div>

      {ref && (
        <div className="item mt-4 d-flex justify-content-center">
          <p>Your are already a referral, invited by <span className="warn">{ref}</span></p>
        </div>
      )}

      <div className="card-container">
        <div className="tab-content d-flex">
          <h6>List of your Friends</h6>
          {friendsData.length == 0 &&
            <div className="item mt-4 d-flex justify-content-center">
              <p>You haven’t invited anyone yet</p>
            </div>
          }
          {friendsData.length > 0 && friendsData.map((item, index) => (
            <div className="item" key={index}>
              <div className="card-info">
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className='user'>
                  <div className="title">{item.title}</div>
                  <div className="value">Level {item.lvl}</div>
                </div>
              </div>
              <div className='profit'>
                <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button-container">
        <button className='invite' onClick={handleInviteClick}>Send Invite</button>
        <button className='copy' onClick={copyLink}><i className="fa-regular fa-copy"></i></button>
      </div>
    </div>
  )
}
