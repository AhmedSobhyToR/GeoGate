import { Component } from '@angular/core';
import { DataService } from '../../../Services/data.service';


@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  permitRequestStatus!:number;
  constructor(private dataSer:DataService ){

  }

  ngOnInit(){
   this.permitRequestStatus = this.dataSer.getPermitRequestStatus;
  }

}
