import { Component, Input } from '@angular/core';
import { ProjectsRepo } from 'src/app/Data/ProjectsRepo';
import { Project } from 'src/app/Models/project';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectRepo : Project[];
  @Input() themeColor : string | undefined;
  gray : string = 'rgb(52, 58, 64)';

  constructor(private _projectRepo: ProjectsRepo, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.projectRepo = _projectRepo.projectInfo;
    // console.log(this.projectRepo)
    // this.matIconRegistry.addSvgIcon('Github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Github.svg'))
    this.matIconRegistry.addSvgIcon('React', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/React.svg'))
    this.matIconRegistry.addSvgIcon('HTML', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/HTML.svg'))
    this.matIconRegistry.addSvgIcon('CSS', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/HTML.svg'))
    this.matIconRegistry.addSvgIcon('HTML', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/CSS.svg'))
    this.matIconRegistry.addSvgIcon('Javascript', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Javascript.svg'))
    this.matIconRegistry.addSvgIcon('JQuery', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/JQuery.svg'))
    this.matIconRegistry.addSvgIcon('Java', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/java.svg'))
    this.matIconRegistry.addSvgIcon('Firebase', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Firebase.svg'))
  }
}
