import React from "react";
import Input from "./Input";
import Button from "./Button";

class Calculator extends React.Component{
    constructor(){
        super();
        this.state={
            firstNumber: 0,
            secondNumber: 0,
            operator: null,
            displayValue: 0
        }
    }

calculator (operator) {
    switch(operator){
        case "+":
            this.setState({
                displayValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber)
            });
            break;
        case "-": this.setState({displayValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber)}); break;
        case "x": this.setState({displayValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber)}); break;
        case "/": this.setState({displayValue: parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber)}); break;
        default: this.setState({displayValue: "Invalid input"});
    }
}

    render(){
        return(
            <div className="calculator">
                <Input type="number" onChange={(e)=>{
                    this.setState({firstNumber: e.target.value})
                }} />
                <br /> <br />
                <Input type="number" onChange={(e)=>{
                    this.setState({secondNumber: e.target.value})
                }} />
                <br />
                <h1>Result: {this.state.displayValue}</h1>
                <Button type="button" value="+" onClick={()=> {this.calculator("+")}} />
                <Button type="button" value="-" onClick={()=> {this.calculator("-")}} />
                <Button type="button" value="x" onClick={()=> {this.calculator("x")}} />
                <Button type="button" value="/" onClick={()=> {this.calculator("/")}} />
            </div>
        )
    }
}

export default Calculator;