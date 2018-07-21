export const reducer = (state={},action) =>{
    if(action.type=="ADD"){
        let result = parseInt(action.payLoad.first) + parseInt(action.payLoad.second);
        state = {...state,result:result};
        return state;
    }
    else
    if(action.type=="SUB"){
        let result = parseInt(action.payLoad.first) - parseInt(action.payLoad.second);
        state = {...state,result:result};
        return state;
    }
    else
    if(action.type=="MUL"){
        let result = parseInt(action.payLoad.first) - parseInt(action.payLoad.second);
        state = {...state,result:result};
        return state;
    }
    else
    if(action.type=="DIV"){
        let result = parseInt(action.payLoad.first / action.payLoad.second);
        state = {...state,result:result};
        return state;
    }
    return state;
}