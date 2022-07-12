/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './App.scss';

const animateButton = (e:any) => {
  e.preventDefault();

  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(() => {
    e.target.classList.remove('animate');
  }, 700);
};

const bubblyButtons = document.getElementsByClassName('bubbly-button');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

type State = {
  result: number,
};

class App extends React.Component<{}, State> {
  state = {
    result: 0,
  };

  addOne = (): any => {
    this.setState((currentState) => ({
      result: currentState.result + 1,
    }));
  };

  add100 = (): any => {
    this.setState((currentState) => ({
      result: currentState.result + 100,
    }));
  };

  increase = () => {
    const { result } = this.state;

    if (result % 5 === 0) {
      return (this.add100() + this.addOne());
    }

    return this.addOne();
  };

  render() {
    const { result } = this.state;

    return (
      <div className="App">
        <h1
          className="App__title"
        >
          {`Current age: ${result}`}
        </h1>

        <div className="App__button-container">
          <button
            onClick={this.addOne}
            type="button"
            className="App__button"
          >
            Add1
          </button>

          <button
            onClick={this.add100}
            type="button"
            className="App__button"
          >
            Add100
          </button>

          <button
            onClick={this.increase}
            type="button"
            className="App__button"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
