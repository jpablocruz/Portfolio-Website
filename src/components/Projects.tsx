import React from "react";
import { ProjectInfo } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "../interfaces";

const Projects = () => {
 return (
  <div className="pt-32">
   <ul className="flex flex-col gap-8">
    {ProjectInfo.map((info: Project) => (
     <ProjectCard
      name={info.name}
      link={info.link}
      image={info.image}
      description={info.description}
     />
    ))}
   </ul>
  </div>
 );
};

export default Projects;
