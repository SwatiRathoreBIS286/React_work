import React from "react";
import {Route, Link} from "react-router-dom";

let Contacts = ({match}) => <p>{match.params.id}</p>
const Contact = () =>{
    return(
        <>
            <h1>Hello Contact page</h1>
            <strong>select contact id</strong>
            <ul>
            <li><Link to = "/contact1">Contact 1</Link></li>
            <li><Link to = "/contact2">Contact 2</Link></li>
            <li><Link to = "/contact3">Contact 3</Link></li>
            <li><Link to = "/contact4">Contact 4</Link></li>
            </ul>
            <Route path = " /contact/:id" component={Contacts}/>
        </>
    )
};

export default Contact;