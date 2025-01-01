import "./leaderboard.scss";

import Slider from "react-slick";
import { useState, useEffect } from "react";
import { getTopPlayer } from "../../services/api.service";
import { formatNumber } from "../../services/util.service";
import { useTranslation } from "react-i18next";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
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
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await getTopPlayer();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="leaderboard-page">
      <div className="top_area">
        <h4 className="heading">{t("Leader board")}</h4>
      </div>
      <div className="middle_area">
        <Slider {...settings}>
          <div className="item-container">
            <img src="/images/hero.webp" alt="" />
            <h6>{t("Recruite")}</h6>
          </div>
          <div className="item-container">
            <img src="/images/hero.webp" alt="" />
            <h6>{t("Recruite")}</h6>
          </div>
          <div className="item-container">
            <img src="/images/hero.webp" alt="" />
            <h6>{t("Recruite")}</h6>
          </div>
          <div className="item-container">
            <img src="/images/hero.webp" alt="" />
            <h6>{t("Recruite")}</h6>
          </div>
        </Slider>
      </div>
      <div className="end_area">
        <h4 className="heading heading2">{t("Leaderboard")}</h4>
        <div className="card-container">
          <div className="card-content">
            {data.map((item, index) => (
              <div key={index}>
                <div className="item">
                  <div className="index">{index + 1}</div>
                  <div className="profile-image">
                    <img src="/images/leaderboard/profile.webp" alt="" />
                  </div>
                  <div className="player">
                    <small className="title">{t("Player-s-Name")}</small>
                    <p className="value">
                      {item.first_name} {item.last_name}
                    </p>
                  </div>
                  <div className="play-image">
                    <img src="/images/leaderboard/play.webp" alt="" />
                  </div>
                  <div className="score">
                    <small>{t("Score")}</small>
                    <p className="value">{formatNumber(item.coins)}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
