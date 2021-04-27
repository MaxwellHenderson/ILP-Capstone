import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddproductsComponent } from './admin-addproducts/admin-addproducts.component';
import { AdminDeleteemployeeComponent } from './admin-deleteemployee/admin-deleteemployee.component';
import { AdminDeleteproductsComponent } from './admin-deleteproducts/admin-deleteproducts.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminUpdateproductsComponent } from './admin-updateproducts/admin-updateproducts.component';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserWindowComponent } from './user-window/user-window.component';

const routes: Routes = [
  { path: 'userWindow', component: UserWindowComponent },
  { path: 'adminWindow', component: AdminWindowComponent },
  { path: 'adminDashboard', component: AdminNavbarComponent },
  { path: 'employeeWindow', component: EmployeeWindowComponent },
  { path: 'adminAddProduct', component: AdminAddproductsComponent },
  { path: 'adminUpdateProduct', component: AdminUpdateproductsComponent },
  { path: 'adminDeleteProduct', component: AdminDeleteproductsComponent },
  { path: 'adminAddEmployee', component: AdminAddemployeeComponent },
  { path: 'adminDeleteEmplpoyee', component: AdminDeleteemployeeComponent },
  { path: 'userSignup', component: UserSignupComponent },
  { path: 'userSignin', component: UserSigninComponent },
  { path: 'sendRequest', component: SendRequestComponent},
  { path: 'updateOrderStatus', component: UpdateOrderStatusComponent},
  { path: 'unlockUsers', component: UnlockUsersComponent},
  { path: 'editProfile', component: EditProfileComponent},
  { path: '', redirectTo: 'userSignin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
