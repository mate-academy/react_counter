import React from 'react';
import './App.scss';

interface State {
  age: number,
}

class App extends React.Component<{}, State> {
  state = {
    age: 0,
  };

  addOne = () => this.setState(prevState => ({ age: prevState.age + 1 }));

  add100 = () => this.setState(prevState => (
    { age: prevState.age + 100 }
  ));

  increase = () => (
    this.state.age % 5 === 0
      ? (this.add100(), this.addOne())
      : this.addOne());

  render() {
    return (
      <div className="App">
        <h1>{`Count: ${this.state.age}`}</h1>
        <button
          type="button"
          onClick={this.addOne}
        >
          add 1
        </button>

        <button
          type="button"
          onClick={this.add100}
        >
          add 100
        </button>

        <button
          type="button"
          onClick={this.increase}
        >
          increase
        </button>
      </div>
    );
  }
}

export default App;
