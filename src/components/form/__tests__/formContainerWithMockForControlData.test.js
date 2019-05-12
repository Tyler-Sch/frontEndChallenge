import React from 'react';
import ReactDOM from 'react-dom';
import FormDataControl from '../formDataControl';
import FormContainer from '../formContainer';

import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';

afterEach(cleanup);

jest.mock('../formDataControl');

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

const fake_data = {
  'assistance_request': {
    'contact':{
      'first_name': 'testFirst',
      'last_name': 'testLast',
      'email': 'testEmailAddress'
    },
    'service_type': 'test service',
    'description': 'i wrote stuff'
  }
}


it("take valid information and submit to the api, redirect to success", async () => {
  // a rather simple mock, you might use something more advanced for your needs
  // jest.useFakeTimers();
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(testData);
        })
}))

  const { container, getByText } = render(<FormContainer />);
  expect(container.querySelector('h1').innerHTML).toBe('Loading... ')

  await waitForElement(() => getByText('In a mock function!'))
  expect(container.querySelector('button').innerHTML).toBe('make user');
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 201,
        json: () => new Promise((resolve, reject) => {
          resolve({echo: fake_data});
        })
}))
  fireEvent.click(getByText('make user'));
  await waitForElement(() => getByText('Success!!!'));
  expect(container.querySelector('h1').innerHTML).toBe('Success!!!');
  expect(container.querySelector('p').innerHTML).toBe(
    'Hi testFirst testLast'
  );
});

it("throws an error when a non-201 response is returned", async () => {
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(testData);
        })
  }))
  // global.Error = jest.fn().mockImplementation(() => {
  //   throw new Error();
  // });

  const { container, getByText } = render(<FormContainer />);
  expect(container.querySelector('h1').innerHTML).toBe('Loading... ')

  await waitForElement(() => getByText('In a mock function!'))
  expect(container.querySelector('button').innerHTML).toBe('make user');
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 401,
        json: () => new Promise((resolve, reject) => {
          resolve({echo: fake_data});
        })
}))

  fireEvent.click(getByText('make user'));
  await waitForElement(() => getByText('error'));
  try {

    expect(container.querySelector('div').innerHTML).toBe('error');
  }
  catch Erro


})
