import './footer.scss'

export default function Footer() {
    return (
        <footer>
            <div className="content-wrapper">
                <a className="is-discord" href="#" title="Discord" >
                    <div className="icon">
                        <img src="/svgs/discord.svg" alt="" />
                    </div>
                </a>
                <a className="is-telegram" href="#" title="Telegram Chat" >
                    <div className="icon">
                        <img src="/svgs/telegram.svg" alt="" />
                    </div>
                </a>
            </div>
        </footer>
    )
}
