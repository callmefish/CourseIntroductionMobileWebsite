import React, {useState, useEffect} from 'react';


function Txt(props){
    let {text, setEdit} = props;
    return (
        <div>
            {text} <a onClick={()=>{
                setEdit(true);
            }}>编辑</a>
        </div>
    )
}
function Edit(props){
    let {text, setText, setEdit} = props;
    function toScroll() {
        let txt = document.querySelector("#txt");
        let y = window.scrollY;
        txt.style.transform = `translateY(${y}px)`;
        
    }
    useEffect(()=>{
        window.addEventListener("scroll", toScroll);
        return ()=>{
            window.removeEventListener("scroll", toScroll);
        }
    },[])
    return (
        <input 
            type="text"
            value={text}
            id="txt"
            onChange={(e)=>{
                setText(e.target.value)
            }}
            onBlur={()=>{
                setEdit(false);
            }} 
    />)
}

function Effect() {
    const [text, setText] = useState("这是今天的课程");
    const [edit, setEdit] = useState(false);
    
    return (
        <div>
            {edit?
               <Edit 
                    text={text}
                    setText={setText}
                    setEdit={setEdit} 
               />
               :
               <Txt text={text} setEdit={setEdit}/>

            }
            {[...(".".repeat(100))].map((item, index)=>{
                return <div key={index}>页面填充内容，无关紧要</div>
            })}
        </div>
    );
}
export default Effect;