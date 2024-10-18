import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Permit } from '../../Models/ticket.model';
import { Location, NgIf } from '@angular/common';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-permit-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  permitId!:string;
  permit!:Permit;

  constructor(private dataSer: DataService,
      private activeRouter:ActivatedRoute,
      private location: Location){

  }
  ngOnInit(){
    this.permitId = this.activeRouter.snapshot.paramMap.get('id')!;
     console.log(this.permitId);
    this.permit = this.dataSer.getPermits!.find(per=> per.id === this.permitId)!;
  }

  getDetailedLocation(){
    return this.permit.excavation.excavationLocation.street +
     ', ' + this.permit.excavation.excavationLocation.area  +
     ', ' + this.permit.excavation.excavationLocation.city
  }

  goBack(){
    this.location.back();
  }

  get getUserRole(){
    return this.dataSer.getUser.role
  }

  get isRequestMade(){
    return this.permit.isRequestMade;
  }
  rejectRequest(){
    this.permit.status = 'Rejected';
    this.permit.isRequestMade = true;
  }

  acceptRequest(){
    this.permit.status = 'Accepted';
    this.permit.isRequestMade = true;


  }

}
