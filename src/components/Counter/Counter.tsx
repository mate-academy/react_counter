import { FC } from 'react';
import './Counter.scss';

interface Props {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
}

export const Counter: FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <>
      <h1 className="Title">
        {`Count: ${count}`}
      </h1>
      <div className="Buttons">
        <button
          type="button"
          className="Button"
          onClick={addOne}
        >
          ADD ONE
        </button>
        <button
          type="button"
          className="Button"
          onClick={add100}
        >
          ADD 100
        </button>
        <button
          type="button"
          className="Button"
          onClick={increase}
        >
          INCREASE
        </button>
      </div>
    </>
  );
};
