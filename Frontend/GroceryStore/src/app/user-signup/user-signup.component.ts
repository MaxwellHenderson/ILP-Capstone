import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  @Output()
  componentSwitch = new EventEmitter<number>();
  signInData: any = {};
  constructor(public userSer: UserService, public router: Router) {}

  ngOnInit(): void {}

  registerUser(signupRef: any) {
    console.log('registerUser()');
    console.log(signupRef);
    this.userSer.signup(signupRef).subscribe((result: any) => {
      this.signInData = result;
      if (result.error == false) {
        console.log(result);
        alert('User Added');
        this.componentSwitch.emit(0);
      } else {
        alert('User Already Exists');
      }
    });
  }
}
