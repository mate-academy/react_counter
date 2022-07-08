import React from 'react';
import './App.scss';

interface State {
  count: number;
}

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
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="box container">
          <h1 className="title is-1 has-text-centered">{`Count: ${this.state.count}`}</h1>

          <div className="columns is-centered">
            <div className="column">
              <button
                className="button is-primary is-large is-fullwidth"
                type="button"
                onClick={this.addOne}
              >
                Add 1
              </button>
            </div>

            <div className="column">
              <button
                className="button is-primary is-large is-fullwidth"
                type="button"
                onClick={this.add100}
              >
                Add 100
              </button>
            </div>

            <div className="column">
              <button
                className="button is-primary is-large is-fullwidth"
                type="button"
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
