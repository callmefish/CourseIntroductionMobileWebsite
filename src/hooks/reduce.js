import React, { createContext, useContext, useReducer } from 'react';

let myContext = createContext();

function reduce(state=0, action){
    switch(action.type){
        case "ADD":
            state++;
            break;
        case "MINUS":
            state--;
            break;
    }
    return state;
}

function Child(){
    let {state, dispatch} = useContext(myContext);
    return (
        <div>
            <button onClick={()=>{dispatch({type:"MINUS"})}}> - </button>
            <span> {state} </span>
            <button onClick={()=>{dispatch({type:"ADD"})}}> + </button>
        </div>
    )
}

function Reduce(){
    let [state, dispatch] = useReducer(reduce, 0);
    return (
        <myContext.Provider value={{state, dispatch}}>
            <Child />
        </myContext.Provider>
    )
}
export default Reduce;