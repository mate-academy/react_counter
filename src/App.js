/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React from 'react';
import './App.css';

function App() {
  const clicked = () => {
    alert('Button was clicked!');
  };

  return (
    <div className="button-position">
      <button className="alert-button" onClick={clicked}>Click me</button>
    </div>
  );
}

export default App;
