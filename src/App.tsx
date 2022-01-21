import React from 'react';
import 'bulma/css/bulma.min.css';
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
      <>
        <h1 className="title">{`Count: ${count}`}</h1>

        <button
          type="button"
          onClick={this.addOne}
          className="button m-2"
        >
          Add One
        </button>

        <button
          type="button"
          onClick={this.add100}
          className="button m-2"
        >
          Add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
          className="button m-2"
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
