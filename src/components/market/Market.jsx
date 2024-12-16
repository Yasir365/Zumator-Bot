import { useState, useEffect } from 'react';
import { getOpsCards } from "../../services/api.service";
import { useSelector } from "react-redux";

export default function Market() {
    const [data, setData] = useState([]);
    const [fetchloader, setFetchLoader] = useState(false);
    const userInfo = useSelector(state => state.user.userInfo);

    const getData = async () => {
        setFetchLoader(true);
        const res = await getOpsCards('Markets', userInfo.id)
        setData(res)
        setFetchLoader(false);
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="tab-content d-flex">
            {!fetchloader && data.map((item, index) => (
                <div className="item" key={index} style={{ background: item.card_bg_color }}>
                    <div className="card-image">
                        <img src={item.card_image} alt="" />
                    </div>
                    <div className="card-info">
                        <div className='d-flex justify-content-between'>
                            <div className="title">{item.title}</div>
                            <div className="value">#021</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="profit">Profit per hour</div>
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.card_level[item.user_level_no - 1].profit_per_hour}</div>
                        </div>
                        <div className="card-footer">
                            <p>Lvl {item.user_level_no}</p>
                            <div className="value">
                                {item.card_level[item.user_level_no - 1].method_of_unlocking_payment == 'COINS' && <img src="/images/icons/usdt.webp" alt="usdt" />}
                                {item.card_level[item.user_level_no - 1].method_of_unlocking_payment == 'DIAMONDS' && <img src="/images/icons/bonas.webp" alt="usdt" />}
                                {item.card_level[item.user_level_no - 1].cost_of_purchase_unlocking}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {fetchloader && <div className="api-loader"><div className="spinner-border" role="status"></div></div>}
        </div>
    )
}
