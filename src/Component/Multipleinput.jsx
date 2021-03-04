import React, { useState } from "react";

const Input = () =>{

    const[userRegistration, setuserRegistration] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
    });

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setuserRegistration({...userRegistration,})

    }
    return(
        
            <form action = " ">
                <>
               <br/> <p>******this is a registration from*********</p>
                    <label htmlform = "username">FullName</label>
                    <input type =  "text" autoComplete = "off" value = {userRegistration.username}
                    onChange = {handleInput} name ="username" id = "username"></input>
                </><br/>

                <>
                    <label htmlform = "password">Password</label>
                    <input type =  "text" autoComplete = "off" value = {userRegistration.password}
                    onChange = {handleInput} name ="password" id = "password"></input>
                </>

                <>
                    <label htmlform = "email">Email</label>
                    <input type =  "text" autoComplete = "off" value = {userRegistration.email}
                    onChange = {handleInput} name ="email" id = "email"></input>
                </>

                <>
                    <label htmlform = "phone">Phone Number</label>
                    <input type =  "text" autoComplete = "off" value = {userRegistration.phone}
                    onChange = {handleInput} name ="phone" id = "phone"></input>
                </>

                <button type ="submit"> Enter</button>
            </form>
    );
};

export default Input;