import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    console.log(styles);
    return (
      <div className={styles.navbarContainer}>
Welcome
{' '}
{this.props.name}
</div>
    );
  }
}

function mapStateToProps({ name }) {
  return { name };
}

export default connect(mapStateToProps)(Navbar);
