import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import InteratorDemo from './component/InteratorDemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InteratorDemo />


      </BrowserRouter>
    </div>
  );
}

export default App;
