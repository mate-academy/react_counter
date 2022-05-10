import React from 'react';
import './App.scss';

interface State {
  count: number;
}

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
    this.setState(() => {
      const { count } = this.state;

      if (count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div className="count">
        <h1 className="count__title">
          Count:
          <span className="count__counter">{count}</span>
        </h1>

        <button
          type="button"
          className="count__button"
          onClick={this.addOne}
        >
          Add 1
        </button>

        <button
          type="button"
          className="count__button"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="count__button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
