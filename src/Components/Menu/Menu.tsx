import React from 'react';
import { Menu } from 'semantic-ui-react';
import MenuLink from './Components/MenuLink';
import MenuLogo from './Components/MenuLogo';

export interface MenuItem {
  key: string;
  label: string;
  path: string;
  exact?: boolean;
  type: string;
}
interface Props {
  attached?: 'top' | 'bottom';
  borderless?: boolean;
  items: MenuItem[];
  [key: string]: any;
}

const MainMenu = ({ items, ...rest }: Props) => {
  return (
    <Menu {...rest}>
      {items &&
        items.map(item => {
          switch (item.type) {
            case 'link':
              return <MenuLink key={item.key} {...item} />;
            case 'logo':
              return <MenuLogo key={item.key} {...item} />;
          }
        })}
    </Menu>
  );
};

export default MainMenu;
