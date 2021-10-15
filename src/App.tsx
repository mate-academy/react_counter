import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    this.setState((prevState) => ({
      count: prevState.count % 5 === 0 ? (prevState.count + 100) : (prevState.count + 1),
    }));
  };

  reset = () => {
    this.setState((prevState) => ({
      count: prevState.count * 0,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1 className="title">
          Count $
          {count}
        </h1>
        <div className="buttons">
          <button className="button" type="button" onClick={this.addOne}>+1</button>
          <button className="button" type="button" onClick={this.add100}>+100</button>
          <button className="button" type="button" onClick={this.increase}>Increase</button>
          <button className="button" type="button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
