import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../components/Footer';

describe('<Footer />', () => {
  test('should display copyright text with the correct year', () => {
    render(<Footer />);

    const text = screen.getByText('Jacob Sullivan');

    expect(text).toBeInTheDocument();
    expect('2022').toBeInTheDocument();
  });
});
