import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/users')
    .then((res)=>{
        this.setState({users: res.data})
        console.log(this.state)
    })
    .catch((err)=>{throw err})
  }

  render(){
    const {users} = this.state;
    return (
      <div className="container">
        <h1>User list</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user) =>(
                  <tr key={user.id}>
                      <td className="text-center">{user.id}</td>
                      <td>{user.username}</td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
  
}

