import React from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";
import { SocialBtn } from "../interfaces";
const Social = () => {
 const SocialBtns: SocialBtn[] = [
  {
   name: "linkedin",
   icon: FaLinkedin,
   link: "https://www.linkedin.com/in/pablocruzramos/",
  },
  {
   name: "github",
   icon: FaGithub,
   link: "https://github.com/jpablocruz",
  },
  {
   name: "freecodecamp",
   icon: FaFreeCodeCamp,
   link: "https://forum.freecodecamp.org/u/badpacket/activity",
  },
 ];

 return (
  <ul className="flex flex-row pt-12 pb-44 gap-5 text-iconSize lg:pb-0 lg:pt-0">
   {SocialBtns.map((socialbutton) => (
    <li
     key={socialbutton.name}
     className="text-white text-opacity-50 hover:text-opacity-100"
    >
     <a href={socialbutton.link} target="_blank">
      {<socialbutton.icon />}
     </a>
    </li>
   ))}
  </ul>
 );
};

export default Social;
