import React from 'react';

import sniperRifle from './img/sniper-rifle.png';
import himars from './img/himars-icon.jpg';
import battleGoose from './img/battle-goose.jpg';

import 'bulma/css/bulma.min.css';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

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

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App container is-widescreen mt-6 has-text-centered">
        <p className="is-size-4">Good russians</p>
        <h1 className="App__title is-size-5">
          {`Count: ${count}`}
        </h1>

        <div className="container my-4">
          <button
            type="button"
            className="App__add-one button is-size-4 is-uppercase"
            onClick={this.addOne}
          >
            <figure className="image is-48x48">
              <img
                src={sniperRifle}
                alt="sniper rifle"
              />
            </figure>
            Add 1
          </button>

          <button
            type="button"
            className="App__add-100 button mx-2 is-size-4 is-uppercase"
            onClick={this.add100}
          >
            <figure className="image is-48x48 mt-4 mr-1">
              <img
                src={himars}
                alt="HIMARS"
              />
            </figure>
            Add 100
          </button>

          <button
            type="button"
            className="App__increase button is-size-4 is-uppercase"
            onClick={this.increase}
          >
            <figure className="image is-48x48 mt-3 mr-1">
              <img
                src={battleGoose}
                alt="Battle goose"
              />
            </figure>
            Increase
          </button>
        </div>
      </div>
    );
  }
}
