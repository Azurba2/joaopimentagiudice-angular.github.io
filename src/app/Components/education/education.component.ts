import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EducationRepo } from 'src/app/Data/EducationRepo';
import { EducationCard } from 'src/app/Models/educationCard';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationInfo: EducationCard[];
  @Input() themeColor : string | undefined;
  gray : string = 'rgb(52, 58, 64)';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private educationRepo: EducationRepo ) {
    this.matIconRegistry.addSvgIcon('brazil', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/brazil.svg'))
    this.matIconRegistry.addSvgIcon('usa', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/usa.svg'))
    this.educationInfo = educationRepo.educationInfo;
  }

  ngOnInit(): void {
   
  }




}
