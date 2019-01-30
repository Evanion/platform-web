import { defineMessages } from 'react-intl';

export const scope = 'Login';

export default defineMessages({
  title: {
    id: `${scope}.PageTitle`,
    defaultMessage: 'Login',
    description: 'The pagetitle for Login',
  },
  registerMessage: {
    id: `${scope}.MessageRegister`,
    defaultMessage: 'Don\'t have an account yet? {link} instead.',
    description: 'A CTA message for the user to register',
  },
  registerMessageCTA: {
    id: `${scope}.MessageRegisterCTA`,
    defaultMessage: 'Register here',
    description: 'A CTA link for the user to register',
  }
});
