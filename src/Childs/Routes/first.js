import React,{Component} from 'react';
import '../CSS/first.css';
import Show from './firstResult';
import {Store} from '../../Models/Store';


export class FirstComp extends Component{
    constructor(){
        super();
    }
    compute(event){
        var operation = event.target.getAttribue('myvalue');
        var fno = this.refs.fno.value;
        var sno = this.refs.sno.value;
        const payLoad = {first:fno,second:sno};
        Store.dispatch({type:operation,payLoad:payLoad});
    }
    render(){
        return(
            <div className="first">
                <input type="text" ref="fno" placeholder="Enter First Number"/>
                <input type="text" ref="sno" placeholder="Enter Second Number"/>
                <br/>
                <button myvalue="ADD" onClick={this.compute.bind(this)}>Add</button>
                <button myvalue="SUB" onClick={this.compute.bind(this)}>Subtract</button>
                <button myvalue="MUL" onClick={this.compute.bind(this)}>Multiply</button>
                <button myvalue="DIV" onClick={this.compute.bind(this)}>Divide</button>

                <Show/>
            </div>
        )
    }
}