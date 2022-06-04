import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__header">{`Count: ${this.state.count}`}</h1>

        <Counter
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
