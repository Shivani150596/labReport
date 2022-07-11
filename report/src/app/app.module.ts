import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorNoteComponent } from './doctor-note/doctor-note.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ReportPageComponent } from './report-page/report-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorNoteComponent,
    PageNotFoundComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
