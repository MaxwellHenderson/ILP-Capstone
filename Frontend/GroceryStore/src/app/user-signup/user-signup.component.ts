import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  @Output()
  componentSwitch = new EventEmitter<number>();
  signInData: any = {};
  validFormMessage: string = '';
  valid: string = '';
  constructor(public userSer: UserService, public router: Router) {}

  ngOnInit(): void {}

  registerUser(signupRef: NgForm) {
    console.log('registerUser()');
    console.log(signupRef);
    console.log(signupRef.valid);
    if (signupRef.valid) {
      this.userSer.signup(signupRef.value).subscribe((result: any) => {
        this.signInData = result;
        if (result.error == false) {
          console.log(result);
          alert('User Added');
          this.componentSwitch.emit(0);
        } else {
          alert('User Already Exists');
        }
      });
    } else {
      this.validFormMessage =
        'Please fill in all the fields before submitting.';
    }
  }
}
