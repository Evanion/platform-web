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

class ForgotPasswordForm extends React.Component<Props> {
  private readonly intl = this.props.intl.formatMessage;

  private readonly validate = Yup.object().shape({
    email: Yup.string()
      .email(this.intl(messages.validateEmailError))
      .required(this.intl(messages.validateEmailRequired)),
  });

  private readonly formSchema = {
    email: {
      type: 'email',
      required: true,
      label: this.intl(messages.fieldLabelEmail),
    },
  };

  private readonly onSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const result = await User.requestResetPassword(values);
      console.log('request', result);
      toast({
        title: this.intl(messages.toastTitleSuccess),
        description: this.intl(messages.toastMessageSuccess),
        icon: 'user',
        type: 'success',
      });

      this.props.onSuccess(result);
    } catch (error) {
      toast({
        title: this.intl(messages.toastTitleError),
        description: this.intl(messages.toastMessageError),
        icon: 'user',
        type: 'error',
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
        <FormattedMessage {...messages.buttonLabelRequestReset} />
      </Button.Submit>
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

export default injectIntl(ForgotPasswordForm);
