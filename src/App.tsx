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
    this.setState((state: State) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state: State) => ({ count: state.count + 100 }));
  };

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <>
        <h1 className="bg-blue-500 text-white text-3xl font-bold px-4 py-3">{`Count: ${this.state.count}`}</h1>
        <button
          className="block cursor-cell bg-blue-500 hover:bg-blue-700 text-white m-2 py-2 px-4 rounded-full"
          type="button"
          onClick={this.addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="block cursor-cell bg-blue-500 hover:bg-blue-700 text-white m-2 py-2 px-4 rounded-full"
          onClick={this.add100}
        >
          Add 100
        </button>

        <button
          type="button"
          className="block cursor-cell bg-blue-500 hover:bg-blue-700 text-white m-2 py-2 px-4 rounded-full"
          onClick={this.increase}
        >
          The longest button on this page that adds 101, if the count is divisible by 5.
          <br />
          Otherwise, it works like the first button.
        </button>
      </>
    );
  }
}

export default App;
