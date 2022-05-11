import React from 'react';
import { Counter } from './components/Counter';

type State = {
  count: number,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}

export default App;
