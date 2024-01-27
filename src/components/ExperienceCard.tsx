import React from "react";
import { CardProps } from "../interfaces";
import { FaBolt } from "react-icons/fa6";

const ExperienceCard = (cardProps: CardProps) => {
 return (
  <div className=" group flex border border-none rounded-md px-4 py-1 hover:bg-white hover:bg-opacity-5">
   <div className="rounded flex flex-col w-1/3">
    <div className="py-4">
     <div className="text-white text-opacity-50 text-small pt-1 font-semibold">
      {cardProps.period}
     </div>
    </div>
   </div>
   <div className="rounded overflow-hidden flex flex-col w-2/3">
    <div className="py-4">
     <div className="font-base text-white text-base group-hover:text-yellow">
      <div className="group flex gap-2 items-center">
       {cardProps.position}
       <FaBolt className="invisible text-small group-hover:mb-1 group-hover:ml-1 ease-in-out duration-200 md:visible" />
      </div>
     </div>
     <p className="text-white text-opacity-50 text-base">
      {cardProps.description}
     </p>
    </div>
    <div className="pt-4 pb-2">
     {cardProps.keywords.map((keyword) => (
      <span
       key={keyword}
       className="inline-block font-light bg-yellow bg-opacity-30 rounded-full px-3 py-1 text-semibase text-yellow mr-2 mb-2"
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
