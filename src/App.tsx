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
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  // DON'T change the code below
  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div
        className="
          App
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
        style={{ height: '100vh' }}
      >
        <div
          className="
            d-flex
            flex-column
            justify-content-center
            p-5
            bg-gradient
            rounded
            bg-opacity-70
            shadow
          "
          style={{ height: '300px' }}
        >
          <h1
            className="
              App__title
              mb-4
              text-center
              text-black
              fw-bold
            "
          >
            {`Count: ${count}`}
          </h1>

          <div className="d-flex justify-content-center">
            <Button
              type="button"
              className="App__add-one"
              onClick={this.addOne}
              variant="light"
              size="lg"
            >
              Add 1
            </Button>

            <Button
              type="button"
              className="App__add-100 ms-2"
              onClick={this.add100}
              variant="light"
              size="lg"
            >
              Add 100
            </Button>

            <Button
              type="button"
              className="App__increase ms-2"
              onClick={this.increase}
              variant="light"
              size="lg"
            >
              Increase
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
