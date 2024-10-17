import './home.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import moment from 'moment';

const MaxEnergy = 120;
export default function Home() {

    const [date] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState(moment(date).format('mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedDate(moment().format('mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home-page'>
            <Header />
            <div className='rewards'>
                <div className='left'>
                    <div className="item">
                        <img src="/images/icons/key.png" alt="" />
                        <span>50</span>
                    </div>
                    <div className="item">
                        <img src="/images/icons/usdt.png" alt="" />
                        <span>30</span>
                    </div>
                </div>

                <div className='right'>
                    <div className="item">
                        <img src="/images/icons/grid.png" alt="" />
                        <p>Profit per hour <span>0.05</span> <small> /hr</small></p>
                    </div>
                </div>
            </div>

            <div className="daily-board">
                <h4>Daily Mission Board</h4>
                <div className="item-container">
                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/1.png" alt="img" /> </div>
                        <p>Combo</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/2.png" alt="img" /> </div>
                        <p>Cypher</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/3.png" alt="img" /> </div>
                        <p>Reward</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/4.png" alt="img" /> </div>
                        <p>Task</p>
                    </div>
                </div>
            </div>

            <div className="balance">
                <img src="/images/icons/usdt.png" alt="" />
                <span>0.000156</span>
            </div>

            <div className="main-image-wrapper">
                <div className="image">
                    <img src="/images/hero.png" alt="" />
                </div>
            </div>

            <div className="tickets">
                <div>
                    <p>Tickets</p>
                    <span>05/10</span>
                </div>
                <div>
                    <img src="/images/icons/pass.png" alt="" />
                </div>
            </div>

            <div className="time">
                <img src="/images/icons/clock.png" alt="" />
                <span>{formattedDate}</span>
                <span className='m-0 ms-4'>Recruite</span>
                <img src="/images/icons/podium.png" alt="" />
                <img src="/images/icons/chart.png" alt="" />
            </div>

            <div className="progress-container">
                <button className='claim'>Claim</button>
                <div className="progress">
                    <div className="progress-bar" style={{ width: `25%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Level 1</div>
                </div>
                <div className="img"> <img src="/images/icons/layer.png" alt="" /> </div>
            </div>

            <div className="play-container">
                <a className="play-button" href="#"> <span>Play now</span> </a>
            </div>

        </div>
    )
}