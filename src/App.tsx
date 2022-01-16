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
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="page">
        <h1>
          Count:
          {count}
        </h1>
        <button
          type="button"
          className="button__first"
          onClick={() => {
            this.addOne();
          }}
        >
          First button
        </button>
        <button
          type="button"
          className="button__second"
          onClick={() => {
            this.add100();
          }}
        >
          Second button
        </button>
        <button
          type="button"
          className="button__third"
          onClick={() => {
            this.increase();
          }}
        >
          Third button
        </button>

      </div>
    );
  }
}

export default App;
