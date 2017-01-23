import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './game/game';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Game test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
});

it('Game has board', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  const board = document.getElementsByClassName('board')[0];
  // TODO: investigate syntax for #TESTS
  //expect(board).toEqual(null);

});