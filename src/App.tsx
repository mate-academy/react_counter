import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          {'Count: '}
          {count}
        </h1>
        <button
          className="list__button"
          type="button"
          onClick={() => {
            this.addOne();
          }}
        >
          Add 1
        </button>
        <button
          className="list__button"
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          Add 100
        </button>
        <button
          className="list__button"
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
