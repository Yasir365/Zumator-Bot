import './arena.scss';

export default function Arena() {

  return (
    <div className="arena-page">
      <h4 className="heading"> Leader Board </h4>
      <div className="card-container">
        <div className="item">
          <img src="/images/arena/6.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
        <div className="item">
          <img src="/images/arena/5.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
        <div className="item">
          <img src="/images/arena/4.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
        <div className="item">
          <img src="/images/arena/3.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
        <div className="item">
          <img src="/images/arena/2.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
        <div className="item">
          <img src="/images/arena/1.png" alt="" />
          <div className='rating'>
            <img src="/images/arena/stars.png" alt="" />
            <img src="/images/arena/lock.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
