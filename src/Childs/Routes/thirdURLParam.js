import React from 'react';

export const ThirdURLParam = (props) =>{
    return(
        <div>
            <h1>This is URL Params : {props.match.params.name}</h1>
        </div>
    )
}  
