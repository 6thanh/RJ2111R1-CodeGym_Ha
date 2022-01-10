import React from 'react';

class Button extends React.Component{
    render(){
        return (
            <input style={this.props.style} type={this.props.type} value = {this.props.value} onClick={this.props.onClick}></input>
        )
    }
}

export default Button;