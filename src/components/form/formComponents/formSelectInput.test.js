import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import SelectInput from './formSelectInput';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test('component renders correctly', () => {
  const inputData = [
    {
      'display_name': 'item 1',
      'id': 'id 1'
    },
    {
      'display_name': 'item 2',
      'id': 'id 2'
    }
  ];
  const mockChange = jest.fn();

  const { container } = render(
    <SelectInput
      options={ inputData }
      onchange={ mockChange }
      placeholder="holder"
      smallText="test"
    />
  );

  const optionList = container.querySelectorAll("option");
  expect(optionList.length).toBe(3);
  expect(optionList[0].textContent).toBe('holder');
  expect(optionList[1].textContent).toBe('item 1');
  expect(optionList[1].value).toBe('id 1');
  expect(optionList[2].textContent).toBe('item 2');
  expect(optionList[2].value).toBe('id 2');

  expect(container.querySelector('small').textContent).toBe('test');

  // I have no idea how to test the change in a select input
})
