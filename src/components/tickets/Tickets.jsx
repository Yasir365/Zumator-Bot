import { useTranslation } from 'react-i18next';

export default function Tickets() {
    const { t } = useTranslation();
    return (
        <div>
            <p>{t('Tickets')}</p>
            <span>05/10</span>
        </div>
    )
}
