import { Component, ReactNode } from 'react';

type State = {
  count: number,
};

export class Counter extends Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  addHundred = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  render(): ReactNode {
    const { count } = this.state;

    return (
      <div className="block">
        <h1
          className="title is-2"
        >
          {`Count: ${count}`}
        </h1>

        <div className="block__buttons">
          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
              is-small
              box
            "
            onClick={() => this.addOne()}
          >
            Add 1
          </button>

          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
              is-small
              box
            "
            onClick={() => this.addHundred()}
          >
            Add 100
          </button>

          <button
            type="button"
            className="
              button
              is-primary
              is-outlined
              is-small
              box
            "
            onClick={() => {
              this.addOne();
              if (count % 5 === 0) {
                this.addHundred();
              }
            }}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
