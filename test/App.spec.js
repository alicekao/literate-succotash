import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import App from '../src/components/App';
import SearchBar from '../src/components/SearchBar';

describe('< App />', () => {
  it('Expects true to be true', () => expect(true).to.be.true);

  // it('Calls componentDidMount', () => {
  //   spy(App.prototype, 'componentDidMount');
  //   const wrapper = mount(<App />);
  //   expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  // });

  it('Contains a navbar', () => {
    const app = shallow(<App />);
    const navbar = app.find('NavBar');
    expect(navbar.length).to.equal(1);
  });

  it('Has className main', () => {
    const app = shallow(<App />);
    expect(app.hasClass('main')).to.equal(true);
  });

});

xdescribe('<SearchBar />', () => {
  it('Contains an input field', () => {
    const SearchBar = shallow(<SearchBar />);
    expect(SearchBar.find('input')).to.equal(true);
  });
})
