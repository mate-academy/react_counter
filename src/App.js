import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    document.addEventListener('click', (event) => {
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
