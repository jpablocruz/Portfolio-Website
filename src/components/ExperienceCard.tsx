import React from "react";
import { CardProps } from "../interfaces";
import { FiArrowUpRight } from "react-icons/fi";

const ExperienceCard = (cardProps: CardProps) => {
 return (
  <div className=" group flex border border-none rounded-md px-4 py-1 hover:bg-white hover:bg-opacity-10">
   <div className="rounded flex flex-col w-1/3">
    <div className="py-4">
     <div className="text-white text-opacity-50 text-small pt-1">
      {cardProps.period}
     </div>
    </div>
   </div>
   <div className="rounded overflow-hidden flex flex-col w-2/3">
    <div className="py-4">
     <div className="font-base text-white text-base group-hover:text-blue group-hover:cursor-pointer">
      <div className="group flex gap-2 items-center">
       <a href={cardProps.link} target="_blank">
        {cardProps.position}
       </a>
       <FiArrowUpRight className="invisible text-base group-hover:mb-1 group-hover:ml-1 ease-in-out duration-200 md:visible" />
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
       className="inline-block font-light bg-blue bg-opacity-20 rounded-full px-3 py-1 text-semibase text-blue mr-2 mb-2"
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
