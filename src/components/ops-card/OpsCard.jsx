import { getOpsCards, upgradeOpsCard } from "../../services/api.service";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toastr from "../../services/toastr.service";
import { saveUser } from "../../store/userInfoSlice";
import { useTranslation } from 'react-i18next';

export default function OpsCard({ pageType }) {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    const [fetchloader, setFetchLoader] = useState(false);

    const getData = async () => {
        setFetchLoader(true);
        const res = await getOpsCards(pageType, userInfo.id)
        setData(res)
        setFetchLoader(false);
    }
    useEffect(() => {
        getData()
    }, [])


    const upgradeCard = async (item) => {
        const method = item.card_level[item.user_level_no - 1].method_of_unlocking_payment;
        const price = item.card_level[item.user_level_no - 1].cost_of_purchase_unlocking;

        if (method == 'COINS' && price > userInfo.coins) {
            toastr('error', t('Not-enough-coins'))
            return
        } else if (method == 'DIAMONDS' && price > userInfo.diamonds) {
            toastr('error', t('Not-enough-diamonds'))
            return
        }
        const params = {
            user_id: userInfo.id,
            card_id: item.id
        }
        const res = await upgradeOpsCard(params)
        dispatch(saveUser(res));
        getData()
        toastr('success', t('Card-Upgrade-Successfully'))
    }

    const calculateUnlockPrice = (item) => {
        const basePrice = item.cost_of_purchase_unlocking;
        const increasePercentage = item.upgrade_percentage_cost / 100;
        const cardLevel = item.user_level_no;

        return basePrice * Math.pow(1 + increasePercentage, cardLevel);
    };

    return (
        <div className="tab-content d-flex">
            {!fetchloader && data.length == 0 && <div className="api-loader"><h5 className="text-white">No Data Found</h5></div>}
            {!fetchloader && data.map((item, index) => (
                <div className="item" key={index} style={{ background: item.card_bg_color }}>
                    <div className="card-image">
                        <img src={item.card_image} alt="" />
                    </div>
                    <div className="card-info">
                        <div className='d-flex justify-content-between'>
                            <div className="title">{item.title}</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="profit">{t('Profit-per-hour')}</div>
                            <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit_per_hour}</div>
                        </div>
                        <div className="description mt-1">{item.description}</div>
                        <div className="card-footer" onClick={() => upgradeCard(item)}>
                            <p>{t(`Lvl-${item.user_level_no}`)}</p>
                            <div className="value">
                                {item.method_of_unlocking_payment == 'COINS' && <img src="/images/icons/usdt.png" alt="usdt" />}
                                {item.method_of_unlocking_payment == 'DIAMONDS' && <img src="/images/icons/bonas.png" alt="usdt" />}
                                {calculateUnlockPrice(item)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {fetchloader && <div className="api-loader"><div className="spinner-border" role="status"></div></div>}
        </div>)
}
