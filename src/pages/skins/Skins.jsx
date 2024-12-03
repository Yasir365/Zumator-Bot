import Header from '../../components/header/Header';
import './skins.scss';


export default function Skins() {
    return (
        <div className="skins-page">
            <Header />
            <div className="daily-board">
                <div className='d-flex justify-content-between mb-3'>
                    <h4>Achievements</h4>
                    <button className='see-all'>See all</button>
                </div>
                <div className="item-container">
                    <div className="item">
                        <div className="img"> <img src="/images/icons/bonas.webp" alt="img" /> </div>
                        <p>Item 1</p>
                    </div>
                    <div className="item">
                        <div className="img"> <img src="/images/icons/bonas.webp" alt="img" /> </div>
                        <p>Item 1</p>
                    </div>
                    <div className="item">
                        <div className="img"> <img src="/images/icons/bonas.webp" alt="img" /> </div>
                        <p>Item 1</p>
                    </div>
                    <div className="item">
                        <div className="img"> <img src="/images/icons/bonas.webp" alt="img" /> </div>
                        <p>Item 1</p>
                    </div>

                </div>
            </div>

            <div className="selected-card mt-4">
                <div className="card-image">
                    <h3 className="card-title">Skin</h3>
                    <img className='character' src="/images/skins/1.png" alt="Character" />
                    <img className='frame' src="/images/skins/Frame.png" alt="" />
                </div>
                <div className="card-content">
                    <h4>Zumator</h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        when an unknown printer took a galley of type and bled it to make a type specimen book.
                    </p>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        20
                        <img src="/images/icons/bonas.webp" alt="" />

                    </div>
                    <button className="choose-btn">Choose <i className='fa-solid fa-lock'></i></button>
                </div>
            </div>

            <div className="skins-container mt-4">
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/2.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/3.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/4.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/1.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/2.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src="/images/skins/3.png" alt="" />
                    </div>
                    <p className='text-center'>Zumator</p>
                </div>
            </div>
        </div>
    )
}
