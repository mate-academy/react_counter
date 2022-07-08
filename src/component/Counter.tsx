import React from 'react';

type Props = {
  receiveNumber: number,
};

const Counter: React.FC<Props> = ({ receiveNumber }) => {
  return (
    <h1>
      Count:
      {' '}
      {receiveNumber}
    </h1>
  );
};

export default Counter;
