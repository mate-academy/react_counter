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
            Counter:
            {count}
          </h1>
        </header>
        <div className="wrapper">
          <button
            className="button button__one"
            type="button"
            onClick={this.addOne}
          >
            + 1
          </button>
          <button
            className="button button__hundried"
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            className="button button__random"
            type="button"
            onClick={this.increase}
          >
            random
          </button>
        </div>
      </div>
    );
  }
}

export default App;
