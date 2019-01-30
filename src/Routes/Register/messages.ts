import { defineMessages } from 'react-intl';

export const scope = 'Register';

export default defineMessages({
  title: {
    id: `${scope}.PageTitle`,
    defaultMessage: 'Register',
    description: 'The pagetitle for Register',
  },
  loginMessage: {
    id: `${scope}.MessageLogin`,
    defaultMessage: 'Already have an account? {link} instead.',
    description: 'A CTA message for the user to login',
  },
  loginMessageCTA: {
    id: `${scope}.MessageLoginCTA`,
    defaultMessage: 'Login',
    description: 'A CTA link for the user to login',
  }
});
