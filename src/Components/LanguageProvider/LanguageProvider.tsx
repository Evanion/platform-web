import React from 'react';
import { IntlProvider } from 'react-intl';
import { Locale, messages } from './i18n';

interface Props {
  [key: string]: any;
}

const LanguageProvider = (props: Props) => (
  <IntlProvider locale={Locale} messages={messages[Locale]} {...props} />
);
export default LanguageProvider;
