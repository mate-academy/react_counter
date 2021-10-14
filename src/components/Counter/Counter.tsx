import React from 'react';
import './Counter.scss';

interface State {
  counter: number,
}

interface Style {
  backgroundColor: string,
}


export default class Count extends React.Component<{}, State> {
  state:State = {
    counter: 0,
  };

  addOne = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  add100 = () => {
    this.setState(({ counter }) => ({ counter: counter + 100 }));
  };

  increase = () => {
    if (this.state.counter === 0 || this.state.counter % 5 === 0) {
      this.setState(({ counter }) => ({ counter: counter + 101 }));
    } else {
      this.addOne();
    }
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    const style:Style = {
      backgroundColor: '',
    }

    this.state.counter % 5 === 0 ? (style.backgroundColor = '#e7912e') : null;

    return (
      <div className="counter">
        <h1 className="counter__title" onClick={this.reset} onKeyDown={this.reset}>
         Count: {counter}
        </h1>

        <button type="button" className="button button__addone" onClick={this.addOne}>
          Add one
        </button>

        <button type="button" className="button button__addhund" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" style = {{ backgroundColor: style.backgroundColor }}className="button button__increase" onClick={this.increase}>
          {this.state.counter % 5 === 0  ? `Add 101` : `Increase`}
        </button>
      </div>
    );
  }
}
