import React from 'react';
import { NavLink,Route } from 'react-router-dom';
import {ThirdURLParam} from './thirdURLParam';
import {ThirdSearchParam} from './thirdSearchParam';

export const Third = () =>{
    var url;
    function getChange(event){
        var value = event.target.value;
            url = "/third/"+value;
            console.log(url);
    }
    return(
        <div>
        <h1>Welcome to the Third Route</h1>
        <input type="text" placeholder="Enter name for 2nd Link" onChange={getChange}/>
        <ul>
            <li>
                <NavLink activeClassName="active" to={{pathname:'/third/fthird',hash:'#fthird',search:'?price=9000&section=third'}}>Link with Search Params and HashTag</NavLink>
            </li>
            <li>
                {/* <NavLink activeClassName="active" to={{pathname:url}}>Link with URL Params</NavLink> */}
            </li>
        </ul>
        <Route path="/third/fthird" exact component={ThirdSearchParam}></Route>
        {/* <Route path="/third/:name" exact component={ThirdURLParam}></Route> */}
        </div>
    )
}