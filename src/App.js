import React from 'react';
import './App.scss';
import { Counter } from './components';

class App extends React.Component {
  state = {
    currentCount: 0,
  }

  addOne = () => {
    this.setState(state => ({
      currentCount: state.currentCount + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      currentCount: state.currentCount + 100,
    }));
  };

  increase = () => {
    this.setState((state) => {
      if (state.currentCount % 5 === 0) {
        this.add100();
        this.addOne();
      } else {
        this.addOne();
      }
    });
  };

  render() {
    const { currentCount } = this.state;

    return (
      <div className="container">
        <Counter
          currentCount={currentCount}
          addOne={this.addOne}
          add100={this.add100}
          increase={this.increase}
        />
      </div>
    );
  }
}

export default App;
