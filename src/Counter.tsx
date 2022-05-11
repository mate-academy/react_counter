import React from 'react';

interface Props {
  count: number,
  addOne: () => void,
  add100: () => void,
  increase: () => void,
}

const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <div className="app">
      <h1 className="app__count">
        {`Count: ${count}`}
      </h1>
      <div className="app__buttons">
        <button
          className="app__button"
          type="button"
          onClick={addOne}
        >
          add 1
        </button>
        <button
          className="app__button"
          type="button"
          onClick={add100}
        >
          add 100
        </button>
        <button
          className="app__button"
          type="button"
          onClick={increase}
        >
          add some
        </button>
      </div>
    </div>
  );
};

export default Counter;
