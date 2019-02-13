import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

test('failing', () => {
  expect(4).toBe(5);
});
