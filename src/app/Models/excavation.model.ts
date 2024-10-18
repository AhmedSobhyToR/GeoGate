export interface Excavation{
    excavationMethod:string;
    excavationType:string;
    excavationDuration:string;
    excavationLocation:{
        street:string;
        area:string;
        city:string;
    }
    excavationDescription:string;
    price?:number;
}