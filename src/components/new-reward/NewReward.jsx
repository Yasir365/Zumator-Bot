import { useState, useEffect } from 'react';
import { getTasks } from "../../services/api.service";

export default function NewReward() {
    const [data, setData] = useState([]);
    const [fetchloader, setFetchLoader] = useState(false);

    const getData = async () => {
        setFetchLoader(true);
        const res = await getTasks('NEW')
        setData(res)
        setFetchLoader(false);
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="tab-content">
                {!fetchloader && data.map((item, index) => (
                    <div className='w-100' key={item.id}>
                        <div className="d-flex justify-content-between align-items-center pb-1">
                            <div className='d-flex align-items-center'>
                                <img src={item.task_icon} alt="" />
                                <div className='ms-2'>
                                    <p className='bold'>{item.title}</p>
                                    <p className='small'>
                                        {item.task_reward == 'COINS' && <img src="/images/icons/usdt.webp" alt="usdt" />}
                                        {item.task_reward == 'DIAMONDS' && <img src="/images/icons/bonas.webp" alt="usdt" />}
                                        {item.reward_amount}
                                    </p>
                                </div>
                            </div>

                            <button className="start">Start</button>
                        </div>
                        {index !== data.length - 1 && (<hr />)}
                    </div>
                ))}
            </div>
            {fetchloader && <div className="api-loader"><div className="spinner-border" role="status"></div></div>}
        </>
    )
}
