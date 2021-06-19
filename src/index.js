import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import Card from './Card/Card';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Content/>
    <Card/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
