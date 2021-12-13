import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{`Count ${this.state.count}`}</h1>
        <div className="buttons">
          <button type="button" className="buttons__item" onClick={() => this.addOne()}>Add 1</button>
          <button type="button" className="buttons__item" onClick={() => this.add100()}>Add 100</button>
          <button type="button" className="buttons__item" onClick={() => this.increase()}>Increase</button>
        </div>
      </div>
    );
  }
}

export default App;
