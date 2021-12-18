import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

//demo 1
    // const items = ['C++', 'Java', 'PHP'];
    // const programming = React.createElement("section", {
    //         id: "coding"
    //     },
    //     React.createElement("h1", null, "Programming Languages"),
    //     React.createElement("ul", {
    //             className: "coding"
    //         },
    //         items.map((coding, i) =>
    //             React.createElement("li", {
    //                 key: i
    //             }, coding))));


//thuc hanh 1
// const name = "Nguyen Thanh Ha";
// const myName = React.createElement("h1", {
//     style: {
//         textAlign: "center"
//     }
// }, name);

//thuc hanh 2
// const name = "Nguyen Thanh Ha";
// const myName = 
//     <h2 className='center'>{name}</h2>;

// thuc hanh 3
// const fruits =  ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];
// const display = 
//     <div>
//         <h1>List of fruits</h1>
//         <ul>
//             { fruits.map((item) => (
//                 <li>{ item }</li>
//             )) }
//         </ul>
//     </div>


//thuc hanh 4
// function time(){
//     const d = new Date();
// const dd = d.getDay();
// const mm = d.getMonth()
// const yy = d.getFullYear();

// const hh = d.getUTCHours();
// const mi = d.getUTCMinutes();
// const ss = d.getSeconds();
// const times = 
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {dd}/{mm}/{yy}-{hh}/{mi}/{ss}</h2>
//         {/* <h2>It is {new Date().toLocaleDateString()}</h2> */}
//     </div>
//     ReactDOM.render(
//         times,
//         document.getElementById('root')
//     );
// }
// setInterval(time,1000);

// bai tap 1
// const nav = 
// <h4>{'Browser detail: '} {navigator.userAgent}</h4>;


//bai tap 2
// const students = [
//     {
//       company: 'Alfreds Futterkiste',
//       contact: 'Maria Anders',
//       country: 'Germany'
//     },
//     {
//       company: 'Centro comercial Moctezuma',
//       contact: 'Francisco Chang',
//       country: 'Mexico'
//     },
//     {
//       company: 'Ernst Handel',
//       contact: 'Roland Mendel',
//       country: 'Austria'
//     },
//     {
//       company: 'Island Trading',
//       contact: 'Helen Bennett',
//       country: 'UK'
//     },
//     {
//       company: 'Laughing Bacchus Winecellars',
//       contact: 'Yoshi Tannamuri',
//       country: 'Canada'
//     },
//     {
//       company: 'Magazzini Alimentari Riuniti',
//       contact: 'Giovanni Rovelli',
//       country: 'Italy'
//     }
//   ]

// const tbl = 
//     <div>
//         <h2>Students</h2>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Company</th>
//                     <th>Contact</th>
//                     <th>Country</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 { students.map((student) => (
//                     <tr>
//                         <td>{student.company}</td>
//                         <td>{student.contact}</td>
//                         <td>{student.country}</td>
//                     </tr>
//                 )) }
//             </tbody>
//         </table>
//     </div>

// bai tap 3

const students = <div className="container">
<div className="card">
  <div className="card--header" />
  <img className="avatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />
  <div className="card--body">
    <div>
      <p className="text-header">Ruma Khan</p>
      <p className="text-sub">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>
      <button className="btn third" >FOLLOW</button>
    </div>
  </div>
</div>
</div>
ReactDOM.render(
    students,
    document.getElementById('root')
);
