import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  }

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Count:
          {counter}
        </h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          adds100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
