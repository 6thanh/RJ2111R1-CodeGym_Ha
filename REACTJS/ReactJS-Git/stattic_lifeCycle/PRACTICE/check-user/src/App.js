import React from 'react';
import Button from './component/Button';
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hello: "Wellcome!",
      bye: "See you again!",
      isLoggedIn: true
    }
  }
  handerLogOut = () => {
    this.setState({isLoggedIn: false});
  }
  handerLogIn = () => {
    this.setState({isLoggedIn: true});
  }
  
  render(){
    if(this.state.isLoggedIn){
      return (
        <div>
          <h2>{this.state.hello}</h2>
          <Button type="button" value="Log Out" onClick={this.handerLogOut} />
        </div>
      )
    }
    
    return (
      <div>
        <h2>{this.state.bye}</h2>
        <Button type="button" value="Log In" onClick={this.handerLogIn} />
      </div>
    )
    
  }
}

export default App;
