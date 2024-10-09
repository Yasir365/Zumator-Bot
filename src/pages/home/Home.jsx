import Header from '../../components/header/Header';
import './home.scss';


export default function Home() {
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
                        <img src="/images/icons/money.png" alt="" />
                        <p>Profit per hour <span>0.05</span></p>
                    </div>

                    <div className="item item2">
                        <img src="/images/icons/usdt.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="daily-board">
                <h4>Daily Mission Board</h4>
                <div className="item-container">
                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/1.png" alt="" /> </div>
                        <p>Combo</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/2.png" alt="" /> </div>
                        <p>Cypher</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/3.png" alt="" /> </div>
                        <p>Reward</p>
                    </div>

                    <div className="item">
                        <div className="img"> <img src="/images/daily-board/4.png" alt="" /> </div>
                        <p>Task</p>
                    </div>
                </div>
            </div>

            <div className="balance">
                <div>
                    <img src="/images/icons/usdt.png" alt="" />
                    <span>(0.00586)</span>
                </div>
                <p>User Balance</p>

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
                    <img src="/images/mini-frog.png" alt="" />
                </div>
            </div>

            <div className="time">
                <img src="/images/icons/clock.png" alt="" />
                <span>08:05:22</span>
                <img src="/images/icons/podium.png" alt="" />
                <img src="/images/icons/chart.png" alt="" />
            </div>

            <div className="progress-container">
                <button className='claim'>Claim</button>
                <div class="progress">
                    <div class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Level 3</div>
                </div>
                <div className="img"> <img src="/images/icons/layer.png" alt="" /> </div>
            </div>

            <div className="play-container">
                <a className="play-button" href="#"> <span>Play now</span> </a>
            </div>

        </div>
    )
}