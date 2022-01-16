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
    this.setState((state: State) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.setState((state) => {
      this.addOne();

      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    return (
      <div>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default App;
