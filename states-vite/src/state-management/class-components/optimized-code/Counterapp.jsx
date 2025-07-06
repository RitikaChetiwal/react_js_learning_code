import { Component } from "react";

export class Counterapp extends Component {
    state = { count: 0 };

    modifyCount = (delta) => {
        this.setState(prevState => ({
            count: prevState.count + delta
        }));
    };

    increment = () => this.modifyCount(1);
    decrement = () => this.modifyCount(-1);
    reset = () => this.setState({ count: 0 });
    incrementBy15 = () => this.modifyCount(15);

    render() {
        const { count } = this.state;
        return (
            <div className="app">
                <h1>Counter: {count}</h1>
                <div className="buttons">
                    <button onClick={this.increment}>Increment</button>
                    <button
                        onClick={this.decrement}
                        disabled={count === 0}
                    >
                        Decrement
                    </button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.incrementBy15}>Add 15</button>
                </div>
            </div>
        );
    }
}