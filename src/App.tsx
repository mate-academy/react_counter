import React from 'react';
import './App.scss';

type State = {
  sum: number,
};

type Props = {

};

class App extends React.Component<Props, State> {
  state: State = {
    sum: 0,
  };

  addOne = () => {
    this.setState((state: State) => ({
      sum: state.sum + 1,
    }));
  };

  add100 = () => {
    this.setState((state: State) => ({
      sum: state.sum + 100,
    }));
  };

  increase = () => (
    this.state.sum % 5 ? (
      this.addOne()
    ) : (
      this.add100()
    )
  );

  render() {
    const { sum } = this.state;

    return (
      <div>
        <h1>
          Count:
          {sum}
        </h1>

        <div>
          <button
            type="button"
            onClick={() => {
              this.addOne();
            }}
          >
            Add 1
          </button>

          <button
            type="button"
            onClick={() => {
              this.add100();
            }}
          >
            Add 100
          </button>

          <button
            type="button"
            onClick={() => {
              this.increase();
            }}
          >
            Increase
          </button>

        </div>
      </div>

    );
  }
}

export default App;
