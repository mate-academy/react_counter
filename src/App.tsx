import React from 'react';
import './App.scss';

interface State {
  count: number ;
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reseat = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {' '}
          {count}
        </h1>

        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          className="button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>

        <button
          className="button"
          type="button"
          onClick={this.reseat}
        >
          Reseat
        </button>
      </>

    );
  }
}

export default App;
