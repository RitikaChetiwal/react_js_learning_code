import React, { Component } from 'react'

export class Child extends Component {

    render() {
        
        console.log(this.props);
        console.log(this.props.name);
        console.log(this.props.age);

        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Age: {this.props.age}</h3>
            </div>
        )
    }
}
