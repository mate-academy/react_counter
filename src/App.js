import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  }

  increase = () => {
    this.setState((prevState) => {
      if (prevState.count % 5 === 0) {
        this.add100();
      }

      this.addOne();
    });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">
          Count:
          {count}
        </h1>
        <button
          className="app__button"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.add100}
        >
          Add 100
        </button>
        <button
          className="app__button"
          type="button"
          onClick={this.increase}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default App;
