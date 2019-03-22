import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';

// import components
import Navbar from '../Navbar';

import A from '../A';
import B from '../B';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetchName } = this.props;
    fetchName();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={A} />
            <Route exact path="/b" component={B} />
            <Route component={A} />
          </Switch>
        </BrowserRouter>
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
