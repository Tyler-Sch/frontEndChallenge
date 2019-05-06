import React from 'react';
import ReactDOM from 'react-dom';
import App from '../formContainer';
import { act } from 'react-dom/test-utils';

const testData = {"data": [
        {
            "display_name": "Benefits",
            "id": "benefits"
        },
        {
            "display_name": "Employment",
            "id": "employment"
        },
    ]
  }


it("should display fetched data", () => {
  // a rather simple mock, you might use something more advanced for your needs
  // jest.useFakeTimers();
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(testData);
        })
}))

  const el = document.createElement('div');
  act(() => {
    ReactDOM.render(<App />, el);
  })
  expect(el.querySelector('h1').innerHTML).toBe('Loading... ');

  // act(() => {
  //   jest.runAllImmediates();
  // });
  process.nextTick(() => {

    expect(el.querySelector('h2').innerHTML).toBe('New Assistance Request');
    expect(el.querySelectorAll('select').length).toBe(1);
    expect(el.querySelectorAll('option').length).toBe(3);
    expect(el.querySelectorAll('option')[2].innerHTML).toBe('Employment');

  });
})
