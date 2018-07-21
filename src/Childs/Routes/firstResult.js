import React from 'react';
import {connect} from 'react-redux';

const Show = (props) =>{
    return(
        <h4>Result is : {props.result}</h4>
    )
}
 const mapStateToProps=(state)=>{
    let Ans = state.result;
    return {
        result:Ans
    }
}

export default connect(mapStateToProps)(Show);

