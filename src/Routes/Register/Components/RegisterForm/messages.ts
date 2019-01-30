import { defineMessages } from 'react-intl';

export const scope = 'RegisterForm';

export default defineMessages({
  title: {
    id: `${scope}.name`,
    defaultMessage: 'RegisterForm',
    description: 'The pagetitle for RegisterForm',
  },
  fieldLabelDisplayName: {
    id: `${scope}.FieldLabelDisplayName`,
    defaultMessage: 'Display name',
    description: 'The label for the displayName field',
  },
  fieldLabelEmail: {
    id: `${scope}.FieldLabelEmail`,
    defaultMessage: 'E-mail',
    description: 'The label for the email field',
  },
  fieldLabelPassword: {
    id: `${scope}.FieldLabelPassword`,
    defaultMessage: 'Password',
    description: 'The label for the password field',
  },
  fieldLabelConfirmPassword: {
    id: `${scope}.FieldLabelPassword`,
    defaultMessage: 'Confirm Password',
    description: 'The label for the cofnirm password field',
  },
  buttonLabelRegister: {
    id: `${scope}.ButtonLabelRegister`,
    defaultMessage: 'Register',
    description: 'The label for the register form submit button',
  },
  buttonLabelRecovery: {
    id: `${scope}.ButtonLabelRecovery`,
    defaultMessage: 'Forgot password',
    description: 'The label for the register forms password recovery button',
  },
  toastTitleSuccess: {
    id: `${scope}.ToastTitleSuccess`,
    defaultMessage: 'Registration complete!',
    description: 'Title of the toast message when the user is logged in',
  },
  toastMessageSuccess: {
    id: `${scope}.ToastMessageSuccess`,
    defaultMessage: 'You have registered',
    description: 'The label for the register forms password recovery button',
  },
  toastTitleError: {
    id: `${scope}.ToastTitleError`,
    defaultMessage: 'Registration failed',
    description: 'Title of the toast message when the user is logged in',
  },
  toastMessageError: {
    id: `${scope}.ToastMessageError`,
    defaultMessage: 'We where unable to register you.',
    description: 'The label for the register forms password recovery button',
  },
  validateEmailError: {
    id: `${scope}.ValidateEmailError`,
    defaultMessage: 'E-mail is not valid',
    description: 'The label for the register forms password recovery button',
  },
  validateFieldRequired: {
    id: `${scope}.ValidateFieldRequired`,
    defaultMessage: 'This field is required',
    description: 'A validation message that the field is required',
  },
  validatePasswordShort: {
    id: `${scope}.ValidatePasswordShort`,
    defaultMessage: 'Minimum 6 characters',
    description: 'The label for the register forms password recovery button',
  },
  validateConfirmPasswordError: {
    id: `${scope}.ValidateConfirmPasswordError`,
    defaultMessage: 'This field needs to match the password field',
    description: 'The label for the register forms password recovery button',
  },
});
