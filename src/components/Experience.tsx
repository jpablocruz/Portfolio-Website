import React from "react";
import ExperienceCard from "./ExperienceCard";
import { CVInformation } from "../constants/cvInfo";
import { CardProps } from "../interfaces";
const Experience = () => {
 return (
  <ul>
   {CVInformation.map((info: CardProps) => (
    <ExperienceCard
     period={info.period}
     position={info.position}
     description={info.description}
     keywords={info.keywords}
    />
   ))}
  </ul>
 );
};

export default Experience;
