// import logo from './logo.svg';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keypressed : ''
    }
  }
  hander = (e) => {
    this.setState({keypressed: e.key})
  }

  render(){
    return (
      <div style={{textAlign: "center"}}>
        <h3>Key pressed is: {this.state.keypressed}</h3>
        <input type={"text"} onKeyPress={(e)=>this.hander(e)}></input>
      </div>
    )
  }
}


export default App;
