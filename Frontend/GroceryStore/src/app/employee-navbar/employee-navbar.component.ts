import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css'],
})
export class EmployeeNavbarComponent implements OnInit {
  @Output()
  componentSwitch = new EventEmitter<number>();
  constructor(public sessionService: SessionService, public router: Router) {}

  ngOnInit(): void {}
  switchView(componentNumber: number) {
    console.log(`Switching to ${componentNumber}`);
    this.componentSwitch.emit(componentNumber);
  }
  logout() {
    this.sessionService.setEmployeeAuthorized(false);
    this.router.navigate(['']);
  }
}
