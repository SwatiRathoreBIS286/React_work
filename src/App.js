import logo from './logo.svg';
import './App.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Notfound from "./Components/Switch";
import {Route, NavLink, BrowserRouter as Router, Link, Switch} from "react-router-dom";

function App() {

  const Name = ()=>{
    return(
      <h1>I am Name page</h1>
    )
  };
  return (
    <Router>
     <>
      <h1>React Router Example</h1>
      <ul>
        <li><Link to = "/">About</Link></li>
        <li><Link to = "/contact">Contact</Link></li>
        <li><Link to ="/service">Services</Link></li>

      </ul>
      <Route  exact path="/" component= {About}/>
      <Route exact path="/contact" component= {Contact}/>
      <Route exact path="/services" component= {Services}/>

      <h1>Example of navlink</h1>
      <ul>
        <li>
          <NavLink to = "/" exact activeStyle= {{color:'red'}}>About </NavLink></li>
        <li><NavLink to = "/contact" activeStyle = {{color: 'blue'}}>Contact</NavLink></li>
        <li><NavLink to ="/service" activeStyle = {{color: 'green'}}>Services</NavLink></li>

      </ul>

      <Switch>
        <Route  exact path="/" component= {About}/>
        <Route exact path="/contact" component= {Contact}/>
        <Route exact path="/services" component= {Services}/>
        {/* <Route exact path="/contact/name" component= {Name}/> */}
        <Route component= {Notfound}/>
      </Switch>
      

      
     {/* <About/>
     <Contact/>
     <Services/> */}
     
     </>
     </Router>
  );
}

export default App;
