import { Component } from 'react';
import './Counter.scss';

type State = {
  count: number,
};

class Counter extends Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => this.setState((state) => ({
    count: state.count + 1,
  }));

  add100 = () => this.setState((state) => ({
    count: state.count + 100,
  }));

  increase = () => {
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{`Count: ${count}`}</h1>

        <div className="controler">
          <button
            className="button controler__button"
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>

          <button
            className="button controler__button"
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>

          <button
            className="button controler__button"
            type="button"
            onClick={this.increase}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
