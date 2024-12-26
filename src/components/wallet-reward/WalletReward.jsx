import { useEffect, useState } from 'react';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import toastr from '../../services/toastr.service';
import { useTranslation } from 'react-i18next';


export default function WalletReward() {

    const { t } = useTranslation();
    const [isWalletConnect, setIsWalletConnect] = useState(false);

    const walletAddress = useTonAddress();

    useEffect(() => {
        if (walletAddress) {
            setIsWalletConnect(true);

        } else {
            setIsWalletConnect(false);
        }
    }, [walletAddress]);

    const copyAddress = () => {
        navigator.clipboard.writeText(walletAddress)
        toastr('success', t('Address-copied-to-clipboard'))
    }
    return (
        <div className="tab-content">
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className='d-flex align-items-center'>
                    <img src="/images/icons/wallet.webp" alt="" />
                    {!isWalletConnect ? (
                        <span className='bold ms-2'>{t('Connect-to-Wallet')}</span>
                    ) : (
                        <div>
                            <span className='bold ms-2'>Wallet Connected:</span>
                            <p className='ms-2'>{walletAddress.slice(0, 5)}...{walletAddress.slice(-5)} <i className="fa-solid fa-copy ms-2" onClick={copyAddress}></i></p>
                        </div>
                    )}
                </div>

                <span className='connect-wallet'>
                    <TonConnectButton />
                </span>
            </div>
        </div>
    )
}
