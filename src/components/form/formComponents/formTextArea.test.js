import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import TextAreaInput from './formTextAreaInput';
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
