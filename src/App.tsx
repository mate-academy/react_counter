import React from 'react';
import { Counter } from './Counter';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({ count: currentState.count + 1 }));
  };

  add100 = () => {
    this.setState((currentState) => ({ count: currentState.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <>
        <Counter count={this.state.count} />
        <div className="app__buttons">
          <button
            type="button"
            className="app__button"
            onClick={this.addOne}
          >
            addOne
          </button>
          <button
            type="button"
            className="app__button"
            onClick={this.add100}
          >
            add100
          </button>
          <button
            type="button"
            className="app__button"
            onClick={this.increase}
          >
            increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
