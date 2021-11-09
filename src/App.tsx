import React from 'react';
import './App.scss';

interface State {
  count: number,
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 100,
      };
    });
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {count}
        </h1>
        <button
          onClick={() => this.addOne()}
          type="button"
        >
          add one
        </button>

        <button
          onClick={() => this.add100()}
          type="button"
        >
          add 100
        </button>

        <button
          onClick={() => this.increase()}
          type="button"
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
