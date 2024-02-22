import React from "react";
import { Project } from "../interfaces";

const ProjectCard = (cardProps: Project) => {
 return (
  <div className="group flex border border-none rounded-md px-4 py-1 bg-blue bg-opacity-10">
   <div className="rounded flex flex-col w-1/3">
    <div className="py-4 max-h-fit h-[10%]">
     <img src={cardProps.image} className="flex object-cover rounded" />
    </div>
   </div>
   <div className="rounded overflow-hidden flex flex-col w-2/3">
    <div className="py-4">
     <div className="font-base text-white text-base group-hover:text-blue group-hover:cursor-pointer">
      <div className="group flex flex-col gap-2 items-center">
       <a href={cardProps.link} target="_blank">
        {cardProps.name}
       </a>
      </div>
     </div>
     <p className="text-white text-opacity-50 text-base">
      {cardProps.description}
     </p>
    </div>
   </div>
  </div>
 );
};

export default ProjectCard;
