import { Injectable } from '@angular/core';
import { AdminAddemployeeComponent } from './admin-addemployee/admin-addemployee.component';
import { AdminAddproductsComponent } from './admin-addproducts/admin-addproducts.component';
import { AdminDeleteemployeeComponent } from './admin-deleteemployee/admin-deleteemployee.component';
import { AdminDeleteproductsComponent } from './admin-deleteproducts/admin-deleteproducts.component';
import { AdminGeneratereportsComponent } from './admin-generatereports/admin-generatereports.component';
import { AdminUpdateproductsComponent } from './admin-updateproducts/admin-updateproducts.component';
import { AdminViewrequestsComponent } from './admin-viewrequests/admin-viewrequests.component';
import { AdminComponent } from './shared/admin-component';
import { UserComponent } from './shared/user-component';

@Injectable({
  providedIn: 'root',
})
export class AdminComponentService {
  adminComponents: Array<AdminComponent> = [
    new AdminComponent(AdminAddproductsComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminUpdateproductsComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminDeleteproductsComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminViewrequestsComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminAddemployeeComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminDeleteemployeeComponent, {
      switchView: 'switchView',
    }),
    new AdminComponent(AdminGeneratereportsComponent, {
      switchView: 'switchView',
    }),
  ];
  constructor() {}

  getViews(): Array<UserComponent> {
    return this.adminComponents;
  }
}
