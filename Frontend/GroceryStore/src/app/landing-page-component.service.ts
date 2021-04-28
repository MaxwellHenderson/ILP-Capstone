import { Injectable } from '@angular/core';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { LandingComponent } from './shared/landing-component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

@Injectable({
  providedIn: 'root',
})
export class LandingPageComponentService {
  landingComponents: Array<LandingComponent> = [
    new LandingComponent(UserSigninComponent, {
      switchView: 'switchView',
    }),
    new LandingComponent(UserSignupComponent, {
      switchView: 'switchView',
    }),
    new LandingComponent(EmployeeSigninComponent, {
      switchView: 'switchView',
    }),
    new LandingComponent(AdminSigninComponent, {
      switchView: 'switchView',
    }),
  ];
  constructor() {}

  getViews(): Array<LandingComponent> {
    return this.landingComponents;
  }
}
