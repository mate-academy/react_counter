import React from 'react';
import { Counter } from './components/Counter';
import './App.scss';

export class App extends React.PureComponent {
  render() {
    return (
      <Counter />
    );
  }
}
