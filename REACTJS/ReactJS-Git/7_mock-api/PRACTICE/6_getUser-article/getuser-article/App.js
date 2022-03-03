import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user:[]}
  }

  componentDidMount() {
    const getUser = axios.get('http://localhost:3000/users')
    const getArticle = axios.get('http://localhost:3000/book')
    axios.all([getUser,getArticle])
    .then(axios.spread((res1,res2) => {
      // console.log(res1.data);
      // console.log(res2.data);
      const data = res1.data.map((user) => { return {...user, article: res2.data.filter((item) => { return item.id == user.id })} })
      // console.log(users)
      this.setState({ users: data })
      
    })
    .catch((err) => {throw err}))
  }

  render () {
    const { users } = this.state;
    console.log(users)
    return (
      <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{color: "red"}}>Article numbers</th>
            </tr>
          </thead>
          <tbody>
          { users.map((user) => (
            <tr key={user.id} >
              <td> {user.username} </td>
              <td> {user.id} </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default App;
