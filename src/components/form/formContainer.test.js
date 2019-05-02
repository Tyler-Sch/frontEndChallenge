import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import FormContainer from './formContainer';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';

afterEach(cleanup);

const testData = {
    "data": [
        {
            "display_name": "Benefits",
            "id": "benefits"
        },
        {
            "display_name": "Employment",
            "id": "employment"
        },
        {
            "display_name": "Healthcare",
            "id": "healthcare"
        },
        {
            "display_name": "Housing",
            "id": "housing"
        },
        {
            "display_name": "Legal",
            "id": "legal"
        }
    ]
};


test('component makes initial api call', async () => {

    axiosMock.get.mockResolvedValueOnce({'data': testData});

    const { container, getByText } = render(<FormContainer />);
    expect(getByText('Loading...').textContent).toBe('Loading... ');


});
