import React from "react";

class Button extends React.Component{
    render(){
        return (
            <input type={this.props.type} onClick={this.props.onClick} value={this.props.value}></input>
        )
    }
}

export default Button;