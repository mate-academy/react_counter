import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

class Counter extends Component {
  state = {
    count: 0,
  };

  add = (arg) => {
    switch (arg) {
      case 1:
        return (this.setState(prevSate => ({
          count: prevSate.count + arg,
        })));
      case 100:
        return (this.setState(prevSate => ({
          count: prevSate.count + arg,
        })));
      case '':
        return (
          (this.state.count % 5 && this.state.count !== 0)
            ? (
              this.setState(prevState => ({
                count: prevState.count + 1,
              })))
            : (
              this.setState(prevState => ({
                count: prevState.count + 101,
              })))
        );
      default: return 'Mistake';
    }
  }

  render() {
    return (
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>
            <h1>
              Count:
              {' '}
              {this.state.count}
            </h1>
          </Card.Title>
          <ButtonGroup>
            <Button
              variant="success"
              onClick={() => this.add(1)}
            >
              Add 1
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.add(100)}
            >
              Add 100
            </Button>
            <Button
              variant="danger"
              onClick={() => this.add('')}
            >
              Increase
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default Counter;
