import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {data} from "./data/data";

test('renders learn react link', () => {
    render(<App data={data} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
