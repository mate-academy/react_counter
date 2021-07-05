import React from 'react';
import { Container, Row, Jumbotron, Button } from 'react-bootstrap';

import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  add100 = () => {
    this.setState(({ count }) => ({ count: count + 100 }));
  };

  increase = () => {
    if (!(this.state.count % 5)) {
      this.add100();
    }

    this.addOne();
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="justify-content-center">
            <h1>
              {`Count: ${this.state.count}`}
            </h1>
          </Row>

          <Row className="justify-content-around">
            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={this.addOne}
            >
              + 1
            </Button>

            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={this.increase}
            >
              + MAGIC +
            </Button>

            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={this.add100}
            >
              + 100
            </Button>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
