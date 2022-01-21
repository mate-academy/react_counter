import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div className="page-container">
          <h1 className="title">
            Count:
            { count }
          </h1>
          <div className="button-container">
            <button type="button" className="knopka01" onClick={this.addOne}>
              Add 1
            </button>
            <button type="button" className="knopka01" onClick={this.add100}>
              Add 100
            </button>
            <button type="button" className="knopka01" onClick={this.increase}>
              Increase
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
