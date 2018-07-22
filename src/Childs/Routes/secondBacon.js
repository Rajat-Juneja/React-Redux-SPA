import React from 'react';

export const SecondBacon = (props)=>{
    var baconAmount = [];
    for(let i=0;i<props.amount;i++){
        baconAmount.push(<div className="bacon" key={i}></div>)
    }
    
    return(
        <div>
            {baconAmount}
        </div>
    )
}