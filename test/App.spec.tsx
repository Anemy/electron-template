import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
  it('should display the title "Title"', () => {
    render(
      <App />
    );

    expect(screen.getByText('Title')).toBeVisible();
  });
});
