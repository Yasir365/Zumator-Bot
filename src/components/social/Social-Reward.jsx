import { rewardData } from '../../services/data.service';


export default function SocialReward() {
    return (
        <div className="tab-content">
            {rewardData.social.map((item, index) => (
                <div className='w-100' key={index}>
                    <div className="d-flex justify-content-between align-items-center pb-1">
                        <div className='d-flex align-items-center'>
                            <img src={item.image} alt="" />
                            <div className='ms-2'>
                                <p className='bold'>{item.title}</p>
                                <p className='small'><img src="/images/icons/bonas.webp" alt="" /> +{item.score}</p>

                            </div>
                        </div>

                        <button className="start">Start</button>
                    </div>
                    {index !== rewardData.social.length - 1 && (<hr />)}
                </div>
            ))}
        </div>
    )
}
