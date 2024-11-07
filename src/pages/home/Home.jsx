import './home.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GamePass from '../../components/game-pass/GamePass';
import Tickets from '../../components/tickets/Tickets';
import ProfitPerHour from '../../components/profit-per-hour/ProfitPerHour';
import DailyMissionBoard from '../../components/daily-mission-board/DailyMissionBoard';
import Avatar from '../../components/avatar/Avatar';
import KeysAndDiamonds from '../../components/keys-and-diamonds/KeysAndDiamonds';

export default function Home() {
    const { t } = useTranslation();

    const [date] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState(moment(date).format('hh:mm:ss'));


    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedDate(moment().format('hh:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='home-page'>
            <Header />
            <div className='rewards'>
                <KeysAndDiamonds />
                <ProfitPerHour />
            </div>

            <DailyMissionBoard />

            <div className="balance">
                <img src="/images/icons/usdt.webp" alt="" />
                <span>0.000156</span>
            </div>

            <Avatar />

            <div className="tickets">
                <Tickets />
                <GamePass />
            </div>

            <div className="time">
                <img src="/images/icons/clock.webp" alt="" />
                <span>{formattedDate}</span>
                <span className='m-0 ms-4'>{t('Recruite')}</span>
                <Link to="/arena">
                    <img src="/images/icons/podium.webp" alt="" />
                </Link>
                <Link to="/leaderboard">
                    <img src="/images/icons/chart.webp" alt="" />
                </Link>
            </div>

            <div className="progress-container">
                <button className='claim'>{t('Claim')}</button>
                <div className="progress">
                    <div className="progress-bar" style={{ width: `40%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{t('Level-1')}</div>
                </div>
                <div className="img"> <img src="/images/icons/layer.webp" alt="" /> </div>
            </div>

            <div className="play-container">
                <a className="play-button" href="#"> <span>{t('Play-now')}</span> </a>
            </div>



        </div>
    )
}