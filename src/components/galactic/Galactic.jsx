import { useState, useEffect } from 'react';
import { getOpsCards } from "../../services/api.service";


export default function Galactic() {
    const [data, setData] = useState([]);
    const [fetchloader, setFetchLoader] = useState(false);

    const getData = async () => {
        setFetchLoader(true);
        const res = await getOpsCards('Galactic')
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
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit_per_hour}</div>
                        </div>
                        <div className="card-footer">
                            <p>Lvl 2</p>
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> 100 </div>
                        </div>
                    </div>
                </div>
            ))}
            {fetchloader && <div className="api-loader"><div class="spinner-border" role="status"></div></div>}
        </div>
    )
}
