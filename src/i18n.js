import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../public/locales/en/translation.json';
import frTranslation from '../public/locales/fr/translation.json';
import hiTranslation from '../public/locales/hi/translation.json';
import esTranslation from '../public/locales/es/translation.json';
import ruTranslation from '../public/locales/ru/translation.json';
import ptTranslation from '../public/locales/pt/translation.json';
import arTranslation from '../public/locales/ar/translation.json';
import faTranslation from '../public/locales/fa/translation.json';
import zhTranslation from '../public/locales/zh/translation.json';
import jaTranslation from '../public/locales/ja/translation.json';
import filTranslation from '../public/locales/fil/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation },
            es: { translation: esTranslation },
            ru: { translation: ruTranslation },
            pt: { translation: ptTranslation },
            hi: { translation: hiTranslation },
            ar: { translation: arTranslation },
            fa: { translation: faTranslation },
            zh: { translation: zhTranslation },
            ja: { translation: jaTranslation },
            fil: { translation: filTranslation },
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
