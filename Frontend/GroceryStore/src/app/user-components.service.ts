import { Injectable } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserComponent } from './shared/user-component';
import { StorefrontComponent } from './storefront/storefront.component';
import { UserAddFundsComponent } from './user-add-funds/user-add-funds.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserOrderStatusComponent } from './user-order-status/user-order-status.component';

@Injectable({
  providedIn: 'root',
})

//This is just used to hold the differnt views for the user
export class UserComponentsService {
  userComponents: Array<UserComponent> = [
    new UserComponent(StorefrontComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserCartComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserCheckoutComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserOrderStatusComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(EditProfileComponent, {
      switchView: 'switchView',
    }),
    new UserComponent(UserAddFundsComponent, {
      switchView: 'switchView',
    }),
  ];

  constructor() {}

  getViews(): Array<UserComponent> {
    return this.userComponents;
  }
}
