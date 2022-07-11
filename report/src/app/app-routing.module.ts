import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportPageComponent } from './report-page/report-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/report-page', pathMatch: 'full'},
  {path:"report-page",component:ReportPageComponent},
  {path:"visit-page",component:ReportPageComponent},
  {path:"plan-page",component:ReportPageComponent},
  {path:"profile-page",component:ReportPageComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
