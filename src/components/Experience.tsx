import React from "react";
import ExperienceCard from "./ExperienceCard";
import { CVInformation } from "../constants/cvInfo";
import { CardProps } from "../interfaces";
const Experience = () => {
 return (
  <div className="py-32">
   <ul className="flex flex-col gap-8">
    {CVInformation.map((info: CardProps) => (
     <ExperienceCard
      key={info.period}
      period={info.period}
      position={info.position}
      description={info.description}
      keywords={info.keywords}
     />
    ))}
   </ul>
   <div className="pt-10">
    <a className=" text-white text-bold hover:cursor-pointer" href="#cv">
     {"View my Resumé"}
    </a>
   </div>
  </div>
 );
};

export default Experience;
