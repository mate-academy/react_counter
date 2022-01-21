import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
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
    return (
      <div className="App">
        <div className="App__counter counter">
          <div className="ui black segment">
            <h1 className="header">{this.state.count}</h1>
            <div className="ui buttons">
              <button
                type="button"
                className="ui button"
                onClick={this.addOne}
              >
                AddOne
              </button>
              <button
                type="button"
                className="ui button"
                onClick={this.add100}
              >
                Add100
              </button>
              <button
                type="button"
                className="ui button"
                onClick={this.increase}
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
