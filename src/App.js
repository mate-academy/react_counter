import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    count: 0,
  }

  cleanCount = () => {
    this.setState(state => ({
      count: 0,
    }));
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
    if (this.state.count % 5 === 0) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <section>
        <h1>
          Count:
          {this.state.count}
        </h1>
        <Button.Group>
          <Button
            type="button"
            onClick={this.addOne}
            positive
          >
            + 1
          </Button>

          <Button.Or />

          <Button
            type="button"
            onClick={this.add100}
            positive
          >
            + 100
          </Button>

          <Button.Or />

          <Button
            type="button"
            onClick={this.increase}
            positive
          >
            Three
          </Button>

          <Button.Or />

          <Button
            type="button"
            onClick={this.cleanCount}
            secondary
          >
            Clean
          </Button>
        </Button.Group>
      </section>
    );
  }
}

export default App;
