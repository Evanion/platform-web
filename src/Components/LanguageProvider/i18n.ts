import { addLocaleData } from 'react-intl';
import formatTranslationMessages from './utils/formatTranslationMessages';
import { appLocales, DEFAULT_LOCALE, deviceLocale } from './utils/settings';

/** English */
import enLocaleData from 'react-intl/locale-data/en';
import enAppData from '../../Locales/en.json';

addLocaleData(enLocaleData);

/** Swedish */
import svLocaleData from 'react-intl/locale-data/sv';
import svAppData from '../../Locales/sv.json';
addLocaleData(svLocaleData);

export const Locale = appLocales.includes(deviceLocale)
  ? deviceLocale
  : DEFAULT_LOCALE;

export const messages = {
  en: formatTranslationMessages('en', enAppData),
  sv: formatTranslationMessages('sv', svAppData)
};
