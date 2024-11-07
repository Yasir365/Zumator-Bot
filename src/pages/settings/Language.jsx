import React, { useEffect } from 'react';
import { languages } from '../../services/data.service';
import { useTranslation } from 'react-i18next';

export default function Language() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = React.useState('English');

    useEffect(() => {
        let temp = localStorage.getItem('language');
        setSelectedLanguage(temp ? temp : 'English');
        if (temp) {
            i18n.changeLanguage(temp.value);
        }
    }, [i18n]);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.value);
        localStorage.setItem('language', lang.name);
        setSelectedLanguage(lang.name);
    };

    return (
        <div className='settings-pages'>
            <h3 className='heading'>{t('Select Language')}</h3>

            <ul>
                {
                    languages.map((item, index) => (
                        <li className='item' key={index} onClick={() => changeLanguage(item)} >
                            <div className='title'>{t(item.name)}</div>
                            {item.name === selectedLanguage ? (<i className="fa-solid fa-check"></i>) : null}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
