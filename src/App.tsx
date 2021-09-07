import React from 'react';
import './App.scss';

type State = {
  count: number;
};

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

    if (count % 5 === 0 && count > 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>
            <b>Count: </b>
            {this.state.count}
          </h1>
          <div className="App__button">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.addOne}
            >
              add 1
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.add100}
            >
              add 100
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.increase}
            >
              increase
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
