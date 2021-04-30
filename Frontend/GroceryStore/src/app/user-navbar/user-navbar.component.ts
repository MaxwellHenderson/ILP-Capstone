import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
})
export class UserNavbarComponent implements OnInit {
  @Output()
  componentSwitch = new EventEmitter<number>();
  cartSize?: number;
  constructor(
    public router: Router,
    public sessionService: SessionService,
    public cartService: CartService
  ) {
    cartService.cartSize.subscribe((newSize: number) => {
      this.cartSize = newSize;
    });
  }

  ngOnInit(): void {}
  switchView(componentNumber: number) {
    console.log(`Switching to ${componentNumber}`);
    this.componentSwitch.emit(componentNumber);
  }
  logout() {
    this.sessionService.setUserAuthorized(false);
    this.router.navigate(['']);
  }
}
