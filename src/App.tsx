import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
 return (
  <div className="bg-darkBlue lg:min-h-screen lg:max-h-screen px-12 md:px-12 md:py-20 lg:px-20 lg:py-0">
   <div className="justify-between lg:flex">
    <Header />
    <Content />
   </div>
  </div>
 );
}

export default App;

// class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
