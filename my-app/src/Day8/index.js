import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';


//thuc hanh 1
const name = "Nguyen Thanh Ha";
const myName = React.createElement("h1", {
    style: {
        textAlign: "center"
    }
}, name);

ReactDOM.render(
    myName,
    document.getElementById('root')
);