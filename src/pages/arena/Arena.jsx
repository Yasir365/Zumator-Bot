import './arena.scss';

const total = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Arena() {

  return (
    <div className="arena-page">
      <h4 className="heading"> Arena </h4>
      <div className="card-container">
        {total.map((item, index) => (
          <div className="item" key={index}>
            <img src="/images/arena/step.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
