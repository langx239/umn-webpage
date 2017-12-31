import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Intent } from '@blueprintjs/core';

import '@blueprintjs/core/dist/blueprint.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button iconName="refresh" />
      </div>
    );
  }
}

export default App;
