import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { dailyReward } from "../../services/util.service";

export default function DailyMissionBoard() {
  const { t } = useTranslation();
  return (
    <div className="daily-board">
      <h4>{t("Daily-Mission-Board")}</h4>
      <div className="item-container">
        <Link to="/ops" className="item">
          <div className="img">
            <img src="/images/avatars/1.png" alt="img" />
          </div>
          <p>{t("Combo")}</p>
        </Link>

        <div className="item" data-bs-toggle="modal" data-bs-target="#dailyRewardModal">
          <div className="img">
            <img src="/images/avatars/3.png" alt="img" />
          </div>
          <p>{t("Reward")}</p>
        </div>

        <Link to="/tasks" className="item">
          <div className="img">
            <img src="/images/avatars/4.png" alt="img" />
          </div>
          <p>{t("Task")}</p>
        </Link>
      </div>



      {/* Daily Reward Modal */}
      <div className="modal fade-up text-center" id="dailyRewardModal" aria-labelledby="dailyRewardModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
              <h5>{t('Daily-Reward')}</h5>
              <div className="card-wrapper">
                {dailyReward.map((pack, index) => (
                  <div key={index} className={`card`} >
                    <div className='d-flex justify-content-center'>
                      <img src="/images/icons/bonas.png" alt="" />
                    </div>
                    <p className="text-center">{pack.diamonds} {t('Diamonds')} = ${pack.price}</p>
                    <button type="button" className="btn btn-success mt-2" onClick={() => handleProceed(pack)}>
                      {t('Buy')}
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { formatTime } from '../../services/util.service';
// import toastr from '../../services/toastr.service';
// import { useDispatch, useSelector } from "react-redux";
// import { claimDailyReward } from '../../services/api.service';
// import { saveUser } from '../../store/userInfoSlice';



// const [isClaimed, setIsClaimed] = useState(true);
// const dispatch = useDispatch();
// const userInfo = useSelector((state) => state.user.userInfo);
// const [remainingTime, setRemainingTime] = useState();



// useEffect(() => {
//   const calculateRemainingTime = () => {
//     if (!userInfo?.last_claim_date_time) {
//       setRemainingTime(0);
//       setIsClaimed(false);
//       return;
//     }

//     const lastClaimDate = new Date(userInfo.last_claim_date_time);
//     const currentDate = new Date();

//     const lastClaimDay = new Date(lastClaimDate.getFullYear(), lastClaimDate.getMonth(), lastClaimDate.getDate());
//     const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

//     if (currentDay > lastClaimDay) {
//       setRemainingTime(0);
//       setIsClaimed(false);
//     } else {
//       const nextDayStart = new Date(currentDay);
//       nextDayStart.setDate(nextDayStart.getDate() + 1);
//       const timeDifference = nextDayStart - currentDate;

//       setRemainingTime(timeDifference);
//       setIsClaimed(true);
//     }
//   };

//   calculateRemainingTime();

//   const interval = setInterval(() => {
//     calculateRemainingTime();
//   }, 1000);

//   return () => clearInterval(interval);
// }, [userInfo]);



// const handleClaim = async () => {
//     if (!isClaimed) {
//       const params = {
//         user_id: userInfo.id,
//       };

//       const data = await claimDailyReward(params);
//       if (data) {
//         dispatch(saveUser(data));
//         toastr('success', t('Daily-reward-claimed!'));

//         setIsClaimed(true);
//         const nextDayStart = new Date();
//         nextDayStart.setHours(24, 0, 0, 0);
//         const timeDifference = nextDayStart - new Date();
//         setRemainingTime(timeDifference);
//       }
//     }
//   };


// {
//   userInfo.last_claim_day_id != 'Day_30' &&
//   <div className="daily-reward d-flex justify-content-between align-items-center" onClick={handleClaim}>
//     <div className="d-flex">
//       <img src='/images/icons/reward.png' alt="" style={{ borderRadius: 0 }} />
//       <div className="ms-2">
//         <p className="head">{t('Daily-Reward')}</p>
//         {isClaimed ? (
//           <>
//             <p>{t('Can-be-claimed-in')}</p>
//             <p>{formatTime(remainingTime)}</p>
//           </>
//         ) : (
//           <>
//             <p>{t('Click-to-claim-your-daily-reward')}</p>
//             <p>00:00:00</p>
//           </>
//         )}
//       </div>
//     </div>
//     <i className={`fa-solid fa-chevron-right ${isClaimed ? 'disabled' : ''}`} />
//   </div>
// }