import React from 'react';

import './App.scss';
import { Counter } from './components/Counter';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Counter />
//       </div>
//     );
//   }
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
