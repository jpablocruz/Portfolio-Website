import React from "react";

const About = () => {
 return (
  <div className="h-auto">
   <div className="flex sticky top-0 h-auto py-6 font-bold text-white bg-opacity-30 backdrop-blur-lg items-center lg:hidden ">
    {"ABOUT"}
   </div>
   <div className="flex flex-col gap-8">
    <div className="text-white text-opacity-50">
     Back in 2019, I decided to start my career as a{" "}
     <b>{"Computer Science student "}</b> at
     <b>{" Tecnológico de Monterrey (ITESM)"}</b>. Since then I have been very
     passionate about learning about code and its impact in the modern day
     industries.
    </div>
    <div className="text-white text-opacity-50">
     I have been able to participate in different projects and internships
     during my time studying. Learning different languages and frameworks such
     as React, Angular, NodeJS etc. Now that I have just graduated, I am looking
     forward to learn more about what it takes to be an outstanding software
     engineer.
    </div>
   </div>
  </div>
 );
};

export default About;
