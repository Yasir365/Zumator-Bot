import { getOpsCards } from "../../services/api.service";
import { useState, useEffect } from 'react';

export default function Web3() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await getOpsCards('Web 3')
        setData(res)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="tab-content d-flex">
            {data.map((item, index) => (
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
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit_per_hour}</div>
                        </div>
                        <div className="card-footer">
                            <p>Lvl 2</p>
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> 100 </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>)
}
