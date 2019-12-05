import React from 'react';
import Display from './Display';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';





test('Ball hdader is found', () => {
  const { getByText } = render(<Display />);

  // assert that the "Ball" header is on the DOM
  getByText(/Ball/i);
});




test('Strikes hdader is found', () => {
  const { getByText } = render(<Display />);

  // assert that the "Strikes" header is on the DOM
  getByText(/Strikes/i);
});


test('Strike button is found', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/strike/i);
});


test('Ball button is found', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/Ball/i);
});

test('Foul button is found', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/Foul/i);
});

test('Hit button is found', () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId(/Hit/i);
});


















// const help = require('./setupTests');

// describe('sum function', () => {
//   it('sums two integers', () => {
//     const expected = 6;
//     const actual = help.sum(1, 5);
//     expect(actual).toBe(expected); // .toBe() looks for strict equality!
//   });

//   it('less than the actual', () => {
//     const a = 5000;
//     const actual = help.sum(1, 5);
//     expect(actual).toBeLessThan(a); // .toBe() looks for strict equality!
//   });

//   it('not.toBe', () => {
//     const a = 5000;
//     const actual = help.sum(1, 5);
//     expect(actual).not.toBe(a); // .toBe() looks for strict equality!
//   });
// });


