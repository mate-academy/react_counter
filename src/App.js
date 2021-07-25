import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  }

  addOne(arg) {
    this.setState(prevSate => ({
      count: prevSate.count + arg,
    }));
  }

  add100(arg) {
    this.setState(prevSate => ({
      count: prevSate.count + arg,
    }));
  }

  increase() {
    if (this.state.count % 5) {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    } else {
      this.setState(prevState => ({
        count: prevState.count + 101,
      }));
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
              onClick={() => this.addOne(1)}
            >
              Add 1
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.add100(100)}
            >
              Add 100
            </Button>
            <Button
              variant="danger"
              onClick={() => this.increase()}
            >
              Increase
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default App;
