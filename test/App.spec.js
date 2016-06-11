import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import App from '../src/components/App';
import MusicTileContainer from '../src/components/MusicTileContainer';
import MusicTile from '../src/components/MusicTile';
import NavBar from '../src/components/NavBar';
import Player from '../src/components/Player';
import SearchBar from '../src/components/SearchBar';
import SongDetails from '../src/components/SongDetails';

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
  it('Contains a player', () => {
    const app = shallow(<App />);
    const player = app.find('Player');
    expect(player.length).to.equal(1);
  });
  it('Contains a music tile container', () => {
    const app = shallow(<App />);
    const musicTileContainer = app.find('MusicTileContainer');
    expect(musicTileContainer.length).to.equal(1);
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

  describe('Click events', () => {
    const onButtonClick = sinon.spy();
    const searchbar = shallow(<SearchBar onSubmit={onButtonClick} />);
    searchbar.find('input').simulate('change', {target: {value: 'test message'}});
    searchbar.find('button').simulate('click', { preventDefault(){} });

    it('Should call the onClick function', () => {
      expect(onButtonClick.calledOnce).to.equal(true);
    });

    xit('Should call the click handler fn with the input', () => {
      expect(onButtonClick.calledWith).to.equal('test message');
    });

    it('Should clear the input after submit', () => {
      expect(searchbar.find('input').prop('value')).to.equal('');
    });
  });
});

describe('<NavBar />', () => {
  it('Should contains the searchbar', () => {
    const navbar = shallow(<NavBar />);
    expect(navbar.find('SearchBar')).to.have.length(1);
  });
});

describe('<MusicTileContainer />', () => {
  it('Should contain music tiles', () => {
    const container = shallow(<MusicTileContainer searchResultList={[{}, {}]}/>);
    expect(container.find('MusicTile')).to.have.length(2);
  });
});

describe('<MusicTile />', () => {
  const musicTile = shallow(<MusicTile data={{
    artwork_url: 'x',
    id: 1,
    title: 'title'
  }}/>);

  it('Should produce a div', () => {
    expect(musicTile.find('div')).to.have.length(1);
  });

  it('Should produce a thumbnail', () => {
    expect(musicTile.find('a')).to.have.length(1);
    expect(musicTile.find('img')).to.have.length(1);
    expect(musicTile.find('a').hasClass('thumbnail')).to.equal(true);
  });

  it('Should show the song title', () => {
    expect(musicTile.text()).to.contain('title');
  });
});

describe('<SongDetails />', () => {
  const songDetails = shallow(<SongDetails />);

  it('Should produce 2 headers', () => {
    expect(songDetails.find('h3')).to.have.length(2);
  });
});
