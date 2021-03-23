import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  clearCount = () => {
    this.setState(prevState => ({
      count: 0,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1 className="header">
          Count:
          {' '}
          {
            count
          }
        </h1>
        <button type="button" onClick={this.addOne}>
          Add one
        </button>
        {' '}
        <button type="button" onClick={this.add100}>
          Add 100
        </button>
        {' '}
        <button type="button" onClick={this.increase}>
          Increase
        </button>
        {' '}
        <button type="button" onClick={this.clearCount}>
          Clear
        </button>
        {' '}
      </>
    );
  }
}

export default App;
