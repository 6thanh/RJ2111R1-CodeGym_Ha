import React from 'react';
import Button from './component/Button';
// import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hello: "Hello Word!!!",
      display: true
    }
  }
  componentWillUnmount=()=>{
    alert('The component is going to be unmounted');
    this.setState({display:false})
  }

  render(){
    let comp = null;
    if(this.state.display){
      comp = this.state.hello;
    }
    return(
      <div style={{width:"50%", margin:"auto"}}>
        <h2>{comp}</h2>
        <Button type="button" value="Delete the Component" onClick={this.componentWillUnmount} />
      </div>
    )
  }
}

export default App;
