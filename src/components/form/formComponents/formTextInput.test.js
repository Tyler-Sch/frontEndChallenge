import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import TextInput from './formTextInput';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test('loads and displays correct input area', () => {
  const mockChange = jest.fn();
  const { getByPlaceholderText, container } = render(
    <TextInput
      type="text"
      value=""
      onchange={ mockChange }
      placeholder="test text"
      smallText="required"
    />
  );
    const node = getByPlaceholderText('test text');
    expect(node).toHaveAttribute('value');
    expect(node).toHaveAttribute('placeholder');
    expect(node.placeholder).toEqual('test text');
    expect(node.type).toEqual('text');

    const small_node = container.querySelector('small');
    expect(small_node).toHaveTextContent('required');

    fireEvent.change(node, {'target':{'value':'test'}});
    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toBeCalledWith('test');

})
