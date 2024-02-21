import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
const Content = () => {
 return (
  <div
   id="scrollable"
   className="lg:pr-20 lg:max-h-screen lg:overflow-y-auto lg:w-1/2 lg:pt-24 scroll-smooth"
  >
   <About />
   <Experience />
   <Projects />
   <div className="pl-5 py-10 text-white font-base text-opacity-50">
    Coded in TypeScript using <b className="text-blue">React</b> and{" "}
    <b className="text-blue">Tailwind</b>, deployed and hosted with{" "}
    <b className="text-blue">Github Pages</b>. This page was heavily inspired by
    Brittany Chiang´s Web Portfolio. If you like it you can check the{" "}
    <a
     href="https://github.com/jpablocruz/Portfolio-Website"
     className="text-blue"
    >
     repo
    </a>
    . Dont forget to give it a star <b className="text-white">★</b>.
   </div>
  </div>
 );
};

export default Content;
