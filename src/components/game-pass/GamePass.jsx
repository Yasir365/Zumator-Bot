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
                                {[
                                    { diamonds: 100, price: 1.99 },
                                    { diamonds: 300, price: 4.99 },
                                    { diamonds: 650, price: 9.99 },
                                    { diamonds: 1000, price: 14.99 },
                                    { diamonds: 2000, price: 29.99 },
                                    { diamonds: 5000, price: 69.99 }
                                ].map((pack, index) => (
                                    <div
                                        key={index}
                                        className={`card ${selectedPack === pack.price ? 'selected' : ''}`}
                                        onClick={() => handlePackSelect(pack.price)}
                                        style={{ cursor: 'pointer', border: selectedPack === pack.price ? '2px solid green' : '' }}
                                    >
                                        <h6 className="text-center">{pack.diamonds} {t('Diamonds')}</h6>
                                        <div className='d-flex justify-content-center'>
                                            <img src="/images/icons/bonas.webp" alt="" />
                                        </div>
                                        <div className="footer mt-2"> ${pack.price.toFixed(2)} </div>
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
