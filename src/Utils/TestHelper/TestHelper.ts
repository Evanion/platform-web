import React, { ReactElement } from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
const messages = require('../../Locales/en'); // en.json

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node: ReactElement<any>) {
  return React.cloneElement(node, { intl });
}

export function shallowWithIntl(
  node: ReactElement<any>,
  { context = {}, ...additionalOptions } = {},
) {
  return shallow(nodeWithIntlProp(node), {
    context: { ...context, intl },
    ...additionalOptions,
  });
}

export function mountWithIntl(
  node: ReactElement<any>,
  { context = {}, childContextTypes = {}, ...additionalOptions } = {},
) {
  return mount(nodeWithIntlProp(node), {
    context: { ...context, intl },
    childContextTypes: { intl: intlShape, ...childContextTypes },
    ...additionalOptions,
  });
}
