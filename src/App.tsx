import React from 'react';
import './App.scss';

interface State {
  count: number;
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevCount) => ({
      count: prevCount.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1>
          Count:
          {'  '}
          {count}
        </h1>

        <button type="button" onClick={this.addOne}>
          adds 1
        </button>
        <button type="button" onClick={this.add100}>
          adds 100
        </button>
        <button type="button" onClick={this.increase}>
          adds 1 or 100
        </button>
      </div>

    );
  }
}

export default App;
