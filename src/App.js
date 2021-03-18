import React from 'react';
import './App.scss';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <Counter
        add100={this.add100}
        increase={this.increase}
      />
    );
  }
}

export default App;
