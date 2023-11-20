import React from "react";
import { Navbar } from "./components";
import "./App.css";
import { Landing, Screen2, Screen3, Screen4, Screen5 } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="bg-cover bg-center h-screen screen1">
        <Navbar />
        <Landing />
      </div>
      <Screen2/>
      <Screen3/>
      <Screen4/> 
      <Screen5/>

    </div>
  );
}

export default App;
