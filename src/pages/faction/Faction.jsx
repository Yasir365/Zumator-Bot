import './faction.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { factions } from '../../services/util.service';

export default function Faction() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faction-page">
            <h3 className="heading">Faction</h3>

            <div className="accordion" id="factionAccordion">
                {factions.map((item, index) => (
                    <div className="accordion-item mb-3" key={index}>
                        <div className="accordion-header d-flex justify-content-between align-items-center" id={`heading${index}`} >
                            <img src={item.img} alt="" />
                            <button
                                className={`accordion-button d-flex align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`collapse${index}`}
                            >
                                {item.name}
                                {/* {item.selected && <i className='fa-solid fa-check selected'></i>} */}
                            </button>
                        </div>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''
                                }`}
                            data-bs-parent="#factionAccordion"
                        >
                            <div className="accordion-body">
                                <p>{item.description}</p>
                                {/* {
                                    !item.selected && (
                                        <div className="d-flex justify-content-center mt-3">
                                            <button className="select-btn">Select</button>
                                        </div>
                                    )
                                } */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
