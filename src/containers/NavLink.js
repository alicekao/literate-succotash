import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { changeGenre } from '../actions';


class NavLink extends Component {
  render() {
    const { active, genre, onClick } = this.props;
    return (
      <Link
        active={active}
        onClick={onClick}
        children={genre}
        />
    );
  }
}

NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

// ownProps are the props actually passed into NavLink from NavBar
function mapStateToProps(state, ownProps) {
  return {
    active: state.genre === ownProps.genre.toLowerCase()
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => changeGenre(ownProps.genre)
  }
}

// Returns a container with state and dispatch available in navlink props 
export default connect(mapStateToProps, mapDispatchToProps)(NavLink);