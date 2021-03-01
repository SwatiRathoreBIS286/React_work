import React, { useState } from "react";
 const Dyclock=() =>{
     let time = new Date().toLocaleTimeString();

     const [ctime , setCtime] = useState(time);

     const UpdateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCtime(time); 
     };
   
    setInterval(UpdateTime, 1000);

 return(
     <>
     <p>************Dynamic click **************</p>
     <h1>{ctime}</h1>         
   </>
 );
};
export default Dyclock;