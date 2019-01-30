import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps, Link, Redirect } from 'react-router-dom';
import messages from './messages';
import './Login.scss';
import { Message, Icon } from 'semantic-ui-react';
import ROUTEMAP from '../../Utils/ROUTEMAP';
import LoginForm from './Components/LoginForm/LoginForm';
import { isAuthenticated } from '../../Services/User';

const Login = (props: RouteComponentProps) => { 
  if(isAuthenticated()) {
    return <Redirect to={ROUTEMAP.HOME} />;
  }

  const onSuccess = () => {
    props.history.push(ROUTEMAP.HOME);
  }
  
  return (
    <div data-test="login-page" className="login-page">
      <div >
        <Message 
          attached
          header={<FormattedMessage {...messages.title} />} />
        <LoginForm attached={true} onSuccess={onSuccess} />
        <Message 
          attached="bottom"
          warning>
          <Icon name="help" />
          <FormattedMessage {...messages.registerMessage} values={{link:(<Link to={ROUTEMAP.REGISTER}><FormattedMessage {...messages.registerMessageCTA} /></Link>)}} />
        </Message>
      </div>
    </div>
  );
}

export default Login;
