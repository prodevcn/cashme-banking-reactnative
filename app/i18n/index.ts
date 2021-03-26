import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import en from './translations/en.json';
import hy from './translations/hy.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage'],
    },
    fallbackLng: 'hy',
    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.',

    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },

    react: {
      useSuspense: false,
    },
  });

i18n.addResourceBundle('en', 'translations', en);
i18n.addResourceBundle('hy', 'translations', hy);

export default i18n;
