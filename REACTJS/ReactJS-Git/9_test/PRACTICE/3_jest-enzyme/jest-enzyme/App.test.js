import Enzyme , {shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('App componet', () => {
  it('increments count by 1 when the increment button is clicked', ()=>{
    const component = shallow(<App />);
    const wrapper = component.find('.app-pages');
    expect(wrapper.length).toBe(1);
  })
})