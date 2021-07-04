import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 100 }));
  };

  increase = () => {
    this.addOne();

    if ((this.state.counter + 1) % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="counter">
        <h1 className="counter__title">{`Count: ${counter}`}</h1>
        <button
          onClick={this.addOne}
          className="counter__button"
          type="button"
        >
          add 1
        </button>
        <button
          onClick={this.add100}
          className="counter__button"
          type="button"
        >
          add 100
        </button>
        <button
          onClick={this.increase}
          className="counter__button"
          type="button"
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
