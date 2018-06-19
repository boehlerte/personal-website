import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

// angular material components
import { MatTabsModule, MatToolbar, MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
