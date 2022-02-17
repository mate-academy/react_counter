import React from 'react';
import './App.scss';

type State = {
  count: number
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
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <h1>
          {`Count: ${count}`}
        </h1>
        <div className="buttons-list">
          <button
            className="button"
            type="button"
            onClick={() => this.addOne()}
          >
            +1
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.add100()}
          >
            +100
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.increase()}
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
