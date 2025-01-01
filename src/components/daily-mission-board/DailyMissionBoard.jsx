import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function DailyMissionBoard() {
  const { t } = useTranslation();
  return (
    <div className="daily-board">
      <h4>{t("Daily-Mission-Board")}</h4>
      <div className="item-container">
        <div className="item">
          <div className="img">
            {" "}
            <img src="/images/daily-board/1.webp" alt="img" />{" "}
          </div>
          <p>{t("Combo")}</p>
        </div>

        <div className="item">
          <div className="img">
            {" "}
            <img src="/images/daily-board/2.webp" alt="img" />{" "}
          </div>
          <p>{t("Cypher")}</p>
        </div>

        <Link to="/rewards" className="item">
          <div className="img">
            {" "}
            <img src="/images/daily-board/3.webp" alt="img" />{" "}
          </div>
          <p>{t("Reward")}</p>
        </Link>
        <Link to="/rewards" className="item">
          <div className="img">
            {" "}
            <img src="/images/daily-board/4.webp" alt="img" />{" "}
          </div>
          <p>{t("Task")}</p>
        </Link>
      </div>
    </div>
  );
}
