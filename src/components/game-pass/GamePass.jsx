import { useState, useEffect } from 'react';
import toastr from '../../services/toastr.service';
import { useTranslation } from 'react-i18next';

export default function GamePass() {

    const { t } = useTranslation();
    const [selectedPack, setSelectedPack] = useState(null); // Track selected pack

    useEffect(() => {
        // Ensure Telegram WebApp API is available
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.ready();
        }
    }, []);

    const handlePackSelect = (amount) => {
        setSelectedPack(amount); // Update selected pack amount
    };

    const handleProceed = async () => {
        if (!selectedPack) {
            toastr('error', t('Please-select-a-card-pack-before-proceeding'));
            return;
        }

        try {
            // Call your backend to create the invoice link
            const response = await fetch('/create-invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: 'Buy Diamonds', // Payment title
                    description: `Purchase ${selectedPack / 100} Diamonds`, // Description
                    amount: selectedPack, // Selected pack amount
                }),
            });

            const data = await response.json();
            if (data.invoiceLink) {
                window.Telegram.WebApp.openInvoice(data.invoiceLink, (status) => {
                    if (status === 'paid') {
                        toastr('success', t('Payment-successful!-Enjoy-your-Diamonds-🎉'));
                    } else {
                        toastr('error', t('Payment-failed-or-cancelled'));
                    }
                });
            } else {
                toastr('error', t('Failed-to-generate-payment-link'));
            }
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
                                {[199, 499, 999, 1299, 1499, 1799].map((amount, index) => (
                                    <div
                                        key={index}
                                        className={`card ${selectedPack === amount ? 'selected' : ''}`}
                                        onClick={() => handlePackSelect(amount)}
                                        style={{ cursor: 'pointer', border: selectedPack === amount ? '2px solid green' : '' }}
                                    >
                                        <h6 className="text-center">{amount / 100} {t('Diamonds')}</h6>
                                        <div className='d-flex justify-content-center'>
                                            <img src="/images/icons/bonas.webp" alt="" />
                                        </div>
                                        <div className="footer mt-2"> ${amount / 100} </div>
                                    </div>
                                ))}
                            </div>
                            <button type="button" className="btn btn-success mt-2" onClick={handleProceed}>
                            {t('Proceed')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
