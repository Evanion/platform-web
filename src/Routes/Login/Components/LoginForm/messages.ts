import { defineMessages } from 'react-intl';

export const scope = 'LoginForm';

export default defineMessages({
  title: {
    id: `${scope}.name`,
    defaultMessage: 'LoginForm',
    description: 'The pagetitle for LoginForm',
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
  buttonLabelLogin: {
    id: `${scope}.ButtonLabelLogin`,
    defaultMessage: 'Login',
    description: 'The label for the login form submit button',
  },
  buttonLabelRecovery: {
    id: `${scope}.ButtonLabelRecovery`,
    defaultMessage: 'Forgot password',
    description: 'The label for the login forms password recovery button',
  },
  toastTitleSuccess: {
    id: `${scope}.ToastTitleSuccess`,
    defaultMessage: 'Logged in',
    description: 'Title of the toast message when the user is logged in',
  },
  toastMessageSuccess: {
    id: `${scope}.ToastMessageSuccess`,
    defaultMessage: 'You have been logged in',
    description: 'The label for the login forms password recovery button',
  },
  toastTitleError: {
    id: `${scope}.ToastTitleError`,
    defaultMessage: 'Login failed',
    description: 'Title of the toast message when the user is logged in',
  },
  toastMessageError: {
    id: `${scope}.ToastMessageError`,
    defaultMessage: 'We where unable to log you in.',
    description: 'The label for the login forms password recovery button',
  },
  validateEmailError: {
    id: `${scope}.ValidateEmailError`,
    defaultMessage: 'E-mail is not valid',
    description: 'The label for the login forms password recovery button',
  },
  validateEmailRequired: {
    id: `${scope}.ValidateEmailRequired`,
    defaultMessage: 'E-mail is required',
    description: 'The label for the login forms password recovery button',
  },
  validatePasswordShort: {
    id: `${scope}.ValidatePasswordShort`,
    defaultMessage: 'Minimum 6 characters',
    description: 'The label for the login forms password recovery button',
  },
  validatePasswordRequired: {
    id: `${scope}.ValidatePasswordRequired`,
    defaultMessage: 'Password is required',
    description: 'The label for the login forms password recovery button',
  }
});
