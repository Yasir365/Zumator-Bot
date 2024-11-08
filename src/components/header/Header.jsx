import './header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { skins } from '../../services/util.service';

export default function Header() {
    const { t } = useTranslation();

    const userInfo = useSelector((state) => state.user.userInfo);
    // console.log("User Info From Store ::::::: ", userInfo);


    return (
        <>

            <header className="user-header">
                <div className="d-flex align-items-center">
                    <img src='/images/profile.webp' alt="img" loading="lazy" data-bs-toggle="modal" data-bs-target="#skinModal" />
                    {userInfo && userInfo.user ? (
                        <>
                            <p className="title">
                                {userInfo.user.first_name} {userInfo.user.last_name}
                                <small>({t('conqueror')})</small>
                            </p>
                        </>
                    ) : (
                        <>
                            {/* <img src='/images/profile.webp' alt="img" loading="lazy" /> */}
                            <p className="title">Jane Cooper <small>(CEO)</small></p>
                        </>
                    )}
                </div>
                <div className="setting">
                    <Link to="/settings">
                        <img src="/images/icons/setting.webp" alt="setting" loading="lazy" />
                    </Link>
                </div>

            </header>


            {/* Modal */}
            <div > </div>
            <div className="modal fade" id="skinModal" aria-labelledby="skinModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>Buy Skins</h5>
                            <div className="skins">
                                <div className="wrapper">
                                    {
                                        skins.map((item, index) => (
                                            <div className='item' key={index}>
                                                <img src={item.image} alt="img" loading="lazy" className='mb-0 skin-img' />
                                                <div> <i className={item.Locked ? "fa fa-lock" : "fa fa-check"}></i> </div>
                                                {item.Locked && <div className="price">${item.price}</div>}
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
