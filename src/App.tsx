import React from 'react';
import './App.scss';

type Props = {};
interface State {
  counter: number;
}

class App extends React.Component<Props, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 1 }
    ));
  };

  add100 = () => {
    this.setState(prevState => (
      { counter: prevState.counter + 100 }
    ));
  };

  increase = () => {
    const { counter } = this.state;

    if (counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{`Count: ${this.state.counter}`}</h1>
        <div className="counter__form">
          <button
            type="button"
            className="counter__button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            className="counter__button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            className="counter__button"
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
