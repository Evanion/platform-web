import { defineMessages } from 'react-intl';

export const scope = 'NotFound';

export default defineMessages({
  title: {
    id: `${scope}.PageTitle`,
    defaultMessage: 'NotFound',
    description: 'The pagetitle for NotFound',
  },
  resourceNotFoundMessage: {
    id: `${scope}.resourceNotFoundMessage`,
    defaultMessage: 'The page you are looking for was not found',
    description: 'The pagetitle for NotFound',
  },
});
