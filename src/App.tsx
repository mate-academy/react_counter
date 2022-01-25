import React from 'react';
import './App.scss';

interface State {
  count: number,
}

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
    if ((this.state.count % 5 === 0) && (this.state.count > 0)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div className="count">
        <h1>
          Count:
          {' '}
          {count}
        </h1>
        <button type="button" onClick={this.addOne} className="btn btn-outline-info center">
          addOne
        </button>
        <button type="button" onClick={this.add100} className="btn btn-outline-info center">
          add100
        </button>
        <button type="button" onClick={this.increase} className="btn btn-outline-info center">
          increase
        </button>
      </div>
    );
  }
}

export default App;
