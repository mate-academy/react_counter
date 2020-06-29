import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  increaseCounter = () => {
    this.setState(previousState => ({
      counter: previousState.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>
          Count:
          {this.state.counter}
        </h1>
        <button type="button" onClick={this.count}>
          Push me!
        </button>
      </div>
    );
  }
}

export default App;
