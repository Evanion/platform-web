import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

describe('Toast', () => {
  test('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toast />, div);
  });
});
