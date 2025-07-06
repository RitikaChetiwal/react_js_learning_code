import React, { Component } from 'react'

export class Child extends Component {
    sendData = () => {
        this.props.get(this.data)
    }
    
    data = ['Ritika', 'Gaurav', 'Nisha', 'Sharanya', 'Neeraj', 'Garima', 'Indu'];

  render() {
    return (
      <div>
        <button onClick={this.sendData}>Data</button>
      </div>
    )
  }
}
