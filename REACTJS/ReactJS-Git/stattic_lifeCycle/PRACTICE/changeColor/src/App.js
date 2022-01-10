import React from 'react';
import Button from './component/Button';

class App extends React.Component{
   constructor(props){
      super(props);
      this.state ={
         color: 'black'
      }
   }
   componentDidMount(){
      setTimeout(()=>{
         this.setState({color:"pink"});
      },5000);
   }
   // changeColor=(color)=>{
   //    this.setState({color: color})
   // }
   render(){
      return(
         <div style={{textAlign:"center"}}>
            {/* <Button style={{marginBottom: "20px"}} type="button" value="Change" onClick={this.changeColor.bind(this,'blue')} /> */}
            <div style={{width: "400px", height:"100px", margin:"auto", background:this.state.color}}></div>
         </div>
      );
   }
}

export default App;