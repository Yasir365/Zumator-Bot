import { useTranslation } from 'react-i18next';

export default function ProfitPerHour() {
    const { t } = useTranslation();
    return (
        <div className='right'>

            <div className="item">
                <img src="/images/icons/grid.webp" alt="" />
                <p>{t('Profit-per-hour')} <span>0.05</span> <small> /hr</small></p>
            </div>
        </div>
    )
}
