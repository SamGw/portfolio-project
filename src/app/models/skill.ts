import { ITag } from "./tag";

export interface ISkill {
    // Skill id
    id: number;

    skillTitle: string;
    skillDescription: string;
    tags: ITag[]
}