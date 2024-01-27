import React from "react";

const About = () => {
 return (
  <div className="h-auto">
   <div className=" flex sticky top-0 h-auto py-6 font-bold text-white bg-opacity-30 backdrop-blur-lg items-center lg:hidden ">
    {"ABOUT"}
   </div>
   <div className="flex flex-col gap-8">
    <div className="text-white text-opacity-50">
     Back in 2012, I decided to try my hand at creating custom Tumblr themes and
     tumbled head first into the rabbit hole of coding and web development.
     Fast-forward to today, and{" "}
     <b className="text-white text-opacity-100">hello </b>I’ve had the privilege
     of building software for an advertising agency, a start-up, a student-led
     design studio, and a huge corporation. My main focus these days is building
     products and leading projects for our clients at Upstatement.
    </div>
    <div className="text-white text-opacity-50">
     Back in 2012, I decided to try my hand at creating custom Tumblr themes and
     tumbled head first into the rabbit hole of coding and web development.
     Fast-forward to today, and{" "}
     <b className="text-white text-opacity-100">hello </b>I’ve had the privilege
     of building software for an advertising agency, a start-up, a student-led
     design studio, and a huge corporation. My main focus these days is building
     products and leading projects for our clients at Upstatement.
    </div>
   </div>
  </div>
 );
};

export default About;
