import React from 'react';
import './App.scss';

type Props = {
  count: number;
};

export const Counter: React.FC<Props> = ({ count }) => {
  return (
    <div className="app">
      <h1 className="app__title">
        Count:
        {count}
      </h1>
    </div>
  );
};
