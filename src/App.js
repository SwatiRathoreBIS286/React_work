import React from "react";
import Button from "./Component/Button";
import './App.css';
import Time from "./Component/Time";
import Dyclock from "./Component/Dynamiclock";
import Effect from "./Component/Useffect";

function App() {
  return (
    <>
    <h1>Hooks in react</h1>
    <Time/>
    <Button/>
    <Dyclock/>
    <Effect/>
    </>
  );
}

export default App;
