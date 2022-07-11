import React from 'react';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  add100 = () => {
    this.setState(prev => ({ count: prev.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="level">
          <h1 className="level-item title">{`Count: ${this.state.count}`}</h1>
        </div>

        <div className="level">
          <div className="level-item">
            <button
              className="button is-light mr-5"
              type="button"
              onClick={() => this.addOne()}
            >
              Add 1
            </button>

            <button
              className="button is-light mr-5"
              type="button"
              onClick={() => this.add100()}
            >
              Add 100
            </button>

            <button
              className="button is-light"
              type="button"
              onClick={() => this.increase()}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    );
  }
}
