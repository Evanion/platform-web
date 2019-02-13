import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import messages from './messages';

import './NotFound.scss';
import { Segment, Header, Icon } from 'semantic-ui-react';

const NotFound = (props: RouteComponentProps) => {
  return (
    <div className="not-found-page">
      <div>
        <Header icon style={{ display: 'block' }}>
          <Icon name="search" />
          <FormattedMessage {...messages.title} />
        </Header>
        <div>
          <FormattedMessage {...messages.resourceNotFoundMessage} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
