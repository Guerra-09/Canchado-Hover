import './input.css'
import React from 'react'


class Input extends React.Component{

    render(){
        return (
            <div>
                <p> {this.props.titulo} </p>
                <input type={this.props.type} />

            </div>
        )
    }
}

export default Input