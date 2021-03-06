import React from 'react';
import ReactDOM from 'react-dom';
import useClock from './component/useClock';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Clock = () => {
  const now = useClock();
  return (
    <div>{now.times}</div>
  )
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
