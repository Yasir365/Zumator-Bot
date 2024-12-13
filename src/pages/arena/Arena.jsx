import React, { useEffect, useRef } from 'react';
import './arena.scss';

const total = [6, 5, 4, 3, 2, 1];

export default function Arena() {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="arena-page">
      <div className="overlay">
        <img src="/images/comming-soon.png" alt="" />
      </div>
      <div className="inner">
        <h4 className="heading"> Arena </h4>
        <div className="card-container">
          {total.map((item, index) => (
            <div className="item" key={index}>
              <img src={`/images/arena/${item}.webp`} alt="" className={index === total.length - 1 ? "active" : ""} />
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
}
