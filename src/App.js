import React from 'react';
import Counter from './components/Counter';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 === 0 && count !== 0) {
      this.add100();
    }

    this.addOne();
  };

  remover = () => {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <Counter
        count={count}
        addOne={this.addOne}
        add100={this.add100}
        increase={this.increase}
        remover={this.remover}
      />
    );
  }
}

export default App;
