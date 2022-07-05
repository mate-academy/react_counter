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
      <div className="box">
        <h1 className="title">{`Count: ${count}`}</h1>
        <div className="buttons are-medium">
          <button
            type="button"
            className="button is-black"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            className="button is-black"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            className="button is-black"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
