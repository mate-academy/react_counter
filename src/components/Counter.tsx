import React from 'react';

import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  add100 = () => {
    this.setState((prevState) => ({ count: prevState.count + 100 }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="Container">
        <div className="Counter">
          <h1 className="Counter__title">
            Count:
            {' '}
            {this.state.count}
          </h1>
          <div className="Counter__buttons">
            <button
              className="Counter__button"
              type="button"
              onClick={this.addOne}
            >
              add 1
            </button>
            <button
              className="Counter__button"
              type="button"
              onClick={this.add100}
            >
              add 100
            </button>
            <button
              className="Counter__button"
              type="button"
              onClick={() => {
                if (count % 5 === 0) {
                  this.add100();
                }

                this.addOne();
              }}
            >
              surprise
            </button>
          </div>
        </div>
      </div>
    );
  }
}
