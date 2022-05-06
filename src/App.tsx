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
    this.setState(({ count }) => (
      {
        count: count + 1,
      }
    ));
  };

  add100 = () => {
    this.setState(({ count }) => (
      {
        count: count + 100,
      }
    ));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="Count">
          {`Count: ${count}`}
        </h1>

        <div className="App__buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="Button"
          >
            +1
          </button>

          <button
            type="button"
            onClick={this.increase}
            className="Button"
          >
            +some
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="Button"
          >
            +100
          </button>
        </div>
      </div>
    );
  }
}

export default App;
