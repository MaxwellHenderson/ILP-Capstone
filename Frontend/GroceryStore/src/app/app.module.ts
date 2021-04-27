import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { UserWindowComponent } from './user-window/user-window.component';
import { AdminWindowComponent } from './admin-window/admin-window.component';
import { EmployeeWindowComponent } from './employee-window/employee-window.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { UserRaiseTicketComponent } from './user-raise-ticket/user-raise-ticket.component';
import { UserCartComponent } from './user-cart/user-cart.component';

import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminAddproductsComponent } from './admin-addproducts/admin-addproducts.component';
import { AdminDeleteproductsComponent } from './admin-deleteproducts/admin-deleteproducts.component';
import { AdminUpdateproductsComponent } from './admin-updateproducts/admin-updateproducts.component';
import { AdminViewrequestsComponent } from './admin-viewrequests/admin-viewrequests.component';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminDeleteemployeeComponent } from './admin-deleteemployee/admin-deleteemployee.component';
import { AdminGeneratereportsComponent } from './admin-generatereports/admin-generatereports.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';




import { UserAddFundsComponent } from './user-add-funds/user-add-funds.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserComponentsDirective } from './user-components.directive';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,
    UserWindowComponent,
    AdminWindowComponent,
    EmployeeWindowComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    EmployeeNavbarComponent,
    ProductCardComponent,
    UserRaiseTicketComponent,
    UserCartComponent,

    AdminSigninComponent,
    AdminAddproductsComponent,
    AdminDeleteproductsComponent,
    AdminUpdateproductsComponent,
    AdminViewrequestsComponent,
    AdminAddemployeeComponent,
    AdminDeleteemployeeComponent,
    AdminGeneratereportsComponent,

    UserSigninComponent,
    UserSignupComponent,
   
    UserAddFundsComponent,
    UserOrderStatusComponent,
    EmployeeSigninComponent,
    SendRequestComponent,
    UpdateOrderStatusComponent,
    UnlockUsersComponent,
    EditProfileComponent,
    UserEditProfileComponent,
    UserComponentsDirective,
    UserCheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
