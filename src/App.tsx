/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-len */
import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((currentState) => ({
      count: currentState.count + 100,
    }));
  };

  greatIncrease = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1000,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  setZero = () => {
    this.setState((currentState) => ({
      count: currentState.count - currentState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        {count === 0 && (
          <div className="cat_hr">
            <p className="title">What is your talants, dude?</p>
          </div>
        )}
        {count < 0 && (
          <div className="cash0" />
        )}
        {(count >= 1 && count < 100) && (
          <div className="cash1" />
        )}
        {(count >= 100 && count < 105) && (
          <div className="cash100" />
        )}
        {(count >= 105 && count < 500) && (
          <div className="cash300" />
        )}
        {(count >= 500 && count < 999) && (
          <div className="cash500" />
        )}
        {count >= 999 && (
          <div className="cash1000" />
        )}

        <button type="button" className="App__add-one" onClick={this.addOne}>
          I know how to make websites
        </button>

        <button type="button" className="App__add-100" onClick={this.add100}>
          I sent tiktoks about programmers to the chat
        </button>

        <button type="button" className="App__increase" onClick={this.increase}>
          I fix the proposed changes even if the task is approved
        </button>

        <button type="button" className="App__reset" onClick={this.setZero}>
          I use array index as a key prop
        </button>

        <button type="button" onClick={this.greatIncrease}>
          I am a student of Mate Academy
        </button>

        <h1 className="App__title">
          <p>Your expected salary:</p>
          {`Count: ${count}`}
        </h1>
      </div>
    );
  }
}
