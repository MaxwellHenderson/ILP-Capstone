import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent implements OnInit {
  constructor(public router: Router, public sessionService: SessionService) {}

  ngOnInit(): void {}

  signIn(loginRef: any) {
    if (loginRef.user == 'admin' && loginRef.password == 'password') {
      this.sessionService.setAdminAuthorized(true);
      this.router.navigate(['adminWindow']);
    } else {
      alert('Incorrect Login');
    }
  }
}
