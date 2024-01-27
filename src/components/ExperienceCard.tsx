import React from "react";
import { CardProps } from "../interfaces";

const ExperienceCard = (cardProps: CardProps) => {
 return (
  <div className="flex">
   <div className="rounded flex flex-col w-1/3">
    <div className="py-4">
     <div className="text-white text-base">{cardProps.period}</div>
    </div>
   </div>
   <div className="rounded overflow-hidden flex flex-col w-2/3">
    <div className="py-4">
     <div className="font-bold text-white text-base ">{cardProps.position}</div>
     <p className="text-white text-base">{cardProps.description}</p>
    </div>
    <div className="pt-4 pb-2">
     {cardProps.keywords.map((keyword) => (
      <span className="inline-block bg-celeste rounded-full px-3 py-1 text-sm font-semibold text-celesteLight mr-2 mb-2">
       {keyword}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
};

export default ExperienceCard;
