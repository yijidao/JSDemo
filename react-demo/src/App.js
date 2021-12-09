import './App.less';
import HookHome from './component/HookHome';
import ContextHome from './component/ContextHome';
import HOCHome from './component/HOC/HOCHome'
import React from 'react';
import JSXIndex from './component/JSX/index'

function App() {
  return (
    <div className="App">

      <HookHome />
      <ContextHome />
      {/* <HOCHome /> */}
      <JSXIndex />
    </div>
  );
}

export default App;
