import React, { Component } from 'react';

export class Child extends Component {

    render() {
        const sendData = function sendData() {
            this.props.get(data)
        }

        const data = ['Ritika', 'Gaurav', 'Nisha', 'Sharanya', 'Neeraj', 'Garima', 'Indu'];

        return (
            <>
                <button onClick={sendData.bind(this)}>Data</button>
            </>
        )
    }
}