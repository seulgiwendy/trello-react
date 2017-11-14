import React, { Component } from 'react';
import logo from './logo.svg';
import Index from './homepage/index';
import Dashboard from './dashboard/index';
import {Router, Route, Switch} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index/>
        <Dashboard/>

      </div>
    );
  }
}

export default App;
