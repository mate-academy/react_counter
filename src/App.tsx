import React from 'react';
import './App.scss';

type State = {
  count: number
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
    this.addOne();
    this.setState((state) => {
      if (state.count % 5 === 0) {
        this.add100();
      }
    });
  };

  render() {
    const { count } = this.state;
    const btnClass = 'waves-effect waves-purple btn-large';

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <div>
          <button
            type="button"
            onClick={this.addOne}
            className={btnClass}
          >
            addOne
          </button>
          <button
            type="button"
            onClick={this.add100}
            className={btnClass}
          >
            add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className={btnClass}
          >
            increase
          </button>
        </div>
      </>
    );
  }
}

export default App;
