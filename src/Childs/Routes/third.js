import React,{Component} from 'react';
import { NavLink,Route,Switch } from 'react-router-dom';
import {ThirdURLParam} from './thirdURLParam';
import {ThirdSearchParam} from './thirdSearchParam';
import {EnterName} from './EnterName';

export class Third extends Component{
    constructor(){
        super();
        this.url='';
        this.empty=true;
    }
    getChange(event){
        var value = event.target.value;
        if(value.trim().length>0){
            this.empty=false;
        }
        else{
            this.empty=true;
        }
            this.url = "/third/"+value;
            console.log(this.url);
    }
    render(){
    return(
        <div>
        <h1>Welcome to the Third Route</h1>
        <input type="text" placeholder="Enter name for 2nd Link" onChange={this.getChange.bind(this)}/>
        <ul>
            <li>
                <NavLink activeClassName="active" to={{pathname:'/third/fthird',hash:'#fthird',search:'?price=9000&section=third'}}>Link with Search Params and HashTag</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to={!this.empty?{pathname:this.url}:{pathname:'/third/enterName'}}>Link with URL Params</NavLink>
            </li>
        </ul>
        <Switch>
        <Route path="/third/fthird" exact component={ThirdSearchParam}></Route>
        <Route path="/third/entername" exact component={EnterName}></Route>
        <Route path="/third/:name" exact component={ThirdURLParam}></Route>
        </Switch>
        </div>
    )
    }
}