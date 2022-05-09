import React from 'react';
import './App.scss';

type State = {
  count: number,
};
class App extends React.Component<{}, State> {
  state:State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
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
      <div className="App">
        <h1>
          Count:
          {count}
        </h1>

        <button
          className="button"
          type="button"
          onClick={this.addOne}
        >
          add 1
        </button>
        {' '}
        <button
          className="button"
          type="button"
          onClick={this.add100}
        >
          add 100
        </button>
        {' '}
        <button
          className="button"
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
