import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

// console.log(process.env.NODE_ENV); //=> webpack에 의해 mode가 변경됨에 따라 결과값도 달라짐
if(process.env.NODE_ENV === 'production'){
  console.log = () => {};
  console.info = () => {};
  console.error = () => {};
  console.warn = () => {};
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);