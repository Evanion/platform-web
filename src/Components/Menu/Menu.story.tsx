import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  boolean,
  select,
  number,
  radios,
  object,
} from '@storybook/addon-knobs';
import Menu from './Menu';
import { MemoryRouter } from 'react-router';
import { action } from '@storybook/addon-actions';

const color = [
  '',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];
const fixed = ['', 'left', 'right', 'bottom', 'top'];

storiesOf('Components/Menu', module)
  .addParameters({ jest: ['Menu'] })
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const menu: any = {
      attached: select('Attached', ['', 'true', 'top', 'bottom'], ''),
      borderless: boolean('Borderless', false),
      color: select('Color', color, ''),
      compact: boolean('Compact', false),
      fixed: select('Fixed', fixed, ''),
      floated: select('Floated', ['', 'true', 'right'], ''),
      fluid: boolean('Fluid', false),
      icon: select('Icon', ['', 'true', 'labeled'], ''),
      pointing: boolean('Pointing', false),
      secondary: boolean('Secondary', false),
      size: select(
        'Size',
        ['', 'mini', 'small', 'large', 'huge', 'massive'],
        '',
      ),
      stackable: boolean('Stackable', false),
      tabular: select('Tabular', ['', 'true', 'right'], ''),
      text: boolean('Text', false),
      vertical: boolean('Vertical', false),
      widths: select(
        'Widths',
        ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        '',
      ),
    };
    Object.keys(menu).forEach(key => {
      let item = menu[key];
      switch (item) {
        case '':
          item = undefined;
          break;
        case 'true':
          item = true;
          break;
        case 'false':
          item = false;
          break;
        default:
          break;
      }
      menu[key] = item;
    });

    menu.onItemClick = action('item-click');

    const items = [];
    if (boolean('Menu logo', true)) {
      items.push({ label: 'Platform', path: '/', type: 'logo', key: 'logo' });
    }

    const menuItems = number('menu items', 3);
    let index = 0;
    do {
      if (index) {
        items.push({
          label: `link ${index}`,
          path: `/link${index}`,
          type: 'link',
          key: `link${index}`,
        });
      }

      index = index + 1;
    } while (index <= menuItems);

    return (
      <MemoryRouter>
        <Menu items={items} {...menu} />
      </MemoryRouter>
    );
  });
