import { defineMessages } from 'react-intl';

export const scope = 'Request';

export default defineMessages({
  title: {
    id: `${scope}.PageTitle`,
    defaultMessage: 'Request',
    description: 'The pagetitle for Request',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Here you can request a reset of your password. Just add you e-mail below, and then check your mailbox',
    description: 'Informational text explaining what the form is for',
  },
});
