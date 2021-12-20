/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type Props = {
  inc: number
  addOne: () => void
  add100: () => void
  increase: () => void
};
class Counter extends React.Component<Props, {}> {
  render() {
    const {
      inc,
      addOne,
      add100,
      increase,
    } = this.props;

    return (
      <>
        <h1>
          Count:
          {' '}
          {inc}
        </h1>
        <button type="button" onClick={addOne}>Add 1</button>
        <button type="button" onClick={add100}>Add 100</button>
        <button type="button" onClick={increase}>Increase</button>
      </>
    );
  }
}

export default Counter;
