import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('<Button />', () => {
  it('render Button', () => {
    const wrapper = shallow(<Button>hello world</Button>);
    expect(wrapper.children().text()).toEqual('hello world');
  });
  it('render Button style', () => {
    const wrapper = shallow(<Button>hello world</Button>);
    expect(wrapper.prop('className')).toContain('large');
    expect(wrapper.prop('className')).toContain('bold');
  });
});
