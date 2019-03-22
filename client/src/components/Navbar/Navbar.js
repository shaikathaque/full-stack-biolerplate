import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

// eslint-disable-next-line
class Navbar extends Component {
  render() {
    const { name } = this.props;

    // eslint-disable-next-line
    return (
      <div className={styles.navbarContainer}>
        <p>{name}</p>
        <NavLink to="a">
          <p>Go to A</p>
        </NavLink>
        <NavLink to="b">
          <p>Go to B</p>
        </NavLink>
      </div>
    );
  }
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired
};

function mapStateToProps({ name }) {
  return { name };
}

export default connect(mapStateToProps)(Navbar);
