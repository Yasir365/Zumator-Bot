import './roadmap.scss';


export default function Roadmap() {
    return (
        <div className="roadmap">
            <h2>Roadmap</h2>
            <div className="item completed">
                <div className="title">
                    <p>March 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">Basic game</li>
                        <li className="completed">Mining updates</li>
                        <li className="completed">Earn tasks</li>
                    </ul>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>April 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">Referral system</li>
                        <li className="completed">LVL ratings</li>
                        <li className="completed">Daily rewards</li>
                    </ul>
                </div>
                <div className="overlay is-1">
                    <div className="overlay-bg">
                        <img src='/images/bg1.png' loading="lazy" alt="Hamster Kombat" />
                    </div>
                    <div className="overlay-image">
                        <img
                            className="img-responsive"
                            src='/images/kambat.png'
                            alt="Hamster Kombat"
                        />
                    </div>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>May 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">Special cards</li>
                        <li className="completed">Daily Combo</li>
                        <li className="completed">«Partner» blockchain announcement</li>
                    </ul>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>June 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">
                            On-chain infrastructure development
                        </li>
                        <li className="completed">Wallet in-game implementation</li>
                        <li className="completed">Web 3 pre-listing Quest</li>
                    </ul>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>July 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">Characters and skins</li>
                        <li className="completed">Third-party game integration MVP</li>
                        <li className="completed">
                            Tech solution for the largest-ever AirDrop
                        </li>
                    </ul>
                </div>
                <div className="overlay is-2">
                    <div className="overlay-bg">
                        <img src='/images/bg2.png' loading="lazy" alt="Hamster Kombat" />
                    </div>
                    <div className="overlay-image">
                        <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                    </div>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>August 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed"> Achievements </li>
                        <li className="completed">Gaming platform launch</li>
                    </ul>
                </div>
            </div>
            <div className="item completed">
                <div className="title">
                    <p>September 2024</p>
                </div>
                <div className="content">
                    <ul>
                        <li className="completed">The Interlude season launch</li>
                        <li className="completed">Implementing tech for the largest AirDrop</li>
                        <li className="completed">TGE and AirDrop distribution</li>
                        <li className="completed">$HMSTR Listing</li>
                    </ul>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <p>Upcoming</p>
                </div>
                <div className="content">
                    <ul>
                        <li> The Roadmap will be released soon</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
