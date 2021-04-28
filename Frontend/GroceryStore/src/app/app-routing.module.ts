import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserWindowComponent } from './user-window/user-window.component';

const routes: Routes = [
  //Windows
  { path: 'userWindow', component: UserWindowComponent },
  { path: 'adminWindow', component: AdminWindowComponent },
  { path: 'employeeWindow', component: EmployeeWindowComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
