import React, {Component, createContext, useCallback, useContext, useMemo, useState} from 'react';

let myContext = createContext();

// let {Provider, Consumer} = createContext();

// class Child extends Component{
//     render(){
//         return (
//             <Consumer>
//                 {(context)=>{
//                     return <strong>这是祖先传下来的宝贝: {context.info}</strong>
//                 }}
//             </Consumer>)
//     }
// }

class Child extends Component{
    static contextType = myContext
    render(){
        return (
            <strong>这是祖先传下来的宝贝: {this.context.info}</strong>
        )
    }
}

function Child2(){
    let {info} = useContext(myContext);
    return (
        <div>
            <strong>这是祖先传下来的宝贝: {info}</strong>
        </div>
    )
}

class Parent extends Component{
    render(){
        return (<div>
            <Child />
            <Child2 />
        </div>)
    }
}

class Context extends Component{
    render(){
        return (<div>
            <myContext.Provider value={{info:"今天天气不错"}}>
                <Parent />
            </myContext.Provider>
        </div>)
    }
}
export default Context;