import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from '../formContainer';
import { render, waitForElement, cleanup, fireEvent } from 'react-testing-library';
import FormDataControl from '../formDataControl';


afterEach(cleanup);
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


it("should display fetched data", async () => {
  // a rather simple mock, you might use something more advanced for your needs
  // jest.useFakeTimers();
  global.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve(testData);
        })
  }))
  const { container, getByText } = render(<FormContainer />);
  expect(container.querySelector('h1').innerHTML).toBe('Loading... ');
  await waitForElement(() => getByText('New Assistance Request'));

  expect(container.querySelectorAll('select').length).toBe(1);
  expect(container.querySelectorAll('option').length).toBe(3);
  expect(container.querySelectorAll('option')[2].innerHTML).toBe('Employment');
})
