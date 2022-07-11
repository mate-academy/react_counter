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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App content is-medium">
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <div className="App_button_wrapper">
          <button
            type="button"
            className="button is-primary"
            onClick={this.addOne}
          >
            add one
          </button>
          <button
            type="button"
            className="button is-success"
            onClick={this.add100}
          >
            add 100
          </button>
          <button
            type="button"
            className="button is-warning"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
