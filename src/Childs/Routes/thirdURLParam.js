import React from 'react';

export const ThirdURLParam = (props) =>{
    var jsx=<h1>This is URL Params : {props.match.params.name}</h1>
    return(
        <div>
            {jsx}
        </div>
    )
}  
