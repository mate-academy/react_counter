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
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }

      return this.addOne();
    });
  };

  render() {
    return (
      <section className="section is-medium">
        <h1 className="title is-3">
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button
          className="button is-primary is-light"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          className="button is-primary is-light"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="button is-primary is-light"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
        <button
          className="button is-warning is-light"
          type="button"
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Clear
        </button>
      </section>
    );
  }
}

export default App;
