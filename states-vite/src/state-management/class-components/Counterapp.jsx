import { Component } from "react";

export class Counterapp extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // decrement = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

    // reset = () => {
    //     this.setState({
    //         count: 0
    //     })
    // }
    // incrementByVal = (val) => {
    //     this.setState({
    //         count: this.state.count + val
    //     })
    // }

    // Optimized version

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }))
    }

    decrement = () => {
        this.setState(prev => ({ count: prev.count - 1 }))
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    incrementByVal = (val) => {
        this.setState(prev => ({ count: prev.count + val }))
    }

    render() {
        return (
            <div className="app">
                <h1>Counter: {this.state.count}</h1>
                <div className="buttons">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={() => this.incrementByVal(10)}>Add 10</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}