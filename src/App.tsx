import React from 'react';
import './App.scss';

interface State {
  counter: number;
}
type Props = {};
class App extends React.Component<Props, State> {
  state: State = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  add100 = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 100 }));
  };

  increase = () => {
    if (this.state.counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">
          Count:
          {' '}
          {this.state.counter}
        </h1>
        <button type="button" className="counter__button" onClick={this.addOne}>
          Add 1
        </button>
        <button type="button" className="counter__button" onClick={this.add100}>
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
    );
  }
}

export default App;
