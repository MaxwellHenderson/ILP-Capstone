import { Injectable } from '@angular/core';
import { CartItem } from './shared/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userId?: number = 12345;
  userName?: string = 'bill';
  employeeId?: number;

  constructor() {}

  setUserId(userId: any) {
    this.userId = userId;
  }
  getUserId(): number {
    return <number>this.userId;
  }
  setUserName(userName: any) {
    this.userName = userName;
  }
  getUserName(): string {
    return <string>this.userName;
  }
  setEmployeeId(empId: any) {
    this.employeeId = empId;
  }
  getEmployeeId(): number {
    return <number>this.employeeId;
  }
}
