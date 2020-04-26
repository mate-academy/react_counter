import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          Counter:
          {this.state.count}
        </h1>
        <button
          type="button"
          onClick={this.increment}
        >
          Click
        </button>
      </>
    );
  }
}

export default App;
