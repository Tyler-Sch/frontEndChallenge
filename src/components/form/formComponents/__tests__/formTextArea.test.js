import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import TextAreaInput from '../formTextAreaInput';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test('component loads and value is displayed', () => {
  const mockChange = jest.fn();
  const { getByText, container } = render(
    <TextAreaInput value='I am a test' onchange={ mockChange } />
  );

  expect(getByText('I am a test').textContent).toBe('I am a test');

  fireEvent.change(container.querySelector('textarea'), {'target': {'value': 'worked'}});
  expect(mockChange).toHaveBeenCalledTimes(1);
  expect(mockChange).toBeCalledWith('worked');
})

test('small disappears when text entered', () => {
  const mockChange = jest.fn();
  const { getByText, rerender} = render(
      <TextAreaInput
        value=''
        onchange={ mockChange }
        smallText="required"
      />
  );
  const smallNode = getByText('required');
  expect(smallNode.style.display).toBe('inline');
  rerender(
    <TextAreaInput
      value='test'
      onchange={ mockChange }
      smallText="required"
    />
  );
  expect(smallNode.style.display).toBe('none');
})
