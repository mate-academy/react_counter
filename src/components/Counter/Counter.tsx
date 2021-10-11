import React from 'react';

type Props = {
  addOne: () => void,
  add100: () => void,
  increase: () => void,
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
            if (counter % 5 === 0) {
              this.props.addOne();
              this.props.add100();
            } else {
              this.props.addOne();
            }
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}
