import React,{Component} from 'react';
import '../CSS/first.css';
import {Show} from './firstResult'

export class FirstComp extends Component{
    constructor(){
        super();
    }
    compute(){
        
    }
    render(){
        return(
            <div className="first">
                <input type="text" ref="fno" placeholder="Enter First Number"/>
                <input type="text" ref="sno" placeholder="Enter Second Number"/>
                <br/>
                <button onClick={this.compute.bind(this)}>Add</button>
                <button onClick={this.compute.bind(this)}>Subtract</button>
                <button onClick={this.compute.bind(this)}>Multiply</button>
                <button onClick={this.compute.bind(this)}>Divide</button>

                <Show/>
            </div>
        )
    }
}