import React from 'react';

export interface State {
  count: number;
}

export class Count extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();
    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { addOne, add100, increase } = this;

    return (
      <article className="panel is-info">
        <h1 className="panel-heading is-center">{`Count: ${this.state.count}`}</h1>
        <div className="panel-block">
          <div className="buttons are-medium">
            <button
              className="button is-primary"
              type="button"
              onClick={() => {
                addOne();
              }}
            >
              Add 1
            </button>

            <button
              className="button is-link"
              type="button"
              onClick={() => {
                add100();
              }}
            >
              Add 100
            </button>

            <button
              className="button is-success"
              type="button"
              onClick={() => {
                increase();
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </article>
    );
  }
}
