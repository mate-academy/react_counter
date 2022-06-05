import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number
};

class App extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevProps) => ({
      count: prevProps.count + 100,
    }));
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
        <h1 className="h1">
          {`Count: ${count}`}
        </h1>
        <button
          type="button"
          className="btn-primary"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="btn-info"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="btn-danger"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
