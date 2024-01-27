import React from "react";
import About from "./About";
import Experience from "./Experience";
const Content = () => {
 return (
  <div
   id="scrollable"
   className="lg:pr-20 lg:max-h-screen lg:overflow-y-auto lg:w-1/2 lg:pt-24 scroll-smooth"
  >
   <About />
   <Experience />
  </div>
 );
};

export default Content;
