import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import messages from './messages';
import { Message, Icon, Header } from 'semantic-ui-react';
import './Request.scss';
import ForgotPasswordForm from '../../Components/ForgotPasswordForm';
import ROUTEMAP from '../../../../Utils/ROUTEMAP';
import pathToRegexp from 'path-to-regexp';

const ForgotPassword = (props: RouteComponentProps) => {
  const onSuccess = (code:string) => {
    props.history.push(pathToRegexp.compile(ROUTEMAP.RESET_PASSWORD)({code}))
  }

  return (
    <div data-test="request-page" className={'forgot-password-request-page'}>
      <div>
        <Message attached>
          <Message.Header>
            <FormattedMessage {...messages.title} />
          </Message.Header>
          <Header.Content>
            <FormattedMessage {...messages.description} />
          </Header.Content>
        </Message>
        <ForgotPasswordForm attached={true} onSuccess={onSuccess} />
      </div>
      
    </div>
  );
};

export default ForgotPassword;
