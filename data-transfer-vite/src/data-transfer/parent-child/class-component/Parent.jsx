import React, { Component } from 'react'
import { Child } from './Child';

export class Parent extends Component {
    myName = 'Ritika';
    myAge = 100 
  render() {
    return (
      <div>
        <Child name={this.myName} age={this.myAge}/>
      </div>
    )
  }
}

