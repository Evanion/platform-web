import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const consoleError = console.error.bind(console);
// eslint-disable-next-line
console.error = (message: any, ...args: any) => {
  if (
    typeof message === 'string' &&
    message.startsWith('[React Intl] Missing message:')
  ) {
    return;
  }
  consoleError(message, ...args);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
