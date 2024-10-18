import { Component, DestroyRef, inject, Input, NgModule } from '@angular/core';
import { Project } from '../../Models/project.model';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Excavation } from '../../Models/excavation.model';

import { GISComponent } from "../gis/gis.component";
import { debounceTime, Subscription } from 'rxjs';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';
import { DataService } from '../../Services/data.service';
import { ExcavationDataEnums } from '../../Enums/excavation-data.enum';

@Component({
  selector: 'app-excavation-data',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe, ProgressBarComponent, GISComponent],
  templateUrl: './excavation-data.component.html',
  styleUrl: './excavation-data.component.css'
})
export class ExcavationDataComponent {
  excavationDataEnums = new ExcavationDataEnums();
  excavationMethods!: string[];
  excavationTypes!: string[];
  streetGISSubscription!: Subscription;
  private destroyRef = inject(DestroyRef);

  constructor(private dataSer:DataService){
  }

  excavationDataForm: FormGroup = new FormGroup({
    excavationMethod: new FormControl('', [Validators.required]),
    excavationType: new FormControl('', [Validators.required]),
    excavationDuration: new FormControl('', [Validators.required, 
      Validators.pattern('[0-9]{1,}'), Validators.min(1), Validators.max(100)]),
    excavationLocation: new FormGroup({
      street: new FormControl('', [Validators.required]),
      area: new FormControl('' , [Validators.required]),
      city: new FormControl('', [Validators.required]),
    }),
    excavationDescription: new FormControl('')
  })  

  ngOnInit(){
    this.dataSer.setExcavationForm(this.excavationDataForm);

    //  this.dataSer.setExcavationForm(this.excavationDataForm);
    // this.dataSer.excavationDataForm = this.excavationDataForm;


    this.loadExcavationData();
    this.isFormFilled();
    this.fillingForm();
    // console.log(this.dataSer.permit);
    // this.isFormFilled();
   
  }

  // Load enums into inputs in form
  addEmptyOption(){
    this.excavationDataEnums.ExcavationMethods.unshift('')
    this.excavationDataEnums.ExcavationTypes.unshift('')
  }
  loadExcavationData(){
    this.addEmptyOption();
    this.excavationMethods =this.excavationDataEnums.ExcavationMethods
    this.excavationTypes = this.excavationDataEnums.ExcavationTypes
  }

  onPrev(){
    // this.dataSer.setPermitRequestStatus(0);
  }

  onCancel(){
    // this.excavationDataForm.reset();
    this.dataSer.resetExcavationDetails();
    this.dataSer.setPermitRequestStatus(0);
    this.dataSer.setLineCoords(undefined);

  }
  onSubmit(){
    if(!this.excavationDataForm.valid){
      return
    }
    this.dataSer.setExcavationDetails();
    this.dataSer.setPermitRequestStatus(2);
    // console.log(this.dataSer.getExcavationDetails);

  }
  isFormFilled(){
    const savedForm = window.localStorage.getItem('excavationForm');
    if(savedForm){
      this.excavationDataForm.setValue(JSON.parse(savedForm));
      this.dataSer.setExcavationForm(this.excavationDataForm);
      // this.dataSer.excavationDataForm = JSON.parse(savedForm);

    }
  }
  fillingForm(){
    const Subscription =this.excavationDataForm.valueChanges.pipe(debounceTime(200)).subscribe({
      next: (value) =>{
        window.localStorage.setItem("excavationForm",JSON.stringify(value));
        console.log(value);
        // this.dataSer.excavationDetails = value;
      }
    })
    this.destroyRef.onDestroy(()=> Subscription.unsubscribe())
  }
  

  get excavationMethod(){
    return this.excavationDataForm.get('excavationMethod')
  }
  get excavationType(){
    return this.excavationDataForm.get('excavationType')
  }
  get excavationDuration(){
    return this.excavationDataForm.get('excavationDuration')
  }
  get excavationLocation(){
    return this.excavationDataForm.get('excavationLocation')
  }
  get street(){
    return this.excavationLocation?.get('street')
  }
  get area(){
    return this.excavationLocation?.get('area')
  }
  get city(){
    return this.excavationLocation?.get('city')
  }
}

