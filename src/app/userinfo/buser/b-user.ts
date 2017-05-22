//import { BUserInterface } from "./b-user-interface"

export class BUser{
    bName: string;
    bEmail: string;
    bStatus: string;
    bPicture: string;
    constructor(bName: string, bEmail: string, bStatus: string, bPicture: string){
        this.bName = bName;
        this.bEmail = bEmail;
        this.bStatus = bStatus;
        this.bPicture = bPicture;
    }
}
