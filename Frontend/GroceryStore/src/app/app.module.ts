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
import { UserAddFundsComponent } from './user-add-funds/user-add-funds.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';

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
    UserAddFundsComponent,
    UserOrderStatusComponent,
    EmployeeSigninComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
