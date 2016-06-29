import React, {Component, PropTypes} from 'react';
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
    console.log('context is', this.context);
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const store = this.context.store;
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

NavLink.contextTypes = {
  store: PropTypes.object
};

export default NavLink;