import { Project } from "../interfaces";
import github from "../images/github_logo.png";
import cmdigital from "../images/cmScreenshot.png";
import learn from "../images/lpScreenshot.png";
import check from "../images/checkapi.png";
export const ProjectInfo: Project[] = [
 {
  image: learn,
  name: "Learn Platform - EPAM LAB PROJECT",
  description:
   "Developed a web application for a mock learning portal, for students to register and take online courses and teachers to administrate their studs. Developed using React Typescript; Redux, for state management; Tailwind, for styles; NodeJS and Serverless, for Backend; Dynamo as a database.",
  link: "https://github.com/jpablocruz/learn-platform",
 },
 {
  image: check,
  name: "CheckAPI - API Monitoring web application",
  description:
   "Web App for developers to document, register and test internal private APIs, 4-person team.Built the REST API structure and developed 50% of the back-end services using MSSQL, NodeJS and Express.",
  link: "https://github.com/jpablocruz/checkapi_api",
 },
 {
  image: cmdigital,
  name: "CM Digital - Landing Page",
  description:
   "Built a landing page for CM Digital at Monterrey, a digital/office solutions company, coded in React Typescript, Tailwind CSS, Daisy UI and hosted in Netlify",
  link: "https://github.com/jpablocruz/cmdigital",
 },
];
