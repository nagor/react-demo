import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Game from './game/game';

class App extends Component {

  renderGame() {
    return <Game />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p>
          Here goes custom content
        </p>
        <p>
          {this.renderGame()}
        </p>
      </div>
    );
  }
}

export default App;
