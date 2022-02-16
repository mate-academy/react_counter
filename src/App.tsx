import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <div className="App__wrap">
          <h1 className="App__title">
            Count:
            {' '}
            {count}
          </h1>
          <button className="App__btn" type="button" onClick={this.addOne}>Add 1</button>
          <button className="App__btn" type="button" onClick={this.add100}>Add 100</button>
          <button className="App__btn" type="button" onClick={this.increase}>ncrease</button>
        </div>
      </div>
    );
  }
}

export default App;
