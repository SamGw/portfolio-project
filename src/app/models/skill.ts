import { ITag, Tag } from "./tag";

export interface ISkill {
    // Skill id
    id: number;

    skillTitle: string;
    skillDescription: string;
    tags: ITag[]
}

export class Skill implements ISkill{
    // Skill id
    id: number;

    skillTitle: string;
    skillDescription: string;
    tags: Tag[];

    constructor(
        id:number,
        skillTitle: string,
        skillDescription: string,
        tags: Tag[]
    )
    {
        this.id = id;
        this.skillTitle = skillTitle;
        this.skillDescription = skillDescription;
        this.tags = tags;
    }
}