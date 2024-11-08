import { web3Data, gradients } from "../../services/util.service"

export default function Web3() {
    return (
        <div className="tab-content d-flex">
            {web3Data.map((item, index) => (
                <div className="item" key={index} style={{ background: gradients[index % gradients.length], }}>
                    <div className="card-image">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="card-info">
                        <div className='d-flex justify-content-between'>
                            <div className="title">Zumator</div>
                            <div className="value">{item.num}</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="profit">Profit per hour</div>
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.profit}</div>
                        </div>
                        <div className="card-footer">
                            <p>Lvl 2</p>
                            <div className="value"><img src="/images/icons/usdt.webp" alt="usdt" /> {item.total}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>)
}
