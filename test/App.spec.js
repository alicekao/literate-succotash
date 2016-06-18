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

import { Col } from 'react-bootstrap';

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
    expect(searchbar.find('Button')).to.have.length(1);
  });

  describe('Click events', () => {
    const onButtonClick = sinon.spy();
    const searchbar = shallow(<SearchBar onSubmit={onButtonClick} />);

    searchbar.find('input').simulate('change', {target: {value: 'test message'}});
    searchbar.find('Button').simulate('click', { preventDefault(){} });

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

describe('<Player />', () => {
  const onPauseClick = sinon.spy();
  const onPrevClick = sinon.spy();
  const onNextClick = sinon.spy();
  const player = shallow(<Player
    togglePlay={onPauseClick}
    playPrev={onPrevClick}
    playNext={onNextClick}
    />);
  const buttongroup = player.find('ButtonGroup');

  it('Should contains a Jumbotron', () => {
    expect(player.find('Jumbotron')).to.have.length(1);
  });
  it('Should contain SongDetails', () => {
    expect(player.find('SongDetails')).to.have.length(1);
  });

  describe('Player buttons', () => {
    it('Should contain a button group with 3 buttons', () => {
      expect(buttongroup).to.have.length(1);
      expect(buttongroup.find('Button')).to.have.length(3);
    })
    it('Should togglePlay when clicking pause', () => {
      const pauseBtn = buttongroup.childAt(1);
      pauseBtn.simulate('click');
      expect(onPauseClick.calledOnce).to.be.true;
    });
    it('Should call previous fn when clicking prev', () => {
      const prevBtn = buttongroup.childAt(0);
      prevBtn.simulate('click');
      expect(onPrevClick.calledOnce).to.be.true;
    });
    it('Should call next fn when clicking next', () => {
      const nextBtn = buttongroup.childAt(2);
      nextBtn.simulate('click');
      expect(onNextClick.calledOnce).to.be.true;
    });
  })
});

describe('<MusicTileContainer />', () => {
  const container = shallow(<MusicTileContainer searchResultList={[{}, {}]}/>);
  it('Should be a Grid', () => {
    expect(container.find('Grid').length).to.equal(1);
    expect(container.type().displayName).to.equal('Grid');
  });
  it('Should contain a single row', () => {
    expect(container.find('Grid').find('Row').length).to.equal(1);
  });

  it('Should change the number of tiles based on props', () => {
    expect(container.find('MusicTile')).to.have.length(2);
    container.setProps({searchResultList: [{}, {}, {}]});
    expect(container.find('MusicTile')).to.have.length(3);
  })
});

describe('<MusicTile />', () => {
  const musicTile = shallow(<MusicTile data={
    {
      artwork_url: 'x',
      id: 1,
      title: 'title'
    }
  }/>);

  it('Should have a Col', () => {
    console.log(musicTile.type().displayName)
    expect(musicTile.type().displayName).to.equal('Col');
  });

  it('Should produce a thumbnail', () => {
    expect(musicTile.find('Thumbnail')).to.have.length(1);
  });

  it('Should show the song title', () => {
    expect(musicTile.find('p').length).to.equal(1);
    expect(musicTile.find('p').text()).to.contain('Title');
  });
});

describe('<SongDetails />', () => {

  it('Should produce headers displaying the song info', () => {

    const songDetails = shallow(<SongDetails currentSong={
      {
        title: 'title',
        playback_count: 5
      }
    }/>);

    expect(songDetails.find('h3')).to.have.length(2);
    expect(songDetails.find('h3').first().text()).to.equal('title');
    expect(songDetails.find('h3').at(1).text()).to.equal('Plays 5');
  });

  it('Should not show a title if not playing', () => {
    const songDetails = shallow(<SongDetails />);

    expect(songDetails.find('h3').first().text()).to.equal(' ');
    expect(songDetails.find('h3').nodes[1].props.children).to.equal(' ');
  })
});
