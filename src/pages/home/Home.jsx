import './home.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
                <div className='left'>
                    <div className="item">
                        <img src="/images/icons/key.webp" alt="" />
                        <span>50</span>
                    </div>
                    <div className="item">
                        <img src="/images/icons/bonas.webp" alt="" />
                        <span>30</span>
                    </div>
                </div>

                <div className='right'>
                    <div className="item">
                        <img src="/images/icons/grid.webp" alt="" />
                        <p>{t('Profit-per-hour')} <span>0.05</span> <small> /hr</small></p>
                    </div>
                </div>
            </div>

            <div className="daily-board">
                <h4>{t('Daily-Mission-Board')}</h4>
                <div className="item-container">
                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/1.webp" alt="img" /> </div>
                        <p>{t('Combo')}</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/2.webp" alt="img" /> </div>
                        <p>{t('Cypher')}</p>
                    </div>

                    <div className="item">
                        <Link to="/rewards">
                            <div className="img"> <img src="/images/daily-board/3.webp" alt="img" /> </div>
                            <p>{t('Reward')}</p>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/rewards">
                            <div className="img"> <img src="/images/daily-board/4.webp" alt="img" /> </div>
                            <p>{t('Task')}</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="balance">
                <img src="/images/icons/usdt.webp" alt="" />
                <span>0.000156</span>
            </div>

            <div className="main-image-wrapper">
                <div className="image">
                    <img src="/images/hero.webp" alt="" />
                </div>
            </div>

            <div className="tickets">
                <div>
                    <p>{t('Tickets')}</p>
                    <span>05/10</span>
                </div>
                <div>
                    <img src="/images/icons/pass.webp" alt="" />
                </div>
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