import React from 'react';
import './App.scss';

interface State {
  count: number,
}

class App extends React.Component<{}, State> {
  state: State = {
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
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <header className="header">
          <h1 className="header__title">
            Count:
            {count}
          </h1>
        </header>
        <div className="wrapper">
          <button
            className="button button--plusOne"
            type="button"
            onClick={this.addOne}
          >
            + 1
          </button>
          <button
            className="button button--plusHundred"
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            className="button button--magic"
            type="button"
            onClick={this.increase}
          >
            Magic
          </button>
        </div>
      </div>
    );
  }
}

export default App;
