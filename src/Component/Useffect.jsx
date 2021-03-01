import React, { useEffect, useState } from "react";

const Effect = () =>{
    const [num, setNum] = useState(0);

    useEffect(()=>{
        alert("I am clikced");

    })
     
    return(
        <>
        <p>*** useEeffect in React ***</p>
        <p>when you click alert funtion call</p>
        <button onClick = {()=>{setNum(num+1)}}>Click Me {num }</button>
        
        </> 
    )
};

export default Effect;