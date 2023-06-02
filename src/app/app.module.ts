import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { EducationComponent } from './Components/education/education.component';
import { AboutComponent } from './Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './Components/footer/footer.component';
import { EducationRepo } from './Data/EducationRepo';
import { ExperienceRepo } from './Data/ExperienceRepo';
import { ProjectsRepo } from './Data/ProjectsRepo';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { DarkThemeServiceService } from './Services/dark-theme-service.service';
import {MatBadgeModule} from '@angular/material/badge';
import { TechStack } from './Data/TechStack';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotAvailableComponent } from './Components/not-available/not-available.component';


@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NotAvailableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    FormsModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [EducationRepo, ExperienceRepo, ProjectsRepo, DarkThemeServiceService, TechStack],
  bootstrap: [AppComponent]
})
export class AppModule { }
