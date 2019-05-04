import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import SelectInput from '../formSelectInput';
import 'jest-dom/extend-expect';

afterEach(cleanup);

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

const options = inputData.map((op, idx) => (
  <option key={idx} value={ op.id } >
      { op.display_name }
  </option>
));

test('component renders correctly', () => {

  const mockChange = jest.fn();

  const { container } = render(
    <SelectInput
      onchange={ mockChange }
      placeholder="holder"
      smallText="test"
      value=""
    > { options }
  </SelectInput>
  );

  const optionList = container.querySelectorAll("option");
  expect(optionList.length).toBe(3);
  expect(optionList[0].textContent).toBe('holder');
  expect(optionList[1].textContent).toBe('item 1');
  expect(optionList[1].value).toBe('id 1');
  expect(optionList[2].textContent).toBe('item 2');
  expect(optionList[2].value).toBe('id 2');

  expect(container.querySelector('small').textContent).toBe('test');

  fireEvent.change(container.querySelector('select'), {'target':{'value': 'id 2'}});
  expect(mockChange).toHaveBeenCalledTimes(1);
  expect(mockChange.mock.calls[0][0]).toBe('id 2')

})

test('small disappears when text entered', () => {
  const mockChange = jest.fn();
  const { container, getByText, rerender} = render(
    <SelectInput
      onchange={ mockChange }
      placeholder="holder"
      smallText="required"
      value=""
    >
    { options }
  </SelectInput>
  );
  const selectNode = container.querySelector('select');
  expect(selectNode.value).toBe('');
  const smallNode = getByText('required');
  expect(smallNode.style.display).toBe('inline');
  rerender(
    <SelectInput
      options={ inputData }
      onchange={ mockChange }
      placeholder="holder"
      smallText="required"
      value="id 1"
    />
);
  expect(smallNode.style.display).toBe('none');

})
