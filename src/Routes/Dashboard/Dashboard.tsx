import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps, Link } from 'react-router-dom';
import messages from './messages';

import './Dashboard.scss';
import { Button } from 'semantic-ui-react';
import ROUTEMAP from '../../Services/ROUTEMAP';

const Dashboard = (props: RouteComponentProps) => {
  return (
    <div data-test="dashboard-page" className={'dashboard-page'}>
      <FormattedMessage {...messages.title} />
      <Button as={Link} to={ROUTEMAP.LOGOUT}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
