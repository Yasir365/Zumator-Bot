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
                    <div className='content'><span>Fire:</span> <span>90</span> </div>
                </div>
                <div className="col-sm-6">
                    <div className='content'><span>Shield:</span> <span>10</span> </div>
                </div>
                <div className="col-sm-6">
                    <div className='content'><span>Fuel Capacity:</span> <span>50</span> </div>
                </div>
                <div className="col-sm-6">
                    <div className='content'><span>Speed:</span> <span>75</span> </div>
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
