import React, {Component, PropTypes} from 'react';
import store from '../index';
import { NavItem } from 'react-bootstrap';

const Link = ({active, onClick, children}) => {
  return (
    <NavItem
      active={active}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      } }>
      {children}
    </NavItem>
  );
};

class NavLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();
    return (
      <Link
        active={state.genre === props.genre.toLowerCase() }
        onClick={() => {
          store.dispatch({
            type: 'CHANGE_GENRE',
            text: props.genre
          });
        } } children={props.genre}
        />
    );
  }
}

NavLink.propTypes = {
};

export default NavLink;