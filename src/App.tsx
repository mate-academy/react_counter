import React from 'react';
import './App.scss';

interface State {
  count: number;
}

class App extends React.Component<{}, State> {
  state:State = {
    count: 0,
  };

  addOne = () => {
    let { count } = this.state;

    this.setState({ count: count += 1 });
  };

  add100 = () => {
    let { count } = this.state;

    this.setState({ count: count += 100 });
  };

  increase = () => {
    let { count } = this.state;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (count % 5 === 0 && count !== 0)
      ? this.setState({ count: count += 101 })
      : this.setState({ count: count += 1 });
  };

  cleaner = () => {
    let { count } = this.state;

    this.setState({ count: count *= 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={this.addOne}>
          add 1
        </button>

        <button type="button" onClick={this.add100}>
          add 100
        </button>

        <button type="button" onClick={this.increase}>
          add 1 or 100
        </button>

        <button type="button" onClick={this.cleaner}>
          Clean
        </button>
      </>
    );
  }
}

export default App;
