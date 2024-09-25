import './hero.scss';


export default function Hero() {
    return (
        <div className='hero'>
            <div className="overlay">
                <div className="overlay-image is-1">
                    <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                </div>
                <div className="overlay-image is-2">
                    <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                </div>
                <div className="overlay-image is-3">
                    <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                </div>
                <div className="overlay-image is-4">
                    <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                </div>
            </div>
            <h1>Unleash your inner CEO</h1>
            <div className="exchanges">
                <div className="image-wrapper">
                    <img src="/svgs/exchange1.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange2.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange1.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange2.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange1.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange2.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange1.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange2.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange1.svg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="/svgs/exchange2.svg" alt="" />
                </div>
            </div>
            <p> Make your way from the shaved hamster to the grandmaster CEO of the tier-1 crypto exchange </p>
            <p className="hidden-mobile"> Buy upgrades, complete quests, invite friends and become the best </p>
            <div className="button-container">
                <a className="button" href="#"> <span>Play now</span> </a>
            </div>
        </div>
    )
}
