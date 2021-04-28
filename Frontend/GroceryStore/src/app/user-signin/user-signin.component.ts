import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
})
export class UserSigninComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl(),
    // addAdd: new FormGroup({

    //})
  });
  msg: string = '';
  //msg1:string = "";

  constructor(
    public router: Router,
    public userService: UserService,
    public sessionService: SessionService
  ) {}

  ngOnInit(): void {}

  checkUser() {
    console.log(this.loginRef.value); // all value
    let user1 = this.loginRef.get('user')?.value; // get specific control value
    let pass1 = this.loginRef.get('pass')?.value;

    let values = JSON.parse(sessionStorage.getItem('CredentialsInfo')!);
    console.log('You are Succesfully Logged in ..!!');
    this.msg = 'Login Success !';
    sessionStorage.setItem('userInfo', JSON.stringify(user1));

    if (user1 == values.registerUser && pass1 == values.registerPass) {
      this.router.navigate(['userWindow']);
      console.log('Navigated');
      console.log('You are Succesfully Logged in ..!!');
      alert('Login Success !');
      this.router.navigate(['userWindow']);
    } else {
      this.msg = 'Login Failed, Please Try Again ..!!';
    }
  }

  signUp() {
    this.router.navigate(['userWindow']);
  }
}
