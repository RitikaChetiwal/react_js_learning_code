import { Component } from "react";

export class Children extends Component{
    render(){
        console.log(this.props);
        console.log(this.props.value2);
        
        return(
            <div>
                Children
                Props from child value2: {this.props.value2}
            </div>
        )
    }
}