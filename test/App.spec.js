import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import App from '../src/components/App';
import SearchBar from '../src/components/SearchBar';
import NavBar from '../src/components/NavBar';

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

describe('<SearchBar />', () => {
  it('Contains an input field', () => {
    const searchbar = shallow(<SearchBar />);
    expect(searchbar.find('input')).to.have.length(1);
  });
  it('Contains a button field', () => {
    const searchbar = shallow(<SearchBar />);
    expect(searchbar.find('button')).to.have.length(1);
  });
  it('Simulates click events', () => {
    const onButtonClick = sinon.spy();
    const searchbar = shallow(<SearchBar onClick={onButtonClick} />);
    searchbar.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});

describe('<NavBar />', () => {
  it('Contains the searchbar', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find('SearchBar')).to.have.length(1);
  })
});
