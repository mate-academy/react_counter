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
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="app">
        <div className="counter-contaner">
          <h1>{`Count ${this.state.count}`}</h1>
          <div className="control-panel">
            <button type="button" className="button" onClick={() => this.addOne()}>add 1</button>
            <button type="button" className="button" onClick={() => this.add100()}>add 100</button>
            <button type="button" className="button button-29" onClick={() => this.increase()}>increase</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
