import Header from '../../components/header/Header';
import './skins.scss';
import { useState } from 'react';
import { skinsData } from '../../services/util.service';


export default function Skins() {
    const [selectedSkin, setSelectedSkin] = useState(skinsData[0]); // Default selected skin

    const handleSelectSkin = (skin) => {
        setSelectedSkin(skin);
    };

    return (
        <div className="skins-page">
            <Header />

            <div className="selected-card mt-4">
                <div className="card-image">
                    <h3 className="card-title">Skin</h3>
                    <img className='character' src={selectedSkin.img} alt={selectedSkin.name} />
                    <img className='frame' src="/images/skins/Frame.png" alt="Frame" />
                </div>
                <div className="card-content">
                    <h4>{selectedSkin.name}</h4>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        when an unknown printer took a galley of type and bled it to make a type specimen book.
                    </p>
                    {/* <div className='d-flex justify-content-center align-items-center mb-2'>
                        {selectedSkin.price}
                        <img src="/images/icons/bonas.png" alt="Bonus Icon" />
                    </div>
                    <button className="choose-btn">Choose <i className='fa-solid fa-lock'></i></button> */}
                </div>
            </div>

            <div className="skins-container mt-4">
                {skinsData.map((skin) => (
                    <div key={skin.id} className={`item ${selectedSkin.id === skin.id ? 'selected' : ''}`} onClick={() => handleSelectSkin(skin)}>
                        <div className="img-wrapper">
                            <img src={skin.img} alt={skin.name} />
                        </div>
                        <p className='text-center'>{skin.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
