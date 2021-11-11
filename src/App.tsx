import React from 'react';
import './App.scss';

interface State {
  counter: number;
}

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 100 }));
  };

  increase = () => {
    const { counter } = this.state;

    if (counter % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="title">{`Count: ${this.state.counter}`}</h1>
        <button className="button" type="button" onClick={this.addOne}>Add one</button>
        <button className="button" type="button" onClick={this.add100}>Add hundred</button>
        <button className="button" type="button" onClick={this.increase}>Increase</button>
      </>
    );
  }
}

export default App;
