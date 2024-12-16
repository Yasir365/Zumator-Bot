import './friends.scss'
import { getInvitedFriends, getReferal } from '../../services/api.service';
import { handleInviteClick, generateInviteLink, formatNumber } from '../../services/util.service';
import { useEffect, useState } from 'react';
import toastr from '../../services/toastr.service';
import { useSelector } from 'react-redux';

export default function Friends() {
  const [ref, setRef] = useState('');
  const [invitedFriends, setInvitedFriends] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const fetchReferralData = async () => {
      try {
        const data = await getReferal({ id: userInfo.id })
        if (data) {
          setRef(data);
        }
        const data2 = await getInvitedFriends({ telegram_id: userInfo.telegram_id })
        if (data2) {
          setInvitedFriends(data2);
        }
      } catch (error) {
        console.error("Error fetching referral data:", error);
      }
    };

    fetchReferralData();
  }, [])
  const copyLink = () => {
    toastr('success', 'Link copied to clipboard')
    navigator.clipboard.writeText(generateInviteLink(userInfo))
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
          {invitedFriends.length == 0 &&
            <div className="item mt-4 d-flex justify-content-center">
              <p>You haven’t invited anyone yet</p>
            </div>
          }
          {invitedFriends.length > 0 && invitedFriends.map((item, index) => (
            <div className="item" key={index}>
              <div className="card-info">
                <div className="card-image">
                  <img src='/images/leaderboard/profile.webp' alt="" />
                </div>
                <div className='user'>
                  <div className="title">{item.first_name + ' ' + item.last_name}</div>
                  <div className="value">Level 1</div>
                </div>
              </div>
              <div className='profit'>
                <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {formatNumber(item.coins)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button-container">
        <button className='invite' onClick={() => handleInviteClick(userInfo)}>Send Invite</button>
        <button className='copy' onClick={copyLink}><i className="fa-regular fa-copy"></i></button>
      </div>
    </div>
  )
}
