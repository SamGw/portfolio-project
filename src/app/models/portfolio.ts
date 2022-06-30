import { IProject, Project } from "./project";
import { ISkill, Skill } from "./skill";

export interface IPortfolio {
    // Portfolio id
    id: number;

    // Portfolio content
    // Intro
    intro: {
        jobTitle: string;
        name: string;
        description: string;
    }

    skills?: ISkill[];
    projects?: IProject[];
}

export class Portfolio implements IPortfolio
{
    id: number;

    intro : {
        jobTitle: string;
        name: string;
        description: string;
        
        isTitleInput?: boolean;
        isNameInput?: boolean;
        isDescriptionInput?: boolean;
    }

    skills?: Skill[];
    projects?: Project[];

    constructor(
        id: number,
        jobTitle: string,
        name: string,
        description: string) {
        this.id = id;
        this.intro = {
            jobTitle,
            name,
            description
        }
        this.skills = [];
        this.projects = [];
    }
}