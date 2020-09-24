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
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
        this.addOne();
      }
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <button type="button" onClick={this.addOne}>
          Click here to add 1!
        </button>
        <button type="button" onClick={this.add100}>
          Click here to add 100!
        </button>
        <button type="button" onClick={this.increase}>
          Click here to increase if count is divisible by 5!
        </button>
      </div>
    );
  }
}

export default App;
