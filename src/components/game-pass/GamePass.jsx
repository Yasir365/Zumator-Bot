import { useState, useEffect } from 'react';
import toastr from '../../services/toastr.service';
import { useTranslation } from 'react-i18next';
import { getInvoiceLink, updatePaymentStatus } from '../../services/api.service';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser } from '../../store/userInfoSlice';

export default function GamePass() {

    const { t } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
        }
    }, []);

    const handleProceed = async (pack) => {
        try {
            const payload = {
                userId: userInfo.id,
                amount: pack.price,
                title: `${pack.diamonds} Diamonds`,
                description: `${pack.diamonds} Diamonds for ${pack.price}`,

            }
            const link = await getInvoiceLink(payload);
            const WebApp = (await import('@twa-dev/sdk')).default;
            console.log("Link :: ", link);

            WebApp.openInvoice(link, async (status) => {
                if (status === 'paid') {
                    const result = await updatePaymentStatus({ id: userInfo.id, invoiceLink: link, status: 'paid', amount: pack.price, diamonds: pack.diamonds });
                    if(result){
                        dispatch(saveUser(result));
                    }
                    toastr('success', t('Payment-successful!-Enjoy-your-🎉'));
                } else {
                    toastr('error', t('Payment Failed'));
                }
            });
        } catch (error) {
            console.error('Error:', error);
            toastr("error", t('An-error-occurred-while-processing-payment'));
        }
    };

    return (
        <>
            <div className='game-pass'>
                <div>
                    <img src="/images/icons/pass.webp" alt="" />
                </div>
                <div className='pass-2' data-bs-toggle="modal" data-bs-target="#diamondPassModal">
                    <img src="/images/icons/pass2.png" alt="" />
                </div>
            </div>

            {/* Buy Diamond Modal */}
            <div className="modal fade text-center" id="diamondPassModal" aria-labelledby="diamondPassModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>{t('Buy-Diamonds')}</h5>
                            <div className="card-wrapper">
                                {[
                                    { diamonds: 100, price: 1.99 },
                                    { diamonds: 300, price: 4.99 },
                                    { diamonds: 650, price: 9.99 },
                                    { diamonds: 1000, price: 14.99 },
                                    { diamonds: 2000, price: 29.99 },
                                    { diamonds: 5000, price: 69.99 }
                                ].map((pack, index) => (
                                    <div key={index} className={`card`} >
                                        <div className='d-flex justify-content-center'>
                                            <img src="/images/icons/bonas.png" alt="" />
                                        </div>
                                        <p className="text-center">{pack.diamonds} {t('Diamonds')} = ${pack.price}</p>
                                        <button type="button" className="btn btn-success mt-2" onClick={() => handleProceed(pack)}>
                                            {t('Buy')}
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
