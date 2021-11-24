import React from 'react';
import './App.scss';

interface State {
  value: number,
}

class App extends React.Component<{}, State> {
  state = {
    value: 0,
  };

  addOne = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  add100 = () => {
    this.setState((prevState) => ({
      value: prevState.value + 100,
    }));
  };

  increase = () => {
    const { value } = this.state;

    if (value % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <h1>
          {`Count: ${value}`}
        </h1>
        <div
          className="Buttons"
        >
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
