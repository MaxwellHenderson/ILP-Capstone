import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddproductsComponent } from './admin-addproducts/admin-addproducts.component';
import { AdminDeleteemployeeComponent } from './admin-deleteemployee/admin-deleteemployee.component';
import { AdminDeleteproductsComponent } from './admin-deleteproducts/admin-deleteproducts.component';
import { AdminGeneratereportsComponent } from './admin-generatereports/admin-generatereports.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminUpdateproductsComponent } from './admin-updateproducts/admin-updateproducts.component';
import { AdminViewrequestsComponent } from './admin-viewrequests/admin-viewrequests.component';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserWindowComponent } from './user-window/user-window.component';

const routes: Routes = [
  //Windows
  { path: 'userWindow', component: UserWindowComponent },
  { path: 'adminWindow', component: AdminWindowComponent },
  { path: 'employeeWindow', component: EmployeeWindowComponent },

  //Admin paths
  { path: 'adminDashboard', component: AdminNavbarComponent },
  { path: 'generateReport', component: AdminGeneratereportsComponent },
  { path: 'adminAddProduct', component: AdminAddproductsComponent },
  { path: 'adminViewRequest', component: AdminViewrequestsComponent },
  { path: 'adminUpdateProduct', component: AdminUpdateproductsComponent },
  { path: 'adminDeleteProduct', component: AdminDeleteproductsComponent },
  { path: 'adminAddEmployee', component: AdminAddemployeeComponent },
  { path: 'adminDeleteEmplpoyee', component: AdminDeleteemployeeComponent },

  //User paths
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'userSignin', component: UserSigninComponent },
  { path: 'editpassword', component: EditProfileComponent },
  { path: 'sendRequest', component: SendRequestComponent },

  //Employee paths
  { path: 'updateOrderStatus', component: UpdateOrderStatusComponent },
  { path: 'unlockUsers', component: UnlockUsersComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'employeewindow', component: EmployeeWindowComponent },
  { path: 'empSignin', component: EmployeeSigninComponent },

  { path: '', redirectTo: 'adminWindow', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
