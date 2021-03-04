import React from "react";
import Button from "./Component/Button";
import './App.css';
import Time from "./Component/Time";
import Dyclock from "./Component/Dynamiclock";
import Effect from "./Component/Useffect";
import Form from "./Component/Form";
import Input from "./Component/Multipleinput";
import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Boot from "./Component/Usesbs";
function App() {
  return (
    <>
    <h1>Hooks in react</h1>
    <Time/>
    <Button/>
    <Dyclock/>
    <Effect/>
    <Form/> 
    <Input/>
     <About/>
     {/* <Contact/> */}

   
    </>
  );
}

export default App;
