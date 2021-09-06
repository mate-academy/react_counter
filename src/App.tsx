import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

class App extends React.Component<unknown, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    this.setState((prevState) => (prevState.count % 5 === 0 ? {
      count: prevState.count + 100,
    } : {
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <Counter
          count={count}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </div>
    );
  }
}

export default App;
