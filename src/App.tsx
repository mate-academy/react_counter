import React from 'react';
import './App.scss';

type State = {
  x: number,
  btnName: string;
};

class App extends React.Component<{}, State> {
  state = {
    x: 0,
    btnName: '+1',
  };

  addOne = () => {
    this.setState((state) => ({
      x: state.x + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      x: state.x + 100,
    }));
  };

  increase = (x: number) => {
    return (x % 5 === 0)
      ? this.setState((state) => ({
        x: state.x + 101,
        btnName: '+100',
      }))
      : this.setState((state) => ({
        x: state.x + 1,
        btnName: '+1',
      }));
  };

  render() {
    const { x, btnName } = this.state;

    return (
      <>
        <h1>
          {'Count: '}
          {x}
        </h1>
        <div className="wraper">
          <button
            type="button"
            onClick={this.addOne}
          >
            +1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            +100
          </button>
          <button
            type="button"
            onClick={() => {
              this.increase(x);
            }}
          >
            {btnName}
          </button>
        </div>
      </>
    );
  }
}

export default App;
