import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import messages from './messages';

import './Account.scss';

const Account = (props: RouteComponentProps) => {
  return <div className={'account-page'}><FormattedMessage {...messages.title} /></div>;
};

export default Account;
