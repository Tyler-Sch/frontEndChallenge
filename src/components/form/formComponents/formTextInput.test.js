import React from 'react';
import { render, cleanup } from 'react-testing-library';
import TextInput from './formTextInput';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test('loads and displays correct input area', () => {
  const change = '';
  const { getByPlaceholderText } = render(
    <TextInput
      type="text"
      value=""
      onchange={ e => change = e.target.value }
      placeholder="test text"
      smallText="required"
    />
  )
    expect(getByPlaceholderText('test text')).toHaveAttribute('value')

})
