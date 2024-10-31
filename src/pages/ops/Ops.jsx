import './ops.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from '../../components/header/Header';
import { opsData, gradients } from '../../services/data.service';
import { Rating } from 'react-simple-star-rating'


export default function Ops() {
  const [date] = useState(new Date());
  const [activeTab, setActiveTab] = useState('web3');
  const { tab1Data, tab2Data, tab3Data, tab4Data } = opsData
  const [formattedDate, setFormattedDate] = useState(moment(date).format('hh:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(moment().format('hh:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let previous = localStorage.getItem('collect-coins');
    const currentTime = new Date().getTime();

    if (!previous || (currentTime - previous) > (24 * 60 * 60 * 1000)) {
      let a = document.querySelector('#mistery-box-btn');
      a?.click();
    }
  }, []);


  const collectCoins = () => {
    localStorage.setItem('collect-coins', new Date().getTime())
    swalToastr('success', 'Coins collected successfully')
  }

  return (
    <div className="ops-page">
      <Header />

      <div className="daily-combo">
        <div className="header d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <p className="title">Mystery Ops</p>
            <Rating initialValue={2} readonly={true} size={13} emptyColor="#fff" maxValue={4} />
          </div>
          <div className='earning d-flex align-items-between align-items-center'>
            <div className="icon me-2">
              <img className='usdt' src="/images/icons/usdt.webp" alt="usdt" />
            </div>
            <div className="d-flex flex-column">
              <p className='amount'>548,000</p>
              <p className="time">{formattedDate} <img src="/images/icons/info.webp" alt="info" /></p>
            </div>
          </div>
        </div>
        <div className="item-container">
          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.webp" alt="" />
              <img src="/images/icons/coins.webp" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.webp" alt="" />
              <img src="/images/icons/coins.webp" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.webp" alt="" />
              <img src="/images/icons/coins.webp" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="img">
              <img className='question' src="/images/icons/question.webp" alt="" />
              <img src="/images/icons/coins.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <img src="/images/ops/coin-box.webp" alt="" />
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
            {tab1Data.map((item, index) => (
              <div className="item" key={index} style={{ background: gradients[index % gradients.length], }}>
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
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.total}</div>
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
            {tab2Data.map((item, index) => (
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
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.total}</div>
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
            {tab3Data.map((item, index) => (
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
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.total}</div>
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
            {tab4Data.map((item, index) => (
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
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
                  </div>
                  <div className="card-footer mt-2">
                    <p>Lvl 2</p>
                    <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }



      {/* Mystery Box Modal */}
      <button data-bs-toggle="modal" data-bs-target="#misteryBoxModal" id='mistery-box-btn' className='d-none'></button>
      <div className="modal fade" id="misteryBoxModal" aria-labelledby="misteryBoxModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h5>Mystery Ops</h5>
              <img src="/images/ops/mystery-box.webp" alt="" lazyload="true" />
              <button type="button" className="btn" onClick={collectCoins} data-bs-dismiss="modal">Collect Coins</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
