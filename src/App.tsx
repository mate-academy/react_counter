import React from 'react';
import './App.scss';
import { Counter } from './Counter';

interface State {
  count: number,
}

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  incraseValueL = (param:string) => {
    switch (param) {
      case 'addOne':
        this.setState((state) => ({ count: state.count + 1 }));
        break;

      case 'add100':
        this.setState((state) => ({ count: state.count + 100 }));
        break;

      case 'increase':
        this.setState((state) => (
          { count: state.count % 5 === 0 ? state.count + 100 + 1 : state.count + 1 }
        ));
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Counter
        counter={this.state.count}
        incraseValue={(param:string) => {
          this.incraseValueL(param);
        }}
      />
    );
  }
}

export default App;
