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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <button type="submit" onClick={this.addOne}>1</button>
        <button type="submit" onClick={this.add100}>100</button>
        <button type="submit" onClick={this.increase}>increase</button>
      </div>
    );
  }
}

export default App;
