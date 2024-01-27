import React from "react";
import { CardProps } from "../interfaces";

const ExperienceCard = (cardProps: CardProps) => {
 return (
  <div className="flex border border-none rounded-md px-4 py-2 hover:bg-white hover:bg-opacity-10">
   <div className="rounded flex flex-col w-1/3">
    <div className="py-4">
     <div className="text-white text-opacity-50 text-small">
      {cardProps.period}
     </div>
    </div>
   </div>
   <div className="rounded overflow-hidden flex flex-col w-2/3">
    <div className="py-4">
     <div className="font-bold text-white text-base ">{cardProps.position}</div>
     <p className="text-white text-opacity-50 text-base">
      {cardProps.description}
     </p>
    </div>
    <div className="pt-4 pb-2">
     {cardProps.keywords.map((keyword) => (
      <span
       key={keyword}
       className="inline-block font-light bg-celeste bg-opacity-20 rounded-full px-3 py-1 text-semibase text-celeste mr-2 mb-2"
      >
       {keyword}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
};

export default ExperienceCard;
