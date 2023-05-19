import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';                                                       
import Home from './component/Home';
// import Contactme from './component/Contactme';
// import Myskills from './component/Myskills';
// import Aboutme from './component/Aboutme';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Contactme />
    <Myskills />
    <Aboutme /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
