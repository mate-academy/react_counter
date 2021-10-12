import React from 'react';
import './App.scss';

class App extends React.Component<{}, { count:number }> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((s) => {
      return { count: s.count + 1 };
    });
  };

  add100 = () => {
    this.setState((s) => {
      return { count: s.count + 100 };
    });
  };

  increase = () => {
    if (this.state.count % 5 === 0 && this.state.count > 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>{`Count: ${this.state.count}`}</h1>
        <button type="button" onClick={this.addOne}>Add 1</button>
        {' '}
        <button type="button" onClick={() => this.add100()}>Add 100</button>
        {' '}
        <button type="button" onClick={() => this.increase()}>Special</button>
        {' '}
        <button type="button" onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default App;
