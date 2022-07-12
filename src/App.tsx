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
  age: number,
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
    age: 0,
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      age: prevState.age + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count < 5) {
      this.setState((prevState) => ({
        age: prevState.age + 1,
        count: prevState.count + 1,
      }));
    } else {
      this.setState((prevState) => ({
        age: prevState.age + 100,
        count: prevState.count + 1,
      }));
    }
  };

  render() {
    const { age } = this.state;

    return (
      <div className="App">
        <h1
          className="App__title"
        >
          {`Current age: ${age}`}
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
