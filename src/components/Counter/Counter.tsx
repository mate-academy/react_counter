import React from 'react';
import './Counter.scss';

type Props = {
  count: number,
  addOne: () => void,
  add100: () => void,
  increase: () => void,
};

export const Counter:React.FC<Props> = ({
  count, addOne, add100, increase,
}) => {
  const buttonGenerator = (text:string, method:() => void) => (
    <button type="button" onClick={() => method()}>
      {text}
    </button>
  );

  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      {buttonGenerator('add 1', addOne)}
      {buttonGenerator('add 100', add100)}
      {buttonGenerator('add 1 or 101', increase)}
    </>
  );
};
