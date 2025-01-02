import "./home.scss";
// import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
// import moment from "moment";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GamePass from "../../components/game-pass/GamePass";
import Tickets from "../../components/tickets/Tickets";
import ProfitPerHour from "../../components/profit-per-hour/ProfitPerHour";
import DailyMissionBoard from "../../components/daily-mission-board/DailyMissionBoard";
import Avatar from "../../components/avatar/Avatar";
import KeysAndDiamonds from "../../components/keys-and-diamonds/KeysAndDiamonds";
import { useSelector } from "react-redux";
import { formatNumber } from "../../services/util.service";

export default function Home() {
  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="home-page">
      <div className="top_area">
        <Header />
        <div className="rewards flex item-center justify-between gap-3">
          <KeysAndDiamonds />
          <ProfitPerHour />
        </div>

        <DailyMissionBoard />

        <div className="balance">
          <img src="/images/icons/usdt.svg" alt="" width="100%" height="100%" />
          <span>{formatNumber(userInfo.coins)}</span>
        </div>
      </div>

      <div className="middle_area">
        <Avatar />
      </div>

      <div className="end_area">
        <div className="d-flex justify-content-between gap-2">
          <div className="tickets">
            <Tickets />
          </div>

          <div className="w-100">
            <GamePass />

            <div className="d-flex align-items-center">
              <span className="me-3 arena-name">{t("Recruite")}</span>
              <Link to="/arena" className="arena-img">
                <img src="/images/icons/podium.png" alt="" />
              </Link>
              <Link to="/leaderboard" className="ms-2 arena-img">
                <img src="/images/icons/chart.png" alt="" />
              </Link>
            </div>
            <div className="progress-container">
              <Link to="/leaderboard">
                <div className="progress">
                  <div className="progress-bar" style={{ width: `40%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    {t("Level-1")}
                  </div>
                </div>
              </Link>
              <div className="img">
                {" "}
                <img src="/images/icons/layer.png" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="play-container">
          <a className="play-button" href="#">
            {" "}
            <span>{t("Play-now")}</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
