import './home.scss';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import moment from 'moment';
import { Link, useLocation } from 'react-router-dom';
import { saveRefUser, updateCloseButton } from '../../services/api.service';

export default function Home() {
    const [date] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState(moment(date).format('hh:mm:ss'));
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const ref = urlParams.get('ref');

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedDate(moment().format('hh:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (ref) {
            let data = JSON.parse(localStorage.getItem('userInfo'))
            if (data) {
                data['ref'] = ref;
                saveRefUser(data)
            }
        }
    }, [ref]);

    useEffect(() => {
        setTimeout(() => {
            updateCloseButton('main');
        }, 1000);
    }, []);

    return (
        <div className='home-page'>
            <Header />
            <div className='rewards'>
                <div className='left'>
                    <div className="item">
                        <img src="/images/icons/key.webp" alt="" />
                        <span>50 {ref}</span>
                    </div>
                    <div className="item">
                        <img src="/images/icons/bonas.webp" alt="" />
                        <span>30</span>
                    </div>
                </div>

                <div className='right'>
                    <div className="item">
                        <img src="/images/icons/grid.webp" alt="" />
                        <p>Profit per hour <span>0.05</span> <small> /hr</small></p>
                    </div>
                </div>
            </div>

            <div className="daily-board">
                <h4>Daily Mission Board</h4>
                <div className="item-container">
                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/1.webp" alt="img" /> </div>
                        <p>Combo</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/2.webp" alt="img" /> </div>
                        <p>Cypher</p>
                    </div>

                    <div className="item">
                        <Link to="/rewards" onClick={updateCloseButton('other')}>
                            <div className="img"> <img src="/images/daily-board/3.webp" alt="img" /> </div>
                            <p>Reward</p>
                        </Link>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/4.webp" alt="img" /> </div>
                        <p>Task</p>
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
                    <p>Tickets</p>
                    <span>05/10</span>
                </div>
                <div>
                    <img src="/images/icons/pass.webp" alt="" />
                </div>
            </div>

            <div className="time">
                <img src="/images/icons/clock.webp" alt="" />
                <span>{formattedDate}</span>
                <span className='m-0 ms-4'>Recruite</span>
                <img src="/images/icons/podium.webp" alt="" />
                <img src="/images/icons/chart.webp" alt="" />
            </div>

            <div className="progress-container">
                <button className='claim'>Claim</button>
                <div className="progress">
                    <div className="progress-bar" style={{ width: `40%` }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Level 1</div>
                </div>
                <div className="img"> <img src="/images/icons/layer.webp" alt="" /> </div>
            </div>

            <div className="play-container">
                <a className="play-button" href="#"> <span>Play now</span> </a>
            </div>

        </div>
    )
}