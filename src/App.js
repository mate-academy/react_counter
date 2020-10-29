import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { Button } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    counter: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  add100 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 100,
    }));
  }

  increase = () => {
    if ((this.state.counter % 5) === 0) {
      this.add100();
      this.addOne();
    } else {
      this.addOne();
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          Count:
          {counter}
        </h1>
        <Button.Group>
          <Button
            type="button"
            className="app__button"
            onClick={this.addOne}
          >
            Add One
          </Button>
          <Button
            type="button"
            className="app__button"
            onClick={this.add100}
          >
            Add 100
          </Button>
          <Button
            primary
            type="button"
            className="app__button"
            onClick={this.increase}
          >
            Show Time
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default App;
