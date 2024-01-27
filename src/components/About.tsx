import React from "react";

const About = () => {
 return (
  <div className="h-auto">
   <div className="sticky top-0 bg-white lg:hidden">{"sticky title"}</div>
   <div className="flex flex-col gap-8">
    <div className="text-white">
     Back in 2012, I decided to try my hand at creating custom Tumblr themes and
     tumbled head first into the rabbit hole of coding and web development.
     Fast-forward to today, and <b className="text-celeste">hello </b>I’ve had
     the privilege of building software for an advertising agency, a start-up, a
     student-led design studio, and a huge corporation. My main focus these days
     is building products and leading projects for our clients at Upstatement.
    </div>
    <div className="text-white">
     {" "}
     I most enjoy building software in the sweet spot where design and
     engineering meet — things that look good but are also built well under the
     hood. In my free time, I've also released an online video course that
     covers everything you need to know to build a web app with the Spotify API.
     When I’m not at the computer, I’m usually rock climbing, reading, hanging
     out with my wife and two cats, or running around Hyrule searching for Korok
     seeds K o r o k s e e d s .
    </div>
   </div>
  </div>
 );
};

export default About;
