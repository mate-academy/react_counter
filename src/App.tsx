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

  increase = () => (
    this.state.count % 5 !== 0
      ? this.addOne()
      : this.add100()
  );

  render() {
    const { count } = this.state;

    return (
      <div className="countBox">
        <h1 className="countBox__title">{`Count: ${count}`}</h1>
        <div className="countBox__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button is-primary"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button is-link"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button is-danger"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
