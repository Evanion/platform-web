import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

interface Props {
  auth: boolean;
  children: React.ReactNode;
  location?: string;
  redirect?: string;
  [key: string]: any;
}

const AuthRouteSwitch = (props: Props) => {
  const { auth, children, location, redirect = '/login', ...rest } = props;
  return (
    <Switch {...rest}>
      {auth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: redirect,
            state: { from: location }
          }}
        />
      )}
    </Switch>
  );
};

export default AuthRouteSwitch;
