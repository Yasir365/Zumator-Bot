import './ops.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from '../../components/header/Header';
import { Rating } from 'react-simple-star-rating'
import Artifacts from '../../components/artifacts/Artifacts';
import Galactic from '../../components/galactic/Galactic';
import Market from '../../components/market/Market';
import Web3 from '../../components/web3/Web3';
import { useSelector } from 'react-redux';
import { getRemainingTime, formatTime } from '../../services/data.service';


export default function Ops() {
  const [date] = useState(new Date());
  const [activeTab, setActiveTab] = useState('web3');
  const [formattedDate, setFormattedDate] = useState(moment(date).format('hh:mm:ss'));
  const userInfo = useSelector((state) => state.user.userInfo);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

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
              <p className='amount'>{userInfo ? userInfo.points : 0.00000}</p>
              <p className="time">{formatTime(remainingTime)} <img src="/images/icons/info.webp" alt="info" /></p>
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

      {activeTab === 'web3' && (<Web3 />)}

      {activeTab === 'market' && (<Market />)}

      {activeTab === 'galactic' && (<Galactic />)}

      {activeTab === 'artifacts' && (<Artifacts />)}



      {/* Mystery Box Modal */}
      <button data-bs-toggle="modal" data-bs-target="#misteryBoxModal" id='mistery-box-btn' className='d-none'></button>
      <div className="modal fade text-center" id="misteryBoxModal" aria-labelledby="misteryBoxModalLabel" aria-hidden="true">
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
