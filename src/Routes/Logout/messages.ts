import { defineMessages } from 'react-intl';

export const scope = 'Logout';

export default defineMessages({
  title: {
    id: `${scope}.PageTitle`,
    defaultMessage: 'Logout',
    description: 'The pagetitle for Logout',
  },
  toastTitle: {
    id: `${scope}.ToastTitle`,
    defaultMessage: 'Logout',
    description:
      'The title for the toast message that the user have been logged out',
  },
  toastDescription: {
    id: `${scope}.ToastDescription`,
    defaultMessage: 'You have been logged out',
    description:
      'The description for the toast message that the user have been logged out',
  },
});
