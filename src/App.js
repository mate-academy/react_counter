import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  countDecrement = () => {
    this.setState(state => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.countDecrement}>-</button>
        <button type="button" onClick={this.countIncrement}>+</button>
      </>
    );
  }
}

export default App;
