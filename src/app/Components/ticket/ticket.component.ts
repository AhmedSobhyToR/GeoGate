import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { Permit } from '../../Models/ticket.model';
import { DataService } from '../../Services/data.service';
import { UserAuthService } from '../../Services/user-auth.service';


@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  constructor(private dataSer: DataService,
    private authSer: UserAuthService,
     private router:Router){
  }
  ngOnInit(){

  }
  createPermitRequest(){
    this.dataSer.createPermitRequest();
  }

  get getUserPermits(){
    return this.dataSer.getUser.permitRequests!;
  }
  get getAllPermits(){
    return this.dataSer.getPermits;
  }
  getDetailedLocation(permit: Permit){
    
    return permit.excavation.excavationLocation.street +
     ', ' + permit.excavation.excavationLocation.area  +
     ', ' + permit.excavation.excavationLocation.city
  }

  viewPermit(permitId: string){
    this.router.navigate(['/ticket',permitId])
  }

  get getUserRole(){
    return this.dataSer.getUser.role
  }

}
