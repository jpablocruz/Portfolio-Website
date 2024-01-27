import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Gradientdiv from "./components/GradientDiv";

function App() {
 return (
  <>
   <Gradientdiv
    className={"bg-black w-screen h-screen justify-center grid content-center"}
   >
    <div className=" lg:min-h-screen lg:max-h-screen px-12 md:px-12 md:py-20 lg:px-32 lg:py-0">
     <div className="lg:justify-between lg:flex">
      <Header />
      <Content />
     </div>
    </div>
   </Gradientdiv>
   {/* <Gradientdiv
    className={"bg-black w-screen h-screen justify-center grid content-center"}
   >
    <p className={"text-white"}> hello world </p>
   </Gradientdiv> */}
  </>
 );
}

export default App;

// class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
