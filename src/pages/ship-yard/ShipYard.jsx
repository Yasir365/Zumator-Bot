import './ship-yard.scss'

export default function ShipYard() {
    return (
        <div className='ship-yard'>
            <div className="main-image-wrapper">
                <div className="image">
                    <img src="/images/main.png" alt="" />
                </div>
            </div>

            <div className="row main-heading">
                <div className="col-sm-6">
                    <h3>Fire : --------</h3>
                </div>
                <div className="col-sm-6">
                    <h3>Shield : --------</h3>
                </div>
                <div className="col-sm-6">
                    <h3>Fuel Capacity : --------</h3>
                </div>
                <div className="col-sm-6">
                    <h3>speed : --------</h3>
                </div>
            </div>

            <div className="row item-wrapper">
                <div className="col-sm-6 item">
                    <div className='image-wrapper'>
                        <div className="image">
                            <img src="/images/img1.jpg" alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>Lvl 2 Upgrade</p>
                        <span>50,000</span>
                    </div>
                </div>
                <div className="col-sm-6 item">
                    <div className='image-wrapper'>
                        <div className="image">
                            <img src="/images/img1.jpg" alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>Lvl 2 Upgrade</p>
                        <span>50,000</span>
                    </div>
                </div>
                <div className="col-sm-6 item">
                    <div className='image-wrapper'>
                        <div className="image">
                            <img src="/images/img1.jpg" alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>Lvl 2 Upgrade</p>
                        <span>50,000</span>
                    </div>
                </div>
                <div className="col-sm-6 item">
                    <div className='image-wrapper'>
                        <div className="image">
                            <img src="/images/img1.jpg" alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                            <p>Lorem ipsum dolor sit?</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>Lvl 2 Upgrade</p>
                        <span>50,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
