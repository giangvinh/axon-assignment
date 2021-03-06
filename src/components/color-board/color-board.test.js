import React from 'react';
import { shallow } from 'enzyme';
import ColorBoard from './color-board.component';
import {colorArray} from '../../constants/color';

describe('Color board component', () => {

  it('should render color board component', () => {
    expect(shallow(<ColorBoard />)).toMatchSnapshot();
  });

});
