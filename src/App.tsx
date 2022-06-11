import 'bulma/css/bulma.min.css';
import React from 'react';
import './App.scss';

type Props = {};

type State = {
  count: number,
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
      <div className="container">
        <h1 className="title is-1">{`Count: ${count}`}</h1>
        <button type="button" onClick={this.addOne} className="button">
          Add 1
        </button>
        <button type="button" onClick={this.add100} className="button">
          Add 100
        </button>
        <button type="button" onClick={this.increase} className="button">
          Increase
        </button>
      </div>
    );
  }
}

export default App;
