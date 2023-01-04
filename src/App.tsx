import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';

import { Button, Card, Image } from 'semantic-ui-react';

type State = {
  count: number;
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
      <div className="App">
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="tiny"
                src="https://cdn-icons-png.flaticon.com/512/5605/5605901.png"
              />
              <Card.Header>
                <h1 className="App__title">{`Count: ${count}`}</h1>
              </Card.Header>
              <Card.Meta>Click to Count</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons">
                <Button
                  color="green"
                  type="button"
                  className="App__add-one"
                  onClick={this.addOne}
                >
                  Add 1
                </Button>
                <Button
                  color="olive"
                  type="button"
                  className="App__add-100"
                  onClick={this.add100}
                >
                  Add 100
                </Button>
                <Button
                  color="teal"
                  type="button"
                  className="App__increase"
                  onClick={this.increase}
                >
                  Increase
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
