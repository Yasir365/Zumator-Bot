import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProfitPerHour() {
    const { t } = useTranslation();
    return (
        <>

            <div className='right'>
                <div className="item">
                    <Link to="/faction">
                        <img src="/images/icons/grid.png" alt="" />
                    </Link>
                    <p>{t('Profit-per-hour')} <span>0</span> <small> /hr</small></p>
                </div>
            </div>
        </>
    )
}
