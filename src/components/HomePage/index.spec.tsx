import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import HomePage from '.';

const wrapper = shallow(<HomePage />);

describe('HomePage Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello World');
  });
});
