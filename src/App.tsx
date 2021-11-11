import React from 'react';
import './App.scss';

interface State {
  count: number;
}

type Props = {};

class App extends React.Component<Props, State> {
  state:State = {
    count: 0,
  };

  addOne = () => this.setState(prevState => ({ count: prevState.count + 1 }));

  add100 = () => this.setState(prevState => ({ count: prevState.count + 100 }));

  cleaner = () => this.setState({ count: 0 });

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>
          Count:
          {count}
        </h1>
        <button type="button" onClick={this.addOne}>
          add 1
        </button>

        <button type="button" onClick={this.add100}>
          add 100
        </button>

        <button type="button" onClick={this.increase}>
          add 1 or 100
        </button>

        <button type="button" onClick={this.cleaner}>
          Clean
        </button>
      </>
    );
  }
}

export default App;
