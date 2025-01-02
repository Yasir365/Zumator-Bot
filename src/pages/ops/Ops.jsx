import './ops.scss';
import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from 'react-redux';
import toastr from '../../services/toastr.service';
import { formatNumber, formatTime } from '../../services/util.service';
import OpsCard from '../../components/ops-card/OpsCard';
import { useTranslation } from 'react-i18next';
import { saveUser } from '../../store/userInfoSlice';
import { cliamMysteryBoxes } from '../../services/api.service';



export default function Ops() {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('web3');
  const userInfo = useSelector((state) => state.user.userInfo);
  const [remainingTime, setRemainingTime] = useState(0);


  useEffect(() => {
    const calculateRemainingTime = () => {
      if (!userInfo?.last_mysterybox_claim_at) {
        setRemainingTime(0);
        return;
      }
      const lastClaimDate = new Date(userInfo.last_mysterybox_claim_at);
      const currentDate = new Date();

      // const nextClaimTime = new Date(lastClaimDate.getTime() + 3 * 60 * 60 * 1000);
      const nextClaimTime = new Date(lastClaimDate.getTime() + 5 * 60 * 1000);
      const timeDifference = nextClaimTime - currentDate;
      if (timeDifference <= 0) {
        setRemainingTime(0);
      } else {
        setRemainingTime(timeDifference);
      }
    };

    calculateRemainingTime();

    const interval = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [userInfo]);


  const collectCoins = async () => {
    const resp = await cliamMysteryBoxes({ user_id: userInfo.id });
    if (resp) {
      console.log("cliamMysteryBoxes :: ", resp);
      dispatch(saveUser(resp));
    }
    toastr('success', t('Coins-collected-successfully'))
  }

  return (
    <div className="ops-page">
      <div className="daily-combo">
        <div className="header d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <p className="title">{t('Mystery-Ops')}</p>
            <Rating initialValue={1} readonly={true} size={13} emptyColor="#fff" maxValue={4} iconsCount={4} />
          </div>
          <div className='earning d-flex align-items-between align-items-center'>
            <div className="icon me-2">
              <img className='usdt' src="/images/icons/usdt.png" alt="usdt" />
            </div>
            <div className="d-flex flex-column">
              <p className='amount'>{formatNumber(userInfo.coins)}</p>
              <p className="time">{formatTime(remainingTime)} <img src="/images/icons/info.png" alt="info" /></p>
            </div>
          </div>
        </div>
        <div className="item-container">
          {
            [0, 1, 2, 3].map((item, index) =>
              // <div key={item}>
              //   {userInfo && userInfo.mysterybox_info_detail && userInfo.mysterybox_opened != 0 && userInfo.mysterybox_opened - 1 >= index ? (
              //     <div className="item">
              //       <div className="opened-box">
              //         {userInfo.mysterybox_info_detail[index].reward_type == 'coins' && <img src="/images/icons/coins.png" alt="" className='coins-img'  />}
              //         {userInfo.mysterybox_info_detail[index].reward_type == 'keys' && <img src="/images/icons/key.png" alt="" />}
              //         {userInfo.mysterybox_info_detail[index].reward_type == 'diamonds' && <img src="/images/icons/bonas.png" alt="" />}
              //         <h5 className='text-dark text-center pt-1'>{userInfo.mysterybox_info_detail[item].reward_amount}</h5>
              //       </div>
              //     </div>
              //   ) : userInfo.mysterybox_opened == index && remainingTime == 0 ? (
              //     <div className="item">
              //       <div className="img" data-bs-toggle="modal" data-bs-target="#misteryBoxModal">
              //         <img className='question' src="/images/icons/question.png" alt="" />
              //         <img src="/images/icons/coins.png" alt="" className='coins-img'  />
              //       </div>
              //     </div>
              //   ) : (
              <div className="item">
                <div className="img">
                  <img className='question' src="/images/icons/question.png" alt="" />
                  <div className="coins-img">
                    <img src="/images/icons/coins.png" alt="" />
                  </div>
                </div>
              </div>
              //   )}
              // </div>
            )
          }
        </div>
        <div className="d-flex justify-content-center mt-2">
          <img src="/images/ops/coin-box.webp" alt="" />
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={activeTab === 'web3' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('web3')} >
            {t('Web-3')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'market' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('market')} >
            {t('Market')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'galactic' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('galactic')} >
            {t('Galactic')}
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'artifacts' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveTab('artifacts')} >
            {t('Artifacts')}
          </a>
        </li>
      </ul>

      {activeTab === 'web3' && (<OpsCard pageType="Web 3" />)}
      {activeTab === 'market' && (<OpsCard pageType="Markets" />)}
      {activeTab === 'galactic' && (<OpsCard pageType="Galactic" />)}
      {activeTab === 'artifacts' && (<OpsCard pageType="Artifacts" />)}


      {/* Mystery Box Modal */}
      <div className="modal fade text-center" id="misteryBoxModal" aria-labelledby="misteryBoxModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h5>{t('Mystery-Ops')}</h5>
              <img src="/images/ops/mystery-box.webp" alt="" />
              <button type="button" className="btn" onClick={collectCoins} data-bs-dismiss="modal">{t('Collect-Coins')}</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
