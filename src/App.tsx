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
      <div className="App">
        <h1 className="App__count">
          {`Found stars: ${count}`}
        </h1>
        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.addOne}
          >
            One star
          </button>
          <button
            type="button"
            className="App__button"
            onClick={this.add100}
          >
            100 stars
          </button>
          <button
            type="button"
            className="App__button"
            onClick={this.increase}
          >
            AbraKadabra
          </button>
        </div>
      </div>
    );
  }
}

export default App;
