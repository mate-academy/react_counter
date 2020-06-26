import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  }

  count = () => {
    this.setState(index => ({
      counter: index.counter + 1,
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
