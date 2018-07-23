import React from 'react';
import queryString from 'query-string';

export const ThirdSearchParam = (props) =>{
    // const query = new URLSearchParams(props.location.search);
    let value=queryString.parse(props.location.search);
    console.log(value);
    return(
        <div>
            <h3>Price is :{value.price}</h3>
            <h3>Section is :{value.section}</h3>
        </div>
    )
}