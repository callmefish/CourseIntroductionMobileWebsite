import { set } from 'koa/lib/response';
import React, {useState, useEffect, useRef} from 'react';
import Footer from './footer';
import Header from './header';
import "./index.css";
import Main from './main';

function Todos() {
    const [todos, setTodos] = useState([]);
    function addTodo(val){
        setTodos([...todos, {
            id:Date.now(),
            val,
            completed: false
        }]);
    }
    function changeCompleted(id, completed){
        todos.forEach(item=>{
            if(id == item.id){
                item.completed = completed;
            }
        })
        setTodos([...todos]);
    }
    function remove(id){
        setTodos(todos.filter(item=>item.id!==id));
    }
    function editVal(id, val){
        todos.forEach(item=>{
            if(id == item.id){
                item.val = val;
            }
        })
        setTodos([...todos]);
    }
    function removeCompleted(){
        setTodos(todos.filter(item=>!item.completed));
    }
    function changeAllCompleted(completed){
        todos.forEach(item=>{
            item.completed = completed;
        })
        setTodos([...todos]);
    }
    // console.log(todos);
    return (
        <div id="todoapp">
            <Header addTodo={addTodo}/>
            <Main 
                todos={todos}
                changeCompleted={changeCompleted}
                remove={remove}
                editVal={editVal}
                changeAllCompleted={changeAllCompleted}
            />
            <Footer 
                todos={todos}
                removeCompleted={removeCompleted}
            />
        </div>
    );
}
export default Todos;