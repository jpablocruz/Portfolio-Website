import React from "react";
import ExperienceCard from "./ExperienceCard";
import { CVInformation } from "../constants/cvInfo";
import { CardProps } from "../interfaces";
import { FiArrowUpRight } from "react-icons/fi";
const Experience = () => {
 return (
  <div className="pt-32">
   <div className=" flex sticky top-0 h-auto py-6 font-bold text-white bg-opacity-30 backdrop-blur-lg items-center lg:hidden ">
    {"EXPERIENCE"}
   </div>
   <ul className="flex flex-col gap-8">
    {CVInformation.map((info: CardProps) => (
     <ExperienceCard
      key={info.period}
      period={info.period}
      position={info.position}
      description={info.description}
      keywords={info.keywords}
      link={info.link}
     />
    ))}
   </ul>
   <div className="group pt-5 pl-5 text-base">
    <a
     className="flex gap-2 w-auto h-auto items-center text-white font-semibase group-hover:cursor-pointer group-hover:text-blue"
     href="#cv"
    >
     {"View my Résumé"}
     <FiArrowUpRight className="text-white group-hover:text-blue group-hover:mb-1 group-hover:ml-1 ease-in-out duration-200" />
    </a>
   </div>
  </div>
 );
};

export default Experience;
