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
}

export class Portfolio implements IPortfolio
{
    id: number;

    intro : {
        jobTitle: string;
        name: string;
        description: string;
    }

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
    }
}