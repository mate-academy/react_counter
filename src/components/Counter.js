import React from 'react';
let count = 0;



const Counter = () => {
  console.log(count);
  return (
    <>
    <button id='btn' onClick={clc} type="button">Click ME</button>
    <div className='digital'>count = 0</div>
    </>
  )
}

function clc(){
  count++
  const digital = document.querySelector(".digital");
  digital.innerHTML = `count = ${count }`
}

export default Counter;
