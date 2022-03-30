import React from 'react';
import './App.scss';

type State = {
  count: number;
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
    this.addOne();
    
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">
          {`Count: ${this.state.count}`}
        </h1>

        <div className="btns">
          <button
            type="button"
            onClick={this.addOne}
          >
            +1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            +1/+100
          </button>
        </div>
      </div>
    );
  }
}

export default App;
