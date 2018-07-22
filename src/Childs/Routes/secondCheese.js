import React from 'react';

export const SecondCheese = (props)=>{
    var cheeseAmount = [];
    for(let i=0;i<props.amount;i++){
        cheeseAmount.push(<div className="cheese" key={i}></div>)
    }
    return(
        <div>
            {cheeseAmount}
        </div>
    )
}