import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeServiceService {

  color : string = 'white';

  setDarkTheme(color : string){
    this.color = color;
    // console.log("service", this.color);
  }

  constructor() { }
}
