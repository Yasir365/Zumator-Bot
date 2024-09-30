import './ops.scss'
import { useState } from 'react'
import moment from 'moment'

export default function Ops() {
  const [date, setDate] = useState(new Date())
  const [activeTab, setActiveTab] = useState(1)

  const formattedDate = moment(date).format('YYYY-MM-DD')
  return (
    <div className='ops'>

      <div className='date'>{formattedDate}</div>

      <div className='combo'>
        <div>Daily Cambo</div>
        <div>0.0000</div>
      </div>

      <div className='images-container'>
        <div className='image'>
          <img src="/images/img1.jpg" alt="" />
        </div>
        <div className='image'>
          <img src="/images/img2.jpg" alt="" />
        </div>
        <div className='image'>
          <img src="/images/img3.jpg" alt="" />
        </div>
        <div className='image'>
          <img src="/images/img4.jpg" alt="" />
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={activeTab === 1 ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab(1)}
          >
            Web 3
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === 2 ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab(2)}
          >
            Market
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === 3 ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab(3)}
          >
            Galatic
          </a>
        </li>
        <li className="nav-item">
          <a
            className={activeTab === 4 ? "nav-link active" : "nav-link"}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab(4)}
          >
            Aritifacts
          </a>
        </li>
      </ul>

      {activeTab === 1 && (
        <div className='tab-content'>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img1.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>


        </div>
      )}
      {activeTab === 2 && (
        <div className='tab-content'>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img2.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>


        </div>
      )}
      {activeTab === 3 && (
        <div className='tab-content'>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img3.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>


        </div>
      )}
      {activeTab === 4 && (
        <div className='tab-content'>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>
          <div className='left'>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>            </div>
            <div className="item">
              <div className='card-image'>
                <img src="/images/img4.jpg" alt="" />
              </div>
              <div className='card-info'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugit soluta alias.</p>
              </div>
            </div>
          </div>


        </div>
      )}

    </div>
  )
}
