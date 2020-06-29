import React from 'react';
import './App.css';

export class App extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>
          {`Count: ${counter}`}
        </h1>
        <button onClick={this.increment} type="button">
          Increment!
        </button>
      </>
    );
  }
}

export default App;
