import React from 'react';
import sound from './sheep.mp3';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  count: number;
};

export class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  play = () => {
    const audio = new Audio(sound);

    audio.play();
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));

    this.play();
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));

    this.play();
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
    this.play();
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
