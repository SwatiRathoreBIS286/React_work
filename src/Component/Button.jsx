import React, { useState } from "react";

const Button= () =>{
    const state = useState();
    // eslint-disable-next-line 
    console.log(state);
    const [count , setCount] = useState(0);

    const IncNum = ()=> {
        setCount(count + 1);
     // console.log(" Clicked ");
   
};
    return(
        <>
            <p>***** when you click increment opration perform ******</p>
            <h1>{count}</h1>
            
            <button onClick={IncNum}> Click Me </button>
        </>
    );
};

export default Button;