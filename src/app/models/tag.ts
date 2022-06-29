export interface ITag{
    name: string;
}

export class Tag implements ITag{
    name: string;
    isInput?: boolean;

    constructor(name: string){
        this.name = name;
        this.isInput = false;
    }
}