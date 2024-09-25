import './header.scss'

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <div className="social">
                    <a href="#" title="X" >
                        <div className="icon">
                            <img src="/svgs/x.svg" alt="" />
                        </div>
                    </a>
                    <a href="#" title="Telegram" >
                        <div className="icon">
                            <img src="/svgs/telegram.svg" alt="" />
                        </div>
                    </a>
                    <p>Join us!</p>
                </div>
            </div>
            <div className="header-center">
                <div className="logo-wrapper">
                    <img className="img-responsive" src='/images/logo.png' alt="Hamster Kombat" />
                </div>
                <p>Digie Kambat</p>
            </div>
            <div className="header-right">
                <a className="button" href="/files/rules.pdf" target="_blank" title="Whitepaper" >
                    <p>Whitepaper</p>
                    <div className="icon">
                        <img src="/svgs/right-arrow.svg" alt="" />
                    </div>
                </a>
            </div>
        </header>
    )
}
