import React from 'react';
import { Link } from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

interface Props {
  label: string;
  path: string;
  [key: string]: any;
}

const Logo = (props: Props) => {
  return <Menu.Item as={Link} to={props.path} header>{props.label}</Menu.Item>;
};

export default Logo;
