import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

describe('<Menu />', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu />, div);
  });
});
