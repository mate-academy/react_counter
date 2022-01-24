import React from 'react';
import 'bulma/css/bulma.min.css';

import { Counter } from './components/Counter';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="box">
        <Counter />
      </div>
    );
  }
}

export default App;
