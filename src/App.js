import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (event) => {
      if (event.target.type !== 'button') {
        return;
      }

      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    });
  }

  render() {
    return (
      <>
        <button type="button" className="btn">More</button>
        <h1>
          Count:
          {this.state.count}
        </h1>
      </>
    );
  }
}

export default App;
