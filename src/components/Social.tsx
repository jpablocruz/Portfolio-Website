import React from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";
import { SocialBtn } from "../interfaces";
const Social = () => {
 const SocialBtns: SocialBtn[] = [
  {
   name: "linkedin",
   icon: FaLinkedin,
   link: "",
  },
  {
   name: "github",
   icon: FaGithub,
   link: "",
  },
  {
   name: "freecodecamp",
   icon: FaFreeCodeCamp,
   link: "",
  },
 ];

 return (
  <ul className="flex flex-row pt-12 pb-44 gap-5 text-iconSize lg:pb-0 lg:pt-0">
   {SocialBtns.map((socialbutton) => (
    <li
     key={socialbutton.name}
     className="text-white text-opacity-50 hover:text-opacity-100"
    >
     <a href={socialbutton.link}>{<socialbutton.icon />}</a>
    </li>
   ))}
  </ul>
 );
};

export default Social;
