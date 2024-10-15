import './ops.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from '../../components/header/Header';
import { tab1Data, tab2Data, tab3Data, tab4Data } from '../../services/data.service';


const count = +localStorage.getItem('count') || 0;


export default function Ops() {
  const [date] = useState(new Date());
  const [activeTab, setActiveTab] = useState('web3');
  const tab1data = tab1Data
  const tab2data = tab2Data
  const tab3data = tab3Data
  const tab4data = tab4Data
  const [formattedDate, setFormattedDate] = useState(moment(date).format('mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(moment().format('mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ops-page">
      <Header />

      <div className="daily-combo">
        <p className="time">{formattedDate} <img src="/images/icons/info.png" alt="info" /></p>

        <div className="header d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <p className="title">Daily Combo</p>
            <img src="/images/icons/star.png" alt="" />
          </div>
          <div className='earning d-flex align-items-between align-items-center'>
            <img src="/images/icons/usdt.png" alt="usdt" />
            <p className="value">{count / 10000}</p>
          </div>
        </div>
        <div className="item-container">
          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.png" alt="" />
              <img src="/images/icons/coins.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.png" alt="" />
              <img src="/images/icons/coins.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.png" alt="" />
              <img src="/images/icons/coins.png" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.png" alt="" />
              <img src="/images/icons/coins.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={activeTab === 'web3' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('web3')} >
            Web 3
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'market' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('market')} >
            Market
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'galactic' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('galactic')} >
            Galactic
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'artifacts' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('artifacts')} >
            Artifacts
          </a>
        </li>
      </ul>

      {
        activeTab === 'web3' && (
          <div className="tab-content d-flex">
            {tab1data.map((item, index) => (
              <div className="item" key={index}>
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-info">
                  <div className='d-flex justify-content-between'>
                    <div className="title">Zumator</div>
                    <div className="value">{item.num}</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className="profit">Profit per hour</div>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

      {
        activeTab === 'market' && (
          <div className="tab-content d-flex">
            {tab2data.map((item, index) => (
              <div className="item" key={index}>
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-info">
                  <div className='d-flex justify-content-between'>
                    <div className="title">Zumator</div>
                    <div className="value">{item.num}</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className="profit">Profit per hour</div>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

      {
        activeTab === 'galactic' && (
          <div className="tab-content d-flex">
            {tab3data.map((item, index) => (
              <div className="item" key={index}>
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-info">
                  <div className='d-flex justify-content-between'>
                    <div className="title">Zumator</div>
                    <div className="value">{item.num}</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <div className="profit">Profit per hour</div>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

      {
        activeTab === 'artifacts' && (
          <div className="tab-content d-flex">
            {tab4data.map((item, index) => (
              <div className="item" key={index}>
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="card-info">
                  <div className='d-flex justify-content-between'>
                    <div className="title">Zumator</div>
                    <div className="value">{item.num}</div>
                  </div>
                  <div className='mt-2 d-flex justify-content-between'>
                    <div className="profit">Profit per hour</div>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer mt-2">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }

    </div>
  );
}
