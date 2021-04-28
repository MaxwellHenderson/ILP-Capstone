import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent implements OnInit {
  @Output()
  componentSwitch = new EventEmitter<number>();
  constructor(public router: Router, public sessionService: SessionService) {}

  ngOnInit(): void {}
  switchView(componentNumber: number) {
    console.log(`Switching to ${componentNumber}`);
    this.componentSwitch.emit(componentNumber);
  }
  logout() {
    this.sessionService.setAdminAuthorized(false);
    this.router.navigate(['']);
  }
}
