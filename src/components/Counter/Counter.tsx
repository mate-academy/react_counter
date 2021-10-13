import React from 'react';

type Props = {
  addOne: () => void,
  add100: () => void,
  add: () => void,
  counter: number,
};

export class Counter extends React.PureComponent<Props> {
  render() {
    const { counter } = this.props;

    return (
      <div>
        <h1>
          Counter:
          {' '}
          {counter}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.props.addOne();
          }}
        >
          + 1
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.add100();
          }}
        >
          + 100
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.add();
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}
