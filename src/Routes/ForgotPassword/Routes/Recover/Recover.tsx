import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import messages from './messages';

import './Recover.scss';

const Recover = (props: RouteComponentProps) => {
  return <div className={'recover-page'}><FormattedMessage {...messages.title} /></div>;
};

export default Recover;
