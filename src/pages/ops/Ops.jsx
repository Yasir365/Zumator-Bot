import './ops.scss';
import { useState } from 'react';
import moment from 'moment';

export default function Ops() {
  const [date] = useState(new Date());
  const [activeTab, setActiveTab] = useState(1);

  const formattedDate = moment(date).format('YYYY-MM-DD');

  const tabs = [
    { id: 1, name: 'Web 3', image: '/images/img1.jpg' },
    { id: 2, name: 'Market', image: '/images/img2.jpg' },
    { id: 3, name: 'Galatic', image: '/images/img3.jpg' },
    { id: 4, name: 'Artifacts', image: '/images/img4.jpg' },
  ];

  const tabContent = [
    {
      id: 1,
      items: [
        { image: '/images/img1.jpg', text: 'Lorem ipsum dolor sit amet.' },
        { image: '/images/img1.jpg', text: 'Lorem ipsum dolor sit amet.' },
        // { image: '/images/img1.jpg', text: 'Lorem ipsum dolor sit amet.' },
      ],
    },
    {
      id: 2,
      items: [
        { image: '/images/img2.jpg', text: 'Lorem ipsum dolor sit amet.' },
        { image: '/images/img2.jpg', text: 'Lorem ipsum dolor sit amet.' },
        // { image: '/images/img2.jpg', text: 'Lorem ipsum dolor sit amet.' },
      ],
    },
    {
      id: 3,
      items: [
        { image: '/images/img3.jpg', text: 'Lorem ipsum dolor sit amet.' },
        { image: '/images/img3.jpg', text: 'Lorem ipsum dolor sit amet.' },
        // { image: '/images/img3.jpg', text: 'Lorem ipsum dolor sit amet.' },
      ],
    },
    {
      id: 4,
      items: [
        { image: '/images/img4.jpg', text: 'Lorem ipsum dolor sit amet.' },
        { image: '/images/img4.jpg', text: 'Lorem ipsum dolor sit amet.' },
        // { image: '/images/img4.jpg', text: 'Lorem ipsum dolor sit amet.' },
      ],
    },
  ];

  const TabItems = ({ items }) => (
    <>
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="card-image">
            <img src={item.image} alt="" />
          </div>
          <div className="card-info">
            <p>{item.text}</p>
            <p>{item.text}</p>
            <p>{item.text}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="ops">
      <div className="date">{formattedDate}</div>

      <div className="combo">
        <div>Daily Combo</div>
        <div>0.0000</div>
      </div>

      <div className="images-container">
        {tabs.map((tab) => (
          <div key={tab.id} className="image">
            <img src={tab.image} alt={tab.name} />
          </div>
        ))}
      </div>

      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <a
              className={activeTab === tab.id ? 'nav-link active' : 'nav-link'}
              href="#"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </a>
          </li>
        ))}
      </ul>

      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <div key={tab.id} className="tab-content d-flex">
              {/* Left and right can now use the same component */}
              <div className="left">
                <TabItems items={tabContent.find((content) => content.id === tab.id).items} />
              </div>
              <div className="right">
                <TabItems items={tabContent.find((content) => content.id === tab.id).items} />
              </div>
            </div>
          )
      )}
    </div>
  );
}
