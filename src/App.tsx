import React from 'react';
import './App.scss';
import Counter from './components/Counter';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <Counter counter={count} />
      </div>
    );
  }
}

export default App;
