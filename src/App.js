import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 1;
  }

  count = () => {
    this.setState({
    });
    this.counter += 1;
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {` ${this.counter}`}
        </h1>
        <button
          type="button"
          onClick={this.count}
        >
          +1
        </button>
      </>
    );
  }
}

export default App;
