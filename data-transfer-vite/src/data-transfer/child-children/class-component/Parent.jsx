import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component{
    render() {
        const data = 'Ritika'
        return(
            <div>
                Parent
                <Child value={data}/>
            </div>
        )
    }
}