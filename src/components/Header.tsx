import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import Social from "./Social";

const Header = () => {
 return (
  <header className="lg:h-screen text-white py-12 lg:sticky lg:flex lg:justify-between lg:flex-col lg:max-h-screen lg:w-1/2 lg:py-24">
   <div>
    <Title />
    <Navbar />
   </div>
   <Social />
  </header>
 );
};

export default Header;
