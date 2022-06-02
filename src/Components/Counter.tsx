import React from 'react';
import './Counter.scss';

type Props = {
  count: number,
};

export const Counter: React.FC<Props> = ({ count }) => {
  return (
    <h1>
      Count:
      <span>{count}</span>
    </h1>
  );
};
