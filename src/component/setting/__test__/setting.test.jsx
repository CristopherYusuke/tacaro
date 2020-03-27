import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app';
import Setting from '..';

describe('setting', () => {
  test('test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Setting />)).toEqual({});
  });
});
