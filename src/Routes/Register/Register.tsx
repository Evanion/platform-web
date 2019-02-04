import React from 'react';
import { FormattedMessage } from 'react-intl';
import { RouteComponentProps, Link } from 'react-router-dom';
import messages from './messages';

import './Register.scss';
import ROUTEMAP from '../../Services/ROUTEMAP';
import { Message, Icon } from 'semantic-ui-react';
import RegisterForm from './Components/RegisterForm';

const Register = (props: RouteComponentProps) => {
  const onSuccess = () => {
    props.history.push(ROUTEMAP.HOME);
  };

  return (
    <div className={'register-page'}>
      <div className="register-form-wrapper">
        <Message attached header={<FormattedMessage {...messages.title} />} />
        <RegisterForm attached={true} onSuccess={onSuccess} />
        <Message attached="bottom" warning>
          <Icon name="help" />
          <FormattedMessage
            {...messages.loginMessage}
            values={{
              link: (
                <Link to={ROUTEMAP.LOGIN}>
                  <FormattedMessage {...messages.loginMessageCTA} />
                </Link>
              )
            }}
          />
        </Message>
      </div>
    </div>
  );
};

export default Register;
