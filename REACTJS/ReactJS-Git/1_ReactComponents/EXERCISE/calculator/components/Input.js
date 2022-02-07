import React from 'react';

class Input extends React.Component{
    render(){
        return (
            <input type={this.props.type} onChange={this.props.onChange}></input>
        )
    }
}

export default Input;