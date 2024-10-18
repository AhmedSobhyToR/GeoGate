import { Component } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, ProgressBarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  showConfirmation:boolean = false;
  showFailedPayment:boolean = false;
  constructor(private dataSer:DataService, private router: Router){

  }
  ngOnInit(){
    console.log(this.dataSer.getCurrentPermit);

  }

  get getDate(){
    return this.dataSer.getCurrentPermit.date
  }
   get getUserDetails(){
    return this.dataSer.getUser;
  }
  get  getProjectDetails(){
    return this.dataSer.getProject;
  }
  get  getExcavationDetails(){
    return this.dataSer.getExcavationDetails;
  }
   togglePaymentConfirmation(){
    this.showConfirmation = !this.showConfirmation;
  }
  onCancelPayment(){
    this.togglePaymentConfirmation();
  }
  onConfirmPayment(){
    
    if(this.dataSer.getUser.balance! >= this.dataSer.getExcavationDetails.price!){
      this.dataSer.getUser.balance = this.dataSer.getUser.balance! - this.dataSer.getExcavationDetails.price!;
      this.togglePaymentConfirmation();
      this.dataSer.setPermit(this.dataSer.getCurrentPermit);
      this.dataSer.setPermitRequestStatus(3);
      this.dataSer.resetExcavationDetails();
      this.router.navigate(["/request-review"])
      this.dataSer.setLineCoords(undefined);
      
    }
    else{
      this.showFailedPayment = true;
    }
  }
  onPrev(){
    this.dataSer.setPermitRequestStatus(1);

  }
  onCancel(){
    this.dataSer.setPermitRequestStatus(0);
    this.dataSer.resetExcavationDetails();
    this.dataSer.setLineCoords(undefined);

  }
  onSubmit(){
    this.showConfirmation = true;
  }

}
