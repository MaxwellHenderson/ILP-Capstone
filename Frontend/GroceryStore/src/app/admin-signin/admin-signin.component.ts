import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css'],
})
export class AdminSigninComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.router.navigate(['adminWindow']);
  }
}
