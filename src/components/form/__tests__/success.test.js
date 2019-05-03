import React from 'react';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import Success from '../success';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const testData = {
    "echo": {
        "assistance_request": {
            "service_type": "benefits",
            "description": "test",
            "contact": {
                "first_name": "testFirstName",
                "last_name": "testLastName",
                "email": "test@test.com"
            }
        }
    },
    "message": "Your assistance request has been successfully submitted."
}

test('success renders successfully', () => {
  const { container, getByText } = render(<Success {...testData.echo} />);
  expect(getByText('Success!!!')).toHaveTextContent('Success!!!');
  expect(container.querySelectorAll('p')[0].innerHTML).toEqual(
    'Hi testFirstName testLastName'
  );
  expect(container.querySelectorAll('p')[1].innerHTML).toEqual(
    'Your request for benefits was successfully completed.'
  );
})

test('success writes info to localStorage',  () => {
  const { container, getByText } = render(<Success {...testData.echo} />);
  const storedData = localStorage.getItem('test@test.com');
  const data = JSON.parse(storedData);
  expect(data.firstName).toEqual('testFirstName');
  expect(data.lastName).toEqual('testLastName');
  expect(data.serviceType).toEqual('benefits');
})
