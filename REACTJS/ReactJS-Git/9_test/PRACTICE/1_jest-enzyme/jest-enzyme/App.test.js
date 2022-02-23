import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App component', () => {
  it('Start with default value', ()=>{
    const component = shallow(<App />);
    const defaultValue = component.find('.default-value');
    expect(defaultValue.text()).toEqual('0');
  })
})