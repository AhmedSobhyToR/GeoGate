import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../../Models/project.model';

import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';
import { DataService } from '../../Services/data.service';
import { mockProjects } from '../../MockData/mockProject';

@Component({
  selector: 'app-select-project',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './select-project.component.html',
  styleUrl: './select-project.component.css'
})
export class SelectProjectComponent {
  projects:Project[] = mockProjects;
  availableProjects:Project[] = [];
  selectedProject!: Project;
  constructor(private dataSer:DataService
  ){

  }

  ngOnInit(){
    this.availableProjects = this.projects.filter(proj => proj.projectStatus === 'Accepted')
    if(this.dataSer.isPermit){
       this.selectedProject = this.dataSer.getCurrentPermit.project;
    }

  }
  onSelectProject(project: Project){
    this.selectedProject= project
  }

  onCancel(){
    this.dataSer.setPermitRequestStatus(0);
    if(this.dataSer.getExcavationDetails){
      this.dataSer.resetExcavationDetails();
    }
    this.dataSer.setLineCoords(undefined);

  }
  onSubmit(){
    this.dataSer.setProject(this.selectedProject);
    this.dataSer.setPermitRequestStatus(1)
 
  }
}
