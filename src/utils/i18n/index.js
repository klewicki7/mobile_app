import i18n from 'i18n-js';

import translations from './translations';

i18n.defaultLocale = "es";
i18n.locale = 'es'; //RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = {
    pt: translations['pt'],
    es: translations['es'],
    fr: translations['fr'],
    en: translations['en'],
};

export default i18n;