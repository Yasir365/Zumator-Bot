import './friends.scss'
import { friendsData } from '../../services/data.service';

export default function Friends() {
  const friends = friendsData
  return (
    <div className='firends-page'>
      <div className='banner'> </div>

      <h3 className='heading'>Invite Friends</h3>
      <h6 className="sub-heading">You and your friends will get bonuses</h6>
      <div className='d-flex justify-content-center'>
        <button className='send-invite'>Send Invite</button>
      </div>

      <div className="card-container">
        <div className="tab-content d-flex">
          {friends.map((item, index) => (
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

    </div>
  )
}
