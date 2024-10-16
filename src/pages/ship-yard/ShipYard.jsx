import './ship-yard.scss'
import { shipyardData } from '../../services/data.service';

import Slider from 'react-slick';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            onClick={onClick}
        >
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            onClick={onClick}
        >
            <i class="fa-solid fa-chevron-left"></i>
        </div>
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export default function ShipYard() {
    const cardData = shipyardData
    return (
        <div className='ship-yard-page'>
            <Slider {...settings}>
                <div className="item-container">
                    <h6>Noah</h6>
                    <img src="/images/ship-yard/4.png" alt="" />
                </div>
                <div className="item-container">
                    <h6>Noah</h6>
                    <img src="/images/ship-yard/3.png" alt="" />
                </div>
                <div className="item-container">
                    <h6>Noah</h6>
                    <img src="/images/ship-yard/2.png" alt="" />
                </div>
                <div className="item-container">
                    <h6>Noah</h6>
                    <img src="/images/ship-yard/1.png" alt="" />
                </div>
            </Slider>

            <div className="progess-container">
                <div className='d-flex justify-content-between mb-1'>
                    <label>Fire Power</label>
                    <p>290.1</p>
                </div>
                <div className="progress mb-1">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='d-flex justify-content-between mb-1'>
                    <label>Shield</label>
                    <p>471.8</p>
                </div>
                <div className="progress mb-1">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='d-flex justify-content-between mb-1'>
                    <label>Fuel Capacity</label>
                    <p>390</p>
                </div>
                <div className="progress mb-1">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='d-flex justify-content-between mb-1'>
                    <label>Speed</label>
                    <p>230/hr</p>
                </div>
                <div className="progress mb-1">
                    <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className="card-container">
                <div className="tab-content d-flex">
                    {cardData.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="card-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="card-info">
                                <div className='d-flex justify-content-between'>
                                    <div className="title">{item.title}</div>
                                    <div className="value">{item.num}</div>
                                </div>

                                <div className='progress-container'>

                                    <div className='d-flex justify-content-between mb-1'>
                                        <label>Attack</label>
                                        <p>{item.attack}</p>
                                    </div>
                                    <div className="progress mb-1">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='d-flex justify-content-between mb-1'>
                                        <label>Defence</label>
                                        <p>{item.defence}</p>
                                    </div>
                                    <div className="progress mb-1">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div className='d-flex justify-content-between mb-1'>
                                        <label>Speed</label>
                                        <p>{item.speed}</p>
                                    </div>
                                    <div className="progress mb-1">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <p>{item.lvl}</p>
                                    <div className="value"><img src="/images/icons/usdt.png" alt="usdt" /> {item.profit}</div>
                                </div>

                                <button className='btn upgrade'>Upgrade</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
