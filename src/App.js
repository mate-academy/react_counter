import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.setState(state => ({
      count: state.count % 5 === 0
        ? state.count + 101
        : state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${count}`}
        </h1>

        <div className="App__button">
          <button
            type="button"
            onClick={this.addOne}
            className="App__button-addsOne"
          >
            adds 1
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="App__button-addsHundred"
          >
            adds 100
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="App__button-increase"
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
