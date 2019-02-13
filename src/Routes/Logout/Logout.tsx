import React from 'react';
import { injectIntl } from 'react-intl';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import messages from './messages';
import ROUTEMAP from '../../Services/ROUTEMAP';

import './Logout.scss';
import { isAuthenticated, logout } from '../../Services/User';
import { toast } from '../../Components/Toast/Toast';

const Logout = ({ intl }: any) => {
  if (!isAuthenticated()) {
    return <Redirect to={ROUTEMAP.LOGIN} />;
  }

  try {
    logout().then(() =>
      toast({
        title: intl.formatMessage(messages.toastTitle),
        description: intl.formatMessage(messages.toastDescription),
        type: 'info',
        icon: 'user delete',
      }),
    );
  } finally {
    return <Redirect to={ROUTEMAP.HOME} />;
  }
};

export default injectIntl(Logout);
