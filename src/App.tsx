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
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ count: prevState.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1>{`Count: ${count}`}</h1>
        <div className="container__buttons">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
