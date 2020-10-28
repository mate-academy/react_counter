import React from 'react';
import './App.scss';

import { Counter } from './components/Counter';
import 'semantic-ui-css/semantic.min.css';

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

    (count % 5 === 0)
      ? this.add100(this.addOne())
      : this.addOne();
  };

  render() {
    return (
      <div className="app">
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
