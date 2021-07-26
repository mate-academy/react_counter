import React from 'react';
import { Counter } from './Counter';
import { Add1, Add100, Increase } from './Controls';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if ((this.state.count % 5) === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <Counter {...this.state} />
        <Add1 app={this} addOne={this.addOne} />
        <Add100 app={this} add100={this.add100} />
        <Increase app={this} increase={this.increase} />
      </>
    );
  }
}

export default App;
