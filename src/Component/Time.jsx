import React, { useState } from "react";

const Time=() =>{
    let newTime = new Date().toLocaleTimeString();

    const[ctime, setctime] = useState(newTime);

    const UpdateTime = () =>{
     newTime = new Date().toLocaleTimeString();
     setctime(newTime); 
    };
    return(
        <>
            <p>**change the time to ccurrent time when you click on button
                Everytime you refresh the page time should be updated******</p>
                <h1>Time</h1>
                <h1>{ctime}</h1>
                <button onClick ={UpdateTime}>get time</button>  
        </>
    );
};
export default Time;