import { IconType } from "react-icons";

export interface Project {
 image: string;
 name: string;
 link: string;
 description: string;
}

export interface CardProps {
 period: string;
 position: string;
 description: string;
 keywords: string[];
 link: string;
}

export interface Link {
 name: string;
 link: string;
 y: number;
}

export interface SocialBtn {
 name: string;
 icon: IconType;
 link: string;
}
