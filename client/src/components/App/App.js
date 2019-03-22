import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Navbar from '../Navbar';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetchName } = this.props;
    fetchName();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

App.propTypes = {
  fetchName: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(App);
