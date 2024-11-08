import './leaderboard.scss'
import { leaderboardData } from '../../services/util.service';

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export default function Leaderboard() {
    const cardData = leaderboardData
    return (
        <div className='leaderboard-page'>
            <Slider {...settings}>
                <div className="item-container">
                    <img src="/images/hero.webp" alt="" />
                    <h6>Recruite</h6>
                </div>
                <div className="item-container">
                    <img src="/images/hero.webp" alt="" />
                    <h6>Recruite</h6>
                </div>
                <div className="item-container">
                    <img src="/images/hero.webp" alt="" />
                    <h6>Recruite</h6>
                </div>
                <div className="item-container">
                    <img src="/images/hero.webp" alt="" />
                    <h6>Recruite</h6>
                </div>
            </Slider>

            <h4 className="heading"> Leaderboard </h4>

            <div className="card-container">
                <div className="card-content">
                    {cardData.map((item, index) => (
                        <div>
                            <div className="item" key={index}>
                                <div className="index">{index + 1}</div>
                                <div className="profile-image">
                                    <img src='/images/leaderboard/profile.webp' alt="" />
                                </div>
                                <div className="player">
                                    <small className="title">Player’s Name</small>
                                    <p className="value">{item.name}</p>
                                </div>
                                <div className="play-image">
                                    <img src='/images/leaderboard/play.webp' alt="" />
                                </div>
                                <div className="score">
                                    <small>Score</small>
                                    <p className="value">{item.score}</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
