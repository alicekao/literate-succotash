import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import NavLink from '../components/NavLink';
import { changeGenre } from '../actions';


class NavLinkContainer extends Component {
  render() {
    const { active, genre, onClick } = this.props;
    return (
      <NavLink
        active={active}
        onClick={onClick}
        children={genre}
        />
    );
  }
}

NavLinkContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

// ownProps are the props actually passed into NavLink from NavBar
const mapStateToProps = (state, ownProps) => ({
    active: state.genre === ownProps.genre.toLowerCase()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
      dispatch(changeGenre(ownProps.genre));
    }
});

// Returns a container with state and dispatch available in navlink props 
export default connect(mapStateToProps, mapDispatchToProps)(NavLinkContainer);