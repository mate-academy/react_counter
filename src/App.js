import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prev => ({
      count: prev.count + 100,
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
      <div>
        <h1 className="ml-5">
          Count:
          {this.state.count}
        </h1>
        <div>
          <Button
            type="button"
            onClick={this.addOne}
            variant="outline-primary"
            className="ml-5"
          >
            Add 1
          </Button>
          <Button
            type="button"
            onClick={this.add100}
            variant="outline-secondary"
            className="ml-3"
          >
            Add 100
          </Button>
          <Button
            type="button"
            onClick={this.increase}
            variant="outline-success"
            className="ml-3"
          >
            increase
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
