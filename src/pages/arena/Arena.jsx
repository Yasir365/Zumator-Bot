import './arena.scss';

const total = [6, 5, 4, 3, 2, 1];

export default function Arena() {

  return (
    <div className="arena-page">
      <h4 className="heading"> Arena </h4>
      <div className="card-container">
        {total.map((item, index) => (
          <div className="item" key={index}>
            <img src={`/images/arena/${item}.png`} alt="" className={index === total.length - 1 ? "active" : ""} />
          </div>
        ))}
      </div>
    </div>
  );
}
