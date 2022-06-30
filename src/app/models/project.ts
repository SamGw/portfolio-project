export interface IProject{
    // Project id
    id: number;

    projectDomain: string;
    projectTitle: string;
    projectDescription: string;
}

export class Project implements IProject{
    id: number;

    projectDomain: string;
    projectTitle: string;
    projectDescription: string;

    isDomainInput?: boolean;
    isTitleInput?: boolean;
    isDescriptionInput?: boolean;

    constructor(
        id: number,
        projectDomain: string,
        projectTitle: string,
        projectDescription: string,
    ){
        this.id = id;
        this.projectDomain = projectDomain;
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
    }
}