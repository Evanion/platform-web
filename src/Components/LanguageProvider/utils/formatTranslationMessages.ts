import enAppData from '../../../Locales/en.json';
import { DEFAULT_LOCALE } from './settings';
const formatTranslationMessages = (locale: string, messages: any): any => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enAppData)
      : {};
  const flattenFormattedMessages = (formattedMessages: any, key: string) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return { ...formattedMessages, [key]: formattedMessage };
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export default formatTranslationMessages;
