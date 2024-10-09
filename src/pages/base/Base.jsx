import './base.scss';
import { useState } from 'react';


export default function Home() {
    const [count, setCount] = useState(+localStorage.getItem('count') || 0);

    const updateCount = () => {
        setCount(count + 10);
        localStorage.setItem('count', count + 10);
    }

    return (
        <div className='base'>
            <div className='header'>
                {/* <div className='left'>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div> */}

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
                    <i class="fa-solid fa-coins"></i>
                    <p>Cambo</p>
                </div>
                <div className='item'>
                    <i class="fa-brands fa-bitcoin"></i>
                    <p>Cipher</p>
                </div>
                <div className='item'>
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <p>Daily</p>
                </div>
                <div className='item'>
                    <i class="fa-regular fa-money-bill-1"></i>
                    <p>Task</p>
                </div>
            </div>

            <div className="phone-number">
                123-456-789
            </div>

            <div className="phone-number">
                Points: <span className='text-warning'>{count}</span>
            </div>

            <div className="main-image-wrapper">
                <div className="image">
                    <img src="/images/main.png" alt="" onClick={() => updateCount()} />
                </div>
            </div>

            <div className="button-container">
                <a className="button" href="#"> <span>Play now</span> </a>
            </div>


        </div>
    )
}