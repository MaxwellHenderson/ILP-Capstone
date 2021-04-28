import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  constructor(public userSer: UserService, public router:Router) {}

  ngOnInit(): void {}

  registerUser(signupRef: any) {
    console.log('registerUser()');
    console.log(signupRef);
    this.userSer.signup(signupRef)
    
    alert("User Added")
    this.router.navigate(["userSignin"]);
  }

  /*
  registerUser()
  {
    console.log(this.signupRef.value); // all value
    let fname = this.signupRef.get("fname")?.value; // get specific control value
    let lname = this.signupRef.get("lname")?.value;
    let registerUser = this.signupRef.get("registerUser")?.value; // get specific control value
    let registerPass = this.signupRef.get("registerPass")?.value;

    console.log("The Signup details are ",this.signupRef);

    const user = {
      registerUser:registerUser,
      registerPass:registerPass
    }

    sessionStorage.setItem("CredentialsInfo", JSON.stringify(user));
    console.log(user);

    alert("You are Succesfully Registered .. !!")
    this.userSer.navigate(["userSignin"]);

  }
  */
}
