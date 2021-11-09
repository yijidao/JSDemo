import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import SwitchLinePanel from './component/SwitchLinePanel.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (<div className="App">
    {/* <Button type="primary">Button</Button> */}
    <SwitchLinePanel />
  </div>);
}

export default App;
