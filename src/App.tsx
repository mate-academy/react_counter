import React from 'react';
import './App.scss';

type State = {
  count: number,
  clickCounter: number,
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
    clickCounter: 0,
  };

  addOne = () => {
    this.setState(prevValue => ({ count: prevValue.count + 1 }));
    this.setState(prevValue => ({ clickCounter: prevValue.clickCounter + 1 }));
  };

  add100 = () => {
    this.setState(prevValue => ({ count: prevValue.count + 100 }));
    this.setState(prevValue => ({ clickCounter: prevValue.clickCounter + 1 }));
  };

  increase = () => {
    if (this.state.clickCounter % 5 === 4) {
      this.add100();
    } else {
      this.addOne();
    }
  };

  render() {
    return (
      <>
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>

        <button
          type="button"
          onClick={this.addOne}
        >
          addOne
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          add100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
