import React from 'react';
import './App.scss';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt="Moon"
        />
        <div className="stars"> </div>
        <div className="twinkling"> </div>
        <div className="clouds"> </div>
        <Counter />
      </div>
    </>
  );
};

export default App;
