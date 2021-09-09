import * as React from 'react';
import './App.scss';

type State = {
  sum: number,
};

class App extends React.Component<{}, State> {
  state = {
    sum: 0,
  };

  addOne = () => {
    this.setState(currentState => ({
      sum: currentState.sum + 1,
    }));
  };

  add100 = () => {
    this.setState(currentState => ({
      sum: currentState.sum + 100,
    }));
  };

  increase = () => {
    if (this.state.sum % 5 > 0 || this.state.sum === 0) {
      this.addOne();
    } else {
      this.add100();
    }
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
