import { useTranslation } from 'react-i18next';
import { factions } from "../../services/data.service";

export default function ProfitPerHour() {
    const { t } = useTranslation();
    return (
        <>

            <div className='right'>
                <div className="item">
                    <img src="/images/icons/grid.webp" alt="" data-bs-toggle="modal" data-bs-target="#factionsModal" />
                    <p>{t('Profit-per-hour')} <span>0.05</span> <small> /hr</small></p>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="factionsModal" aria-labelledby="factionsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body fractions">
                            <span className="close" data-bs-dismiss="modal" aria-label="Close">x</span>
                            <h5>Set Profit Galaxy </h5>

                            <div className="wrapper">
                                {
                                    factions.map((item, index) => (
                                        <div className={item.sleected ? "item active" : "item"} key={index}>

                                            <div className="content ms-2">
                                                <div className="d-flex justify-content-between">
                                                    <strong>{item.name}:</strong>
                                                    <strong>{item.profit} <i className={item.sleected ? "fa fa-check ms-2" : "fa fa-lock ms-2"}></i> </strong>
                                                </div>
                                                <p className="small">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
