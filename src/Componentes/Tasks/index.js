import React from "react";
import { useState } from "react/cjs/react.development";

function Task(props) {
    const [completed, setCompleted] = useState(false)
    const [color, setColor] = useState('black')

    function handleTask() {
        if(completed == false) {
            setCompleted(true)
            setColor('red')
        }
    }
    
    return(
        <li style={{color: color}} onClick={()=>handleTask()}>{props.val}</li>
    )
}

export default Task