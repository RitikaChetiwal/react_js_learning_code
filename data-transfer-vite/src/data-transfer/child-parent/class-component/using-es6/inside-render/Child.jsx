import React, { Component } from 'react'

export class Child extends Component {
  render() {
    const sendData = () => {
        this.props.get(data)
    }

    const data = ['Ritika', 'Gaurav', 'Nisha', 'Sharanya', 'Neeraj', 'Garima', 'Indu'];

    return (
      <div>
        <button onClick={sendData}>Data</button>
      </div>
    )
  }
}
