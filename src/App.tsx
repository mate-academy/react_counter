import 'bulma/css/bulma.min.css';
import React from 'react';
import './App.scss';
import { Count } from './components/Count';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Count />
    );
  }
}

export default App;
