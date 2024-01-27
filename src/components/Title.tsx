import React from "react";
import { Name, Career } from "../constants/titleText";
const Title = () => {
 return (
  <div className="flex flex-col font-mono">
   <h1 className=" text-xl font-extrabold">{Name}</h1>
   <h2 className="text-lg font-normal">{Career}</h2>
   <p className="text-base text-white text-opacity-55 pt-4 lg:mr-44">
    Writing clean code is hard. It's even harder in large complex applications,
    but that is exactly my job and I love it.
   </p>
  </div>
 );
};

export default Title;
