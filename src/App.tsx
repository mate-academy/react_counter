import React from 'react';
import './App.scss';

type Props = {};

interface State {
  count: number,
}

class App extends React.Component<Props, State> {
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
      this.addOne();
    } else {
      this.addOne();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{`Count: ${count}`}</h1>

        <div className="App__buttons buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="buttons__item"
          >
            Add one
          </button>

          <button
            type="button"
            onClick={this.add100}
            className="buttons__item"
          >
            Add hundred
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="buttons__item"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
