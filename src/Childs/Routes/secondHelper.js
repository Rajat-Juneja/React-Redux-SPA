import React from 'react';
import { SecondCheese } from './secondCheese';
import { SecondBacon } from './secondBacon';

export const SecondHelper = (props) =>{
return(
    <div>
    <br/><br/>
    <div className="upburger"></div>
    <SecondCheese amount={props.States.cheese}/>
    <SecondBacon amount={props.States.bacon}/>
    <div className="downburger"></div>
    {/* <SecondBacon amount={props.States.bacon}/> */}
    {/* {Order} */}
    </div>
)
}