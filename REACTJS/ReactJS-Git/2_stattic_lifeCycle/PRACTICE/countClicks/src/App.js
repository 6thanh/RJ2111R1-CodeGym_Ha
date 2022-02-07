import React from 'react';
import Button from './component/Button';

class App extends React.Component{
   constructor(props){
      super(props);
      this.state ={
         number: 0
      }
   }
   increment = ()=>{
      this.setState({number: this.state.number+1})
   }
   decrease = ()=>{
      this.setState({number: this.state.number-1})
   }
   render(){
      return(
         <div style={{textAlign:"center"}}>
            <Button type='button' value='Increment' onClick={this.increment} />
            <span style={{margin:"10px"}}>{this.state.number}</span>
            <Button type='button' value='Decrease' onClick={this.decrease} />
         </div>
      );
   }
}

export default App;