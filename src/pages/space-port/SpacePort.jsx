import './space-port.scss'
import { shipyardData, gradients, formatNumber } from '../../services/util.service';
import Slider from 'react-slick';


function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export default function SpacePort() {
    return (
        <div className="space-port-page">
            <div className="overlay">
                <div className="img-container">
                    <img className='zoom_animation' src="/images/comming-soon.png" alt="" />
                </div>
            </div>
            <div className='inner'>
                <Slider {...settings}>
                    <div className="item-container">
                        <h6>Noah 1</h6>
                        <img src="/images/ship-yard/4.webp" alt="" />
                    </div>
                    <div className="item-container">
                        <h6>Noah 2</h6>
                        <img src="/images/ship-yard/3.webp" alt="" />
                    </div>
                    <div className="item-container">
                        <h6>Noah 3</h6>
                        <img src="/images/ship-yard/4.webp" alt="" />
                    </div>
                    <div className="item-container">
                        <h6>Noah 4</h6>
                        <img src="/images/ship-yard/3.webp" alt="" />
                    </div>
                </Slider>

                <div className="progess-container">
                    <div className='d-flex justify-content-between mb-1'>
                        <label>Fire Power</label>
                        <p>290.1</p>
                    </div>
                    <div className="progress mb-1">
                        <div className="progress-bar w-25" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className='d-flex justify-content-between mb-1'>
                        <label>Shield</label>
                        <p>471.8</p>
                    </div>
                    <div className="progress mb-1">
                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className='d-flex justify-content-between mb-1'>
                        <label>Fuel Capacity</label>
                        <p>390</p>
                    </div>
                    <div className="progress mb-1">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className='d-flex justify-content-between mb-1'>
                        <label>Speed</label>
                        <p>230/hr</p>
                    </div>
                    <div className="progress mb-1">
                        <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="tab-content d-flex">
                        {shipyardData.map((item, index) => (
                            <div className="item" key={index} style={{ background: gradients[index % gradients.length], }}>
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
                                            <label>{item.progressName}</label>
                                            <p>{formatNumber(item.coins)}</p>
                                        </div>
                                        <div className="progress mb-1">
                                            <div className="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <h6>Description</h6>
                                        <p className='description'>{item.description}</p>
                                    </div>
                                    <div className="upgrade d-flex justify-content-between">
                                        <p>Lvl 2</p>
                                        <div>
                                            <img src="/images/icons/usdt.png" alt="" />
                                            <span className='ms-2'>200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
