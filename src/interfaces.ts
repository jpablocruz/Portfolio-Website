import { IconType } from "react-icons";

export interface CardProps {
 period: string;
 position: string;
 description: string;
 keywords: string[];
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
