import React from "react";
import Tasks from "../Tasks";


function Task(props) {
    return(
        <>
            <ul>
                {props.tasks.map((val, key)=>{
                    return <Tasks val={val} key={key}/>
                })}
            </ul>
        </>
    )
}

export default Task