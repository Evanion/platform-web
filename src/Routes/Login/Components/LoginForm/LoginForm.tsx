import React from 'react';
import { FormattedMessage, injectIntl, InjectedIntlProps } from 'react-intl';
import { Button, Form } from 'formik-semantic-ui';
import messages from './messages';
import { toast } from '../../../../Components/Toast/Toast';
import ROUTEMAP from '../../../../Services/ROUTEMAP';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import * as User from '../../../../Services/User/User';

interface Props extends InjectedIntlProps {
  className?: string;
  attached?: boolean;
  onSuccess: (result: any) => void;
  onError?: (error: any) => void;
}

class LoginForm extends React.Component<Props> {
  private readonly intl = this.props.intl.formatMessage;
  private readonly messages = {
    validateEmailError: this.intl(messages.validateEmailError),
    validateEmailRequired: this.intl(messages.validateEmailRequired),
    validatePasswordShort: this.intl(messages.validatePasswordShort),
    validatePasswordRequired: this.intl(messages.validatePasswordRequired),
    fieldLabelEmail: this.intl(messages.fieldLabelEmail),
    fieldLabelPassword: this.intl(messages.fieldLabelPassword),
    toastTitleSuccess: this.intl(messages.toastTitleSuccess),
    toastMessageSuccess: this.intl(messages.toastMessageSuccess),
    toastTitleError: this.intl(messages.toastTitleError),
    toastMessageError: this.intl(messages.toastMessageError)
  };

  private readonly validate = Yup.object().shape({
    email: Yup.string()
      .email(this.messages.validateEmailError)
      .required(this.messages.validateEmailRequired),
    password: Yup.string()
      .min(6, this.messages.validatePasswordShort)
      .required(this.messages.validatePasswordRequired)
  });

  private readonly formSchema = {
    email: {
      type: 'email',
      required: true,
      label: this.messages.fieldLabelEmail
    },
    password: {
      type: 'password',
      required: true,
      label: this.messages.fieldLabelPassword
    }
  };

  private readonly onSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const result = await User.login(values);

      toast({
        title: this.messages.toastTitleSuccess,
        description: this.messages.toastMessageSuccess,
        icon: 'user',
        type: 'success'
      });

      this.props.onSuccess(result);
    } catch (error) {
      toast({
        title: this.messages.toastTitleError,
        description: this.messages.toastMessageError,
        icon: 'user',
        type: 'error'
      });
      if (typeof this.props.onError === 'function') {
        this.props.onError(error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  private readonly buttons = (props: any) => (
    <Form.Children>
      <Button.Submit primary>
        <FormattedMessage {...messages.buttonLabelLogin} />
      </Button.Submit>
      <Link to={ROUTEMAP.FORGOT_PASSWORD} className="ui basic button">
        <FormattedMessage {...messages.buttonLabelRecovery} />
      </Link>
    </Form.Children>
  );

  public render() {
    const { attached } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        schema={this.formSchema}
        className={`segment${attached ? ' attached' : ''} ${
          this.props.className ? this.props.className : ''
        }`}
        validationSchema={this.validate}
        render={this.buttons}
      />
    );
  }
}

export default injectIntl(LoginForm);
