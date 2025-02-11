import React from 'react';
import './assets/css/App.css'; // modules : false일 때
// import { Header } from './assets/css/App.css'; // modules : true일 때
function App() {
  return (
    <div id={'App'}>
      <h1 className={'Header'}>Normal CSS</h1>
      {/* <h1 className={Header}>Normal CSS</h1> */}
    </div>
  );
}

export default App;
