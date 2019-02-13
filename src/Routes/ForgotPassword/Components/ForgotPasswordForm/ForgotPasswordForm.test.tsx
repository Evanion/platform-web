import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import ForgotPasswordForm from './ForgotPasswordForm';

const intlProps = { locale: 'en' };

const onSuccessSpy = jest.fn();

describe('ForgotPasswordForm', () => {
  it('renders correctly', () => {
    shallow(
      <IntlProvider {...intlProps}>
        <ForgotPasswordForm onSuccess={onSuccessSpy} />
      </IntlProvider>,
    );
  });
});
