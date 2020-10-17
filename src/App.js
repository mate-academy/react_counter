import React from 'react';
import './App.scss';

import Counter from "./components/Counter/Counter";

class App extends React.Component {
    
    render() {
      return (
    <div>
      <Counter
      counter={0}
      />
    </div>
      )
  }
}

export default App;
