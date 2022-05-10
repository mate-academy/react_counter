import React from 'react';
import './App.scss';
import sound from './sheep.mp3';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
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
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="Title">
          {`Count: ${count}`}
        </h1>
        <div className="Buttons">
          <button
            type="button"
            className="Button"
            onClick={this.addOne}
          >
            ADD ONE
          </button>
          <button
            type="button"
            className="Button"
            onClick={this.add100}
          >
            ADD 100
          </button>
          <button
            type="button"
            className="Button"
            onClick={this.increase}
          >
            INCREASE
          </button>
        </div>
      </div>
    );
  }
}

export default App;
