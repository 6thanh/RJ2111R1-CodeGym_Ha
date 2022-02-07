import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';
import './bootstrap/dist/css/bootstrap.css'

const Alert = (props)=>{
  return(
    <div className='alert alert-warning' role={alert}>
      <p>{props.text}</p>
    </div>
  )
}

ReactDOM.render( 
  <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại"/> ,
  document.getElementById('root')
);