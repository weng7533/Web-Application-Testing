import React from 'react';
import Display from './Display';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';





test('Ball header is found', () => {
  const wrapper = rtl.render(<Display />);
  const strikes = wrapper.getByText(/Strikes/i);
  expect(strikes.textContent).toMatch(/Strikes/i);

});




test('Strikes header is found', () => {
  const wrapper = rtl.render(<Display />);
  const strikes = wrapper.getByText(/Strikes/i);
  expect(strikes.textContent).toMatch(/Strikes/i);
  // assert that the "Strikes" header is on the DOM
  // getByText(/Strikes/i).toBeInDocument();

});


test('Strike button is found', () => {
  // const { getByTestId } = rtl.render(<Dashboard />);
  // getByTestId(/strike/i).toMatch(/strike/i);

  const wrapper = rtl.render(<Dashboard />);
  const strikes = wrapper.getByTestId(/strike/i);
  expect(strikes.textContent).toMatch(/strike/i);
});


test('Ball button is found', () => {
  // const { getByTestId } = rtl.render(<Dashboard />);
  // getByTestId(/Ball/i).toMatch(/Ball/i);

  const wrapper = rtl.render(<Dashboard />);
  const strikes = wrapper.getByTestId(/Ball/i);
  expect(strikes.textContent).toMatch(/Ball/i);
});

test('Foul button is found', () => {
  // const { getByTestId } = rtl.render(<Dashboard />);
  // getByTestId(/Foul/i).toMatch(/Foul/i);

  const wrapper = rtl.render(<Dashboard />);
  const strikes = wrapper.getByTestId(/Foul/i);
  expect(strikes.textContent).toMatch(/Foul/i);
});

test('Hit button is found', () => {


  // const { getByTestId } = rtl.render(<Dashboard />);
  // getByTestId(/Hit/i).toMatch(/Hit/i);

  const wrapper = rtl.render(<Dashboard />);
  const strikes = wrapper.getByTestId(/Hit/i);
  expect(strikes.textContent).toMatch(/Hit/i);
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


