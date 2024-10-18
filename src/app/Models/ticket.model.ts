import { Excavation } from "./excavation.model";
import { Project } from "./project.model";
import { User } from "./user.model";

export interface Permit{
    id: string;
    user: User;
    project: Project;
    excavation: Excavation;
    status:string;
    RequestStatus: number;
    RequestStatusJson?: string;
    date: string | Date;
    isRequestMade:boolean;
}