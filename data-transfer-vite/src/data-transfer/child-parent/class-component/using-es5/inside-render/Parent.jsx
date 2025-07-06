import React, { Component } from 'react';
import { Child } from './Child';

export class Parent extends Component{

    render(){
        const getData = (value) => {
            console.log(value);
            
        }
        return(
            <div>
                <Child get = {getData}/>
            </div>
        )
    }
}