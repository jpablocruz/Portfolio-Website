import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import Social from "./Social";

const Header = () => {
 return (
  <header className="text-white py-12 lg:justify-between lg:sticky lg:flex lg:flex-col lg:max-h-screen lg:w-1/2 lg:py-24">
   <div>
    <Title />
    <Navbar />
   </div>
   <Social />
  </header>
 );
};

export default Header;
