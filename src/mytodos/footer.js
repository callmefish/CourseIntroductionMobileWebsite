import React, {useState, useEffect, useRef} from 'react';

function Footer(props) {
    let {todos, removeCompleted} = props;
    let uncompleted = todos.filter(item=>!item.completed).length;
    let completed = todos.length - uncompleted;
    return (
        <footer
            style={{display:todos.length>0?"block":"none"}}
        >
            <a 
                id="clear-completed" 
                style={{display:completed>0?"block":"none"}}
                onClick={()=>{
                    removeCompleted();
                }}
            >Clear {completed} completed item</a>
            <div id="todo-count">{uncompleted} items left</div>
        </footer>
    );
}
export default Footer;