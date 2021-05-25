import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => this.setState(prevState => ({ count: prevState.count + 1 }));

  add100 = () => this.setState(prevState => ({ count: prevState.count + 100 }));

  increase = () => this.setState(prevState => ({
    count: prevState.count % 5 === 0
      ? prevState.count + 101
      : prevState.count + 1,
  }));

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
          onClick={
            this.addOne
          }
        >
          Add 1
        </button>
        {' '}
        <button
          type="button"
          onClick={
            this.add100
        }
        >
          Add 100
        </button>
        {' '}
        <button
          type="button"
          onClick={
            this.increase
        }
        >
          Increase
        </button>
      </>
    );
  }
}

export default App;
