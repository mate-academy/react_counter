import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Counter } from './components/Counter';

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
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <Counter
          count={count}
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
