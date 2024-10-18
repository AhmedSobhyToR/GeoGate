import { Permit } from "./ticket.model";

export interface User{
    name:string;
    password:string;
    phone:string;
    role:string;
    paymentMethod?:string;
    balance?:number;
    permitRequests?:Permit[];
}