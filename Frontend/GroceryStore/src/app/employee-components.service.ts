import { Injectable } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { EmployeeComponent } from './shared/employee-component';
import { UnlockUsersComponent } from './unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeComponentsService {
  employeeComponents: Array<EmployeeComponent> = [
    new EmployeeComponent(SendRequestComponent, {
      switchView: 'switchView',
    }),
    new EmployeeComponent(UpdateOrderStatusComponent, {
      switchView: 'switchView',
    }),
    new EmployeeComponent(UnlockUsersComponent, {
      switchView: 'switchView',
    }),
    new EmployeeComponent(EditProfileComponent, {
      switchView: 'switchView',
    }),
  ];
  constructor() {}

  getViews(): Array<EmployeeComponent> {
    return this.employeeComponents;
  }
}
