import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Route, NavLink } from 'react-router-dom';
interface Props {
  path: string;
  label: string;
  [key: string]: any;
}

class MenuLink extends React.Component<Props> {
  private readonly Nav = (props: any) => (
    <NavLink {...props} activeClassName="active" />
  );
  public render() {
    const { path, label, exact, ...rest } = this.props;
    const { Nav } = this;
    return (
      <Menu.Item as={Nav} exact={exact} to={path} name={label} {...rest} />
    );
  }
}

export default MenuLink;
