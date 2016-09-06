import {shallow} from 'enzyme';
import React from 'react';

import CommentApp from '../../src/components/comment-app';

describe('CommentApp', () => {
  it('should render a div', () => {
    const wrapper = shallow(<CommentApp />);

    expect(wrapper.find('div').length).toBe(1);
  });
});
