import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { TechStack } from 'src/app/Data/TechStack';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  text : Array<string> = [" Software Developer"," Motivated", " Adaptable" , " Independent", " Creative", " a Good Communicator"];
  index : number = 0;
  @Input() themeColor : string | undefined;
  techBadges : Array<string>
  showLanguageButtons = false;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private _techBadges : TechStack, private snackBar : MatSnackBar, private http: HttpClient) {
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/linkedin.svg'))
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'))
    // this.matIconRegistry.addSvgIcon('Github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/github.svg'))
    this.techBadges = _techBadges.badges;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.text.length;
    }, 3000);

  }

  navigateTo(link : string){
    this.snackBar.open('Message archived', 'Undo', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    window.open(link);
  }

  toggleLanguageButtons() {
    this.showLanguageButtons = !this.showLanguageButtons;
  }

  downloadResume(language : string){
    const fileUrl = `/assets/documents/JohnHenry_resume23_${language}.pdf`; 
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'JohnHenry_23.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}