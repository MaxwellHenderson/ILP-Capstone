import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGuard implements CanActivate {
  constructor(public sessionService: SessionService, public router: Router) {}

  canActivate() {
    if (this.sessionService.getEmployeeAuthorized()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
