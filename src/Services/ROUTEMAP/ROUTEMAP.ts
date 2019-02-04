interface States {
  [state: string]: string;
}
function ROUTEMAP() {
  const states: States = {};
  /**
   * home route - displays the dashboard when you login.
   */
  states.HOME = '/';

  /**
   * register route - displays the registration screen.
   */
  states.REGISTER = '/register';

  /**
   * login route - displays the login screen.
   */
  states.LOGIN = '/login';

  /**
   * logout route - performs the logout actions.
   */
  states.LOGOUT = '/logout';

  /**
   * forgot password - displays the first step in password recovery
   */
  states.FORGOT_PASSWORD = '/forgot-password';

  /**
   * forgot password - displays the first step in password recovery
   */
  states.RESET_PASSWORD = `${states.FORGOT_PASSWORD}/:code`;

  /**
   * forgot password - displays the first step in password recovery
   */
  states.ACCOUNT = '/account';

  /* --- route map --- */

  return states;
}

export default ROUTEMAP();
