import { Component, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isChecked = false;
  @Output() isDarkTheme = new EventEmitter<boolean>();

  isToggled(){
    this.isChecked = !this.isChecked;
    this.isDarkTheme.emit(this.isChecked);
    // console.log(this.isChecked);
  }
}
