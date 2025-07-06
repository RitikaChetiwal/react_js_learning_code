import { Component } from "react";
import { Children } from "./Children";

export class Child extends Component{
    render(){
        console.log(this.props);
        console.log(this.props.value);
        
        return(
            <div>
                Child
                Props from parent value: {this.props.value}
                <Children value2={this.props.value}/>
            </div>
        )
    }
}