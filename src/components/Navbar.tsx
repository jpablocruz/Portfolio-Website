import React from "react";
import { Link } from "../interfaces";
const Navbar = () => {
 const scrollFunc = (y: number) => {
  document.getElementById("scrollable")?.scroll(0, y);
 };
 const Links: Link[] = [
  { name: "ABOUT", link: "#about", y: -100 },
  { name: "EXPERIENCE", link: "#experience", y: 500 },
  { name: "RECENT PROJECTS", link: "#projects", y: 1200 },
 ];
 return (
  <nav className="">
   <ul className="mt-16 font-mono invisible md:visible">
    {Links.map((link) => (
     <li key={link.name} onClick={() => scrollFunc(link.y)}>
      <a
       href={link.link}
       className="group flex text-white cursor:pointer items-center"
      >
       <div className="mr-3 h-[2px] w-10 bg-white bg-opacity-50 transition-all group-hover:w-16 group-hover:bg-opacity-100  motion-reduce:transition-none" />
       <span className="text-base font-semibold text-white text-opacity-50 group-hover:text-opacity-100">
        {link.name}
       </span>
      </a>
     </li>
    ))}
   </ul>
  </nav>
 );
};

// class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"

export default Navbar;
