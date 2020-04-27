//import React, { useState } from 'react';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  clickOnBtn = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <>
        <h1 className="header">{`Count: ${this.state.count}`}</h1>
        <button type="submit" onClick={this.clickOnBtn} className="btnCount">
          Click me
        </button>
      </>
    );
  }
}
// done with hooks
// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>
//         value is
//         {count}
//       </h1>
//       <button className='btnCount' onClick={() => setCount(count + 1)}>
//         count++
//       </button>
//     </>
//   );
// };

export default App;
