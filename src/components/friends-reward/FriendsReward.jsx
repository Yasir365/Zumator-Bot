import { rewardData } from '../../services/util.service';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getInviteFriendsTask, cliamFriendsReward } from "../../services/api.service";
import toastr from '../../services/toastr.service';
import { saveUser } from "../../store/userInfoSlice";
import { useTranslation } from 'react-i18next';


export default function FriendsReward() {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const [fetchloader, setFetchLoader] = useState(false);
    const dispatch = useDispatch();

    const getData = async () => {
        setFetchLoader(true);
        const res = await getInviteFriendsTask({ user_id: userInfo.id })
        if (res) {

        }
        setData(res)
        setFetchLoader(false);
    }
    useEffect(() => {
        getData()
    }, [])


    const claimReward = async (id) => {
        const res = await cliamFriendsReward({ friend_invitation_reward_id: id, user_id: userInfo.id })
        toastr('success', t('Reward-Claimed-Successfully'))
        getData()
        dispatch(saveUser(res));
    }

    return (
        <>
            {!fetchloader && data.length == 0 && <div className="api-loader"><h5 className="text-white">No Data Found</h5></div>}
            {!fetchloader && data.length > 0 &&
                <div className="tab-content">
                    {data.map((item, index) => (
                        <div className='w-100' key={index}>
                            <div className="d-flex justify-content-between align-items-center pb-1">
                                <div className='d-flex align-items-center'>
                                    <img src="images/icons/friends.png" alt="" />
                                    <div className='ms-2'>
                                        <p className='bold'>{item.title}</p>
                                        <p className='small'><img src="/images/icons/usdt.png" alt="" /> +{item.coins}</p>
                                    </div>
                                </div>

                                <button className={!item.is_ready_to_claim || item.is_claimed ? "start disable" : "start"} disabled={!item.is_ready_to_claim || item.is_claimed} onClick={() => claimReward(item.id)}>{t('Claim')}</button>
                            </div>
                            {index !== data.length - 1 && (<hr />)}
                        </div>
                    ))}
                </div>
            }
            {fetchloader && <div className="api-loader"><div className="spinner-border" role="status"></div></div>}
        </>

    )
}
