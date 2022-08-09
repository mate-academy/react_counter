import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${count}`}
        </h1>

        <Button
          type="button"
          variant="warning"
          className="App__add-one btn"
          onClick={this.addOne}
        >
          Add 1
        </Button>

        <Button
          type="button"
          variant="success"
          className="App__add-100 btn"
          onClick={this.add100}
        >
          Add 100
        </Button>

        <Button
          type="button"
          variant="danger"
          className="App__increase btn"
          onClick={this.increase}
        >
          Increase
        </Button>
      </div>
    );
  }
}
