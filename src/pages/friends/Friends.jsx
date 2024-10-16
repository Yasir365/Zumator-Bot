import './friends.scss'
import { friendsData } from '../../services/data.service';

export default function Friends() {
  const friends = friendsData
  return (
    <div className='firends-page'>
      <h3 className='heading'>Invite Friends</h3>
      <h6 className="sub-heading">You and your friends will get bonuses</h6>
      <div className='d-flex justify-content-center'>
        <button className='send-invite'>Send Invite</button>
      </div>

      <div className="item mt-4">
        <div className="card-info">
          <div className="card-image">
            <img src='/images/friends/reward.png' alt="" style={{borderRadius:0}} />
          </div>
          <div className='reward'>
            <div className="title">Invite a friend</div>
            <div className="value"><img src="/images/friends/reward2.png" alt="" /> <p>+0.1 </p> for you and your friend </div>
          </div>
        </div>
      </div>

      <div className="item mt-4">
        <div className="card-info">
          <div className="card-image">
            <img src='/images/friends/reward.png' alt="" style={{borderRadius:0}} />
          </div>
          <div className='reward'>
            <div className="title">Invite a friend with Telegram Premium</div>
            <div className="value"><img src="/images/friends/reward2.png" alt="" /> <p>+0.3 </p> for you and your friend </div>
          </div>
        </div>
      </div>


      <div className="card-container">
        <div className="tab-content d-flex">
          <h6>List of your Friends</h6>
          {friends.length == 0 &&
            <div className="item mt-4 d-flex justify-content-center">
              <p>You haven’t invited anyone yet</p>
            </div>
          }
          {friends.length > 0 && friends.map((item, index) => (
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
                <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button-container">
          <button className='invite'>Send Invite</button>
          <button className='copy'><i class="fa-regular fa-copy"></i></button>
      </div>
    </div>
  )
}
