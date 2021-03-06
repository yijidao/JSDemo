import './App.less';
import HookHome from './component/HookHome';
import ContextHome from './component/ContextHome';
import HOCHome from './component/HOC/HOCHome';
import React from 'react';
import JSXIndex from './component/JSX/index';
import ProtalIndex from './component/Protal/Index';
import RefsAndDom from './component/RefsAndDom/Index';
import RenderPropsIndex from './component/RenderProps/Index'; 

function App() {
  return (
    <div className="App">

      <HookHome />
      <ContextHome />
      {/* <HOCHome /> */}
      <JSXIndex />
      {/* <ProtalIndex /> */}
      <RefsAndDom />
      <RenderPropsIndex />
    </div>
  );
}

export default App;
