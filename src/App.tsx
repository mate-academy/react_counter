import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number
};

class App extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState(state => ({ count: state.count + 100 }));
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
      <div>
        <h1>{`Count: ${count}`}</h1>
        <button type="button" onClick={this.addOne}>Add One</button>
        <button type="button" onClick={this.add100}>Add Hundred</button>
        <button type="button" onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default App;
