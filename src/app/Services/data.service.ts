import { Injectable } from '@angular/core';
import { Excavation } from '../Models/excavation.model';
import { User } from '../Models/user.model';
import { Project } from '../Models/project.model';
import { Permit } from '../Models/ticket.model';
import { FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { mockUsers } from '../MockData/mockUser';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user!:User;
  private excavationDetails!:Excavation;
  private project!:Project;
  private permit!:Permit;
  private permits:Permit[]= [];
  private excavationDataForm!: FormGroup;
  private GISLine!: L.LatLng[]|undefined;
  private users = mockUsers;
  constructor(){

  }

  
  // User
  setUser(currentUser: User){
    this.user = currentUser;
  }

  get getUser(){
    return this.user;
  }

  // Project
  setProject(prj:Project){
      this.permit.project = prj;
      this.project = prj;

  }
  get getProject(){
    return this.permit.project;
  }

  // Excavation
  get getExcavation(){
    return this.excavationDataForm
  }

  setExcavationForm(excavationDataForm: FormGroup){
    this.excavationDataForm = excavationDataForm;
  }

  setExcavationDetails(){
    this.excavationDetails={
      excavationMethod:this.getExcavation.value['excavationMethod'],
      excavationType: this.getExcavation.value['excavationType'],
      excavationDuration: this.getExcavation.value['excavationDuration'],
      excavationLocation:{
        street:this.getExcavation.get('excavationLocation')?.value['street'],
        area: this.getExcavation.get('excavationLocation')?.value['area'],
        city: this.getExcavation.get('excavationLocation')?.value['city']
      },
      excavationDescription:this.getExcavation.value['excavationDescription'],
      // price: Math.ceil(Math.random()* 1700)
      price: 1200
    }
    this.permit.excavation = this.excavationDetails;
  }

   get getExcavationDetails(){
    // console.log(this.excavationDetails);
    return this.excavationDetails;
  }
  setStreetName(stName: string){
    console.log(this.excavationDataForm);
    this.excavationDataForm.get('excavationLocation')?.patchValue({
      street: stName
    });
  }

  setCityName(cityName:string){
    // this.excavationDetails.excavationLocation.city=cityName;
    this.excavationDataForm.get('excavationLocation')?.patchValue({
      city: cityName
    });
    // this.permit.excavation = this.excavationDetails;
  }

  setAreaName(areaName:string){
    this.excavationDataForm.get('excavationLocation')?.patchValue({
      area: areaName
    });
  }

  resetExcavationDetails(){
    localStorage.removeItem('excavationForm');
    this.excavationDataForm.reset();
  }

  // GIS
  setLineCoords(GISLine: L.LatLng[]|undefined){
    console.log(GISLine);
    this.GISLine = GISLine;
  }
  get getLineCoords(){
    return this.GISLine
  }

  // Permit
  get getDate(){
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }
  createPermitRequest(){
    this.intializePermit();
    this.permit={
      id:((this.permits.length)+1).toString(),
      user : this.user,
      project : this.project,
      excavation : this.excavationDetails,
      status: 'Pending',
      RequestStatus: 0,
      date: this.getDate,
      isRequestMade: false
    }
    console.log(this.permit);
  }
  get isPermit():boolean{
    if(this.permit){
      return true
    }
    return false;
  }
  setPermit(permit: Permit){
    const currentUser = this.users.find(user => user.name === this.user.name);
    currentUser?.permitRequests?.push(permit);
    this.permits.push(permit);
  }
   getPermit(permitId: string){
    return this.permits[+permitId]
  }
  get getCurrentPermit(){
    return this.permit
  }

  get getPermits(){
    return this.permits;
  }

  get getUserPermits(){
    return this.user.permitRequests;
  }

  setPermitRequestStatus(requestStatus: number){
    this.permit.RequestStatus = requestStatus;
  }
  get getPermitRequestStatus(){
    return this.permit.RequestStatus;
  }

  intializePermit(){
    this.project = {
      projectId: '',
      projectName: '',
      projectType: '',
      projectStatus: ''
    } as Project
    this.excavationDetails={
      excavationMethod:'',
      excavationType: '',
      excavationDuration: '',
      excavationLocation:{
        street: '',
        area:'',
        city:'',
      },
      excavationDescription: '',
      price: 0
    } as Excavation
   
  }
} 
