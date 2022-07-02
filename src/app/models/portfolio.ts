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

    contact: {
        description: string;
        adress: string;
        phone: string;
        mail: string;
    }
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

    contact: {
        description: string;
        adress: string;
        phone: string;
        mail: string;

        isDescriptionInput?: boolean;
        isAdressInput?: boolean;
        isPhoneInput?: boolean;
        isMailInput?: boolean;
    }

    constructor(
        id: number,
        jobTitle: string,
        jobName: string,
        jobDescription: string,
        contactDescription: string,
        contactAdress: string,
        contactPhone: string,
        contactMail: string) {
        this.id = id;
        this.intro = {
            jobTitle,
            name: jobName,
            description: jobDescription
        }

        this.skills = [];
        this.projects = [];

        this.contact = {
            description: contactDescription,
            adress: contactAdress,
            phone: contactPhone,
            mail: contactMail
        }
    }
}