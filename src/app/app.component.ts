import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DarkThemeServiceService } from './Services/dark-theme-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joaopimentagiudice-angular';
  themeColor : string = 'white';
  color : string = 'white';


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, darkTheme : DarkThemeServiceService) {
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'))
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'))
    this.matIconRegistry.addSvgIcon('Github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/github.svg'))
    this.matIconRegistry.addSvgIcon('React', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/React.svg'))
    this.matIconRegistry.addSvgIcon('HTML', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/HTML.svg'))
    this.matIconRegistry.addSvgIcon('CSS', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/HTML.svg'))
    this.matIconRegistry.addSvgIcon('HTML', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/CSS.svg'))
    this.matIconRegistry.addSvgIcon('Javascript', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Javascript.svg'))
    this.matIconRegistry.addSvgIcon('Bootstrap', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Bootstrap.svg'))
    //this.color = darkTheme.color;
  }

  isDarkTheme(value : boolean){
    // console.log('parent: ', value);
    if(value === false){
      this.themeColor = 'white';
      this.color = this.themeColor;
    }else{
      this.themeColor = 'black';
      this.color = this.themeColor;
    }
    // console.log(this.themeColor)
  }
}
