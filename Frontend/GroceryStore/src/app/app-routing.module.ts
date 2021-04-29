import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { EmployeeGuard } from './employee.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import { UserWindowComponent } from './user-window/user-window.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  //Windows
  {
    path: 'userWindow',
    component: UserWindowComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'adminWindow',
    component: AdminWindowComponent,
    canActivate: [AdminGuardGuard],
  },
  {
    path: 'employeeWindow',
    component: EmployeeWindowComponent,
    canActivate: [EmployeeGuard],
  },
  {
    path: 'unlockUsers',
    component: UnlockUsersComponent
  },
  {
    path: 'updateOrderStatus',
    component: UpdateOrderStatusComponent
  },
  { path: '', component: LandingPageComponent },
  // { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
