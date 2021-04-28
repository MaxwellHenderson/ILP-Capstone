import { Injectable } from '@angular/core';
import { CartItem } from './shared/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userId?: number ;
  userName?: string = 'bill';
  employeeId?: number;
  adminAuthorized: boolean = false;
  userAuthorized: boolean = false;
  employeeAuthorized: boolean = false;

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
  setAdminAuthorized(authorized: boolean) {
    this.adminAuthorized = authorized;
  }
  getAdminAuthorized(): boolean {
    return this.adminAuthorized;
  }
  setUserAuthorized(authorized: boolean) {
    this.userAuthorized = authorized;
  }
  getUserAuthorized(): boolean {
    return this.userAuthorized;
  }
  setEmployeeAuthorized(authorized: boolean) {
    this.employeeAuthorized = authorized;
  }
  getEmployeeAuthorized(): boolean {
    return this.employeeAuthorized;
  }
}
