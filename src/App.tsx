import React from 'react';
import './App.scss';

interface State {
  num: number,
}

class App extends React.Component<{}, State> {
  state = {
    num: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      num: prevState.num + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      num: prevState.num + 100,
    }));
  };

  increase = () => {
    if (this.state.num % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { num } = this.state;

    return (
      <div className="father">
        <h1>
          {'Count: '}
          {num}
        </h1>
        <div className="buttons">
          <button
            type="button"
            onClick={this.addOne}
            className="button"
          >
            add one
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button"
          >
            add hundred
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button"
          >
            increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
