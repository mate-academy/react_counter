import React from 'react';
import './App.scss';

interface Counter {
  counter: number,
}

class App extends React.Component<{}, Counter> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((prev) => {
      const result = prev.counter + 1;

      return ({ counter: result });
    });
  };

  add100 = () => {
    this.setState((prev) => {
      const result = prev.counter + 100;

      return ({ counter: result });
    });
  };

  increase = () => {
    this.setState(({ counter }) => {
      const adder = counter % 5 === 0 ? 100 : 1;
      const result = counter + adder;

      return ({ counter: result });
    });
  };

  render() {
    const btnClass = 'waves-effect waves-purple btn-large';

    return (
      <>
        <h1>{`Count: ${this.state.counter}`}</h1>
        <button
          className={btnClass}
          type="button"
          onClick={this.addOne}
        >
          add One
        </button>
        <button
          className={btnClass}
          type="button"
          onClick={() => {
            this.add100();
          }}
        >
          add 100
        </button>
        <button
          className={btnClass}
          type="button"
          onClick={() => {
            this.increase();
          }}
        >
          increase c:
        </button>
      </>
    );
  }
}

export default App;
