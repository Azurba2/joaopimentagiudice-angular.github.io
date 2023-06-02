import { Component, Input } from '@angular/core';
import { ExperienceRepo } from 'src/app/Data/ExperienceRepo';
import { Experience } from 'src/app/Models/experience';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceRepo: Experience[];
  @Input() themeColor : string | undefined;
  gray : string = 'rgb(52, 58, 64)';

  constructor(private _experienceRepo: ExperienceRepo, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer ) {
    this.experienceRepo = _experienceRepo.experienceInfo;
    this.matIconRegistry.addSvgIcon('Angular', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Angular.svg'))
    this.matIconRegistry.addSvgIcon('Docker', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Docker.svg'))
    this.matIconRegistry.addSvgIcon('.NET', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/.NET.svg'))
    this.matIconRegistry.addSvgIcon('Azure', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Azure.svg'))
    this.matIconRegistry.addSvgIcon('SQL', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/SQL.svg'))
    this.matIconRegistry.addSvgIcon('Flutter', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Flutter.svg'))
    this.matIconRegistry.addSvgIcon('Communicator', this.domSanitizer.bypassSecurityTrustResourceUrl('chat'))
    this.matIconRegistry.addSvgIcon('Leadership', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Leadership.svg'))
  }
}
