import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }

  function add100() {
    setCount(count + 100);
  }

  function increase() {
    (count + 1) % 5 === 0 && count !== 0 ? setCount(count + 101) : addOne();
  }

  return (
    <>
      <h1>
        Count:
        {count}
      </h1>
      <div>
        <button type="button" onClick={addOne}>+1</button>
        <button type="button" onClick={add100}>+100</button>
        <button type="button" onClick={increase}>Magic</button>
      </div>
    </>
  );
}

export default Counter;
