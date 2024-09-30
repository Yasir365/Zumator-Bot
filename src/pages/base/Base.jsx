import './base.scss';


export default function Base() {

    return (
        <div className='base'>
            <div className='header'>
                <div className='left'>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>

                <div className='middle'>
                    Name (Car)
                </div>

                <div className='right'>
                    <i class="fa-solid fa-person"></i>
                    <span>30</span>
                    <i class="fa-solid fa-e"></i>
                    <span>50</span>
                </div>
            </div>

            <div className="settings">
                <div className='icon'>
                    <i class="fa-solid fa-gear"></i>
                    <p>Setting</p>
                </div>
                <div className='profit'>
                    Profit per hour
                </div>
            </div>

            <div className='images-container'>
                <div className='item'>
                    <i class="fa-brands fa-earlybirds"></i>
                    <p>Cambo</p>
                </div>
                <div className='item'>
                    <i class="fa-brands fa-earlybirds"></i>
                    <p>Cipher</p>
                </div>
                <div className='item'>
                    <i class="fa-brands fa-earlybirds"></i>
                    <p>Daily</p>
                </div>
                <div className='item'>
                    <i class="fa-brands fa-earlybirds"></i>
                    <p>Task</p>
                </div>
            </div>

            <div className="phone-number">
                123-456-789
            </div>

            <div className="main-image-wrapper">
                <div className="image">
                    <img src="/images/main.png" alt="" />
                </div>
            </div>

            <div className="button-container">
                <a className="button" href="#"> <span>Play now</span> </a>
            </div>


        </div>
    )
}