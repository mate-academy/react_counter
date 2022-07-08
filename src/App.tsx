import React from 'react';
import './App.scss';
import Counter from './component/Counter';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
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
        <Counter
          receiveNumber={count}
        />

        <div className="buttons">
          <button
            type="button"
            name="addOne"
            className="buttons__btn"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            type="button"
            name="addHundred"
            className="buttons__btn"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            type="button"
            name="addHundred"
            className="buttons__btn"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
