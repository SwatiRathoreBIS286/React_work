import React from "react";
import {Route, Link} from "react-router-dom";

let Fruits= ({match}) => <p>{match.params.id}</p>
const About = () =>{
    return(
        <>
            <h1>Hello Home</h1>
            <strong>select items</strong>
            <ul>
            <li><Link to = "/about">Apple</Link></li>
            <li><Link to = "/about">Mango</Link></li>
            <li><Link to = "/about">Orange</Link></li>
            <li><Link to = "/about">Banana</Link></li>
            </ul>
            <Route path = " /About/:id" component={Fruits}/>
        </>
    )
};
export default About;