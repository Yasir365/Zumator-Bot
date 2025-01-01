import { useState, useEffect } from 'react';
import { getTasks } from "../../services/api.service";
import { useTranslation } from 'react-i18next';


export default function SocialReward() {

    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [fetchloader, setFetchLoader] = useState(false);

    const getData = async () => {
        setFetchLoader(true);
        const res = await getTasks('SOCIAL')
        setData(res)
        setFetchLoader(false);
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            {!fetchloader && data.length == 0 && <div className="api-loader"><h5 className="text-white">No Data Found</h5></div>}
            {!fetchloader && data.length > 0 &&
                <div className="tab-content">
                    {data.map((item, index) => (
                        <div className='w-100' key={index}>
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

                                <button className="start">{t('Start')}</button>
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
