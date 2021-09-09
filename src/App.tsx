import * as React from 'react';
import './App.scss';

type State = {
  sum: number,
  counter: number,
};

class App extends React.Component<{}, State> {
  state = {
    sum: 0,
    counter: 5,
  };

  addOne = () => {
    this.setState(state => ({
      sum: state.sum + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      sum: state.sum + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      if (state.counter !== 1) {
        return {
          sum: state.sum + 1,
          counter: state.counter - 1,
        };
      }

      return {
        sum: state.sum + 5,
        counter: state.counter + 5,
      };
    });
  };

  render() {
    const { sum } = this.state;

    return (
      <div className="main">
        <h1>
          Count:
          {sum}
        </h1>
        <div className="container">
          <button type="button" className="btn btn-success" onClick={this.addOne}>+1</button>
          <button type="button" className="btn btn-success" onClick={this.add100}>+100</button>
          <button type="button" className="btn btn-success" onClick={this.increase}>increase</button>
        </div>
      </div>

    );
  }
}

export default App;
