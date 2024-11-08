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
import { useSelector } from 'react-redux';

export default function Home() {
    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);


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
                <span>{userInfo ? userInfo.points : 0.00000}</span>
            </div>

            <Avatar />

            <div className='d-flex justify-content-between gap-2'>
                <div className='tickets'>
                    <Tickets />
                </div>

                <div className='w-100'>
                    <GamePass />

                    <div className="d-flex align-items-center">
                        <span className='me-3 arena-name'>{t('Recruite')}</span>
                        <Link to="/arena">
                            <img src="/images/icons/podium.webp" alt="" />
                        </Link>
                        <Link to="/leaderboard" className='ms-2'>
                            <img src="/images/icons/chart.webp" alt="" />
                        </Link>
                    </div>
                    <div className="progress-container">
                        <div className="progress">
                            <div className="progress-bar" style={{ width: `40%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">{t('Level-1')}</div>
                        </div>
                        <div className="img"> <img src="/images/icons/layer.webp" alt="" /> </div>
                    </div>

                </div>
            </div>
            <div className="play-container">
                <a className="play-button" href="#"> <span>{t('Play-now')}</span> </a>
            </div>
        </div>
    )
}