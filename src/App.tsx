import React from 'react';
import { Counter } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

interface State {
  count: number,
}

export class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => {
      const { count } = state;

      return {
        count: count + 1,
      };
    });
  };

  add100 = () => {
    this.setState((state) => {
      const { count } = state;

      return {
        count: count + 100,
      };
    });
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    const { count } = this.state;
    const {
      addOne,
      add100,
      increase,
    } = this;

    return (
      <Counter
        count={count}
        addOne={addOne}
        add100={add100}
        increase={increase}
      />
    );
  }
}
