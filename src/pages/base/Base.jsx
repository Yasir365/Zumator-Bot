import './base.scss';


export default function Base() {
    return (
        <div className='base'>
            <h1 className="title">Base</h1>

            <header>
                <div class="username">CAR</div>
                <div class="battery-icon"></div>
                <div class="time"></div>
            </header>

            <main>
                <section class="section-settones">
                </section>
                <section class="section-factions">
                </section>
                <div class="player-character">
                </div>

                <section class="section-tickets">
                </section>

                <button class="recruit-button">Recruit</button>

                <section class="section-kain">
                </section>
            </main>

            <footer>
                <button class="playx-button">PlayX</button>
            </footer>
        </div>
    )
}
