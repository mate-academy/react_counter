import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </div>
    );
  }
}

export default App;
