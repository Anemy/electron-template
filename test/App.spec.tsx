import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

describe('App', () => {
  it('should display "Hello world"', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.text()).toEqual('Hello World');
  });
});
