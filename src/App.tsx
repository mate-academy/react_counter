import React from 'react';
import './App.scss';

type State = {
  num: number
};

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState(prevState => ({ num: prevState.num + 1 }));
  };

  add100 = () => {
    this.setState(prevState => ({ num: prevState.num + 100 }));
  };

  increase = () => {
    this.setState(prevState => {
      if (!(prevState.num % 5)) {
        this.add100();
      }

      this.addOne();
    });
  };

  render() {
    const { num } = this.state;

    return (
      <div className="counter-card">
        <h1 className="counter-card__counter">{`Count: ${num}`}</h1>
        <button type="button" onClick={this.addOne}>Add one</button>
        <button type="button" onClick={this.add100}>Add 100</button>
        <button type="button" onClick={this.increase}>Magic button</button>
      </div>
    );
  }
}

export default App;
