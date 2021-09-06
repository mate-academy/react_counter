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
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <h1 className="App__title">
            Count:
            {' '}
            {this.state.count}
          </h1>
          <div className="App__buttons">
            <button
              className="App__button addOne"
              type="button"
              onClick={this.addOne}
            >
              add one
            </button>
            <button
              className="App__button add100"
              type="button"
              onClick={this.add100}
            >
              add 100
            </button>
            <button
              className="App__button increase"
              type="button"
              onClick={this.increase}
            >
              increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
