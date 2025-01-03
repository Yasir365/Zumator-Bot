import './faction.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { factions } from '../../services/util.service';
import { useTranslation } from 'react-i18next';
import toastr from '../../services/toastr.service';

export default function Faction() {
    const { t } = useTranslation();

    // Get the initially selected faction from localStorage or default to null
    const [selectedFaction, setSelectedFaction] = useState(() => {
        const storedFaction = localStorage.getItem('selectedFaction');
        return storedFaction ? parseInt(storedFaction, 10) : null;
    });

    // Set the initially active accordion index based on the selected faction
    const [activeIndex, setActiveIndex] = useState(selectedFaction);

    // Update factions array to reflect the initially selected faction
    useEffect(() => {
        if (selectedFaction !== null) {
            factions.forEach((faction, index) => {
                faction.selected = index === selectedFaction;
            });
        }
    }, [selectedFaction]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const selectFaction = (index) => {
        factions.forEach((faction, i) => {
            faction.selected = i === index;
        });
        localStorage.setItem('selectedFaction', index);
        setSelectedFaction(index);
        toastr('success', t('Faction-Selected-Successfully'));
    };

    return (
        <div className="faction-page">
            <h3 className="heading">{t('Faction')}</h3>

            <div className="accordion" id="factionAccordion">
                {factions.map((item, index) => (
                    <div className="accordion-item mb-3" key={index}>
                        <div
                            className="accordion-header d-flex justify-content-between align-items-center"
                            id={`heading${index}`}
                        >
                            <img src={item.img} alt="" />
                            <button
                                className={`accordion-button d-flex align-items-center ${activeIndex === index ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`collapse${index}`}
                            >
                                {t(item.name)}
                                {item.selected && <i className="fa-solid fa-check selected"></i>}
                            </button>
                        </div>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                            data-bs-parent="#factionAccordion"
                        >
                            <div className="accordion-body">
                                <p>{t(item.description)}</p>
                                {
                                    !item.selected && (
                                        <div className="d-flex justify-content-center mt-3" onClick={() => selectFaction(index)}>
                                            <button className="select-btn">Select</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
