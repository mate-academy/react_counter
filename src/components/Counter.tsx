import React from 'react';
import Button from '@mui/material/Button';
import './Counter.scss';

type State = {
  counter: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ counter: state.counter + 100 }));
  };

  increase = () => {
    this.addOne();
    if (this.state.counter % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <section className="section">
        <h1 className="section__header">
          {`Count: ${counter}`}
        </h1>

        <div className="section__buttons">
          <Button
            variant="contained"
            className="section__button"
            onClick={this.addOne}
          >
            Add 1
          </Button>
          <Button
            variant="contained"
            className="section__button"
            onClick={this.add100}
          >
            Add 100
          </Button>
          <Button
            variant="contained"
            className="section__button"
            onClick={this.increase}
          >
            Increase
          </Button>
        </div>

        {(counter > 1000)
        && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              this.setState({ counter: 0 });
            }}
          >
            Reset
          </Button>
        )}

      </section>
    );
  }
}
