import React, { Component } from 'react'
import { Child } from './Child'

export class Parent extends Component {
    getData(value) {
        console.log(value);

    }
    render() {
        return (
            <div>
                <Child get = {this.getData} />
            </div>
        )
    }
}
