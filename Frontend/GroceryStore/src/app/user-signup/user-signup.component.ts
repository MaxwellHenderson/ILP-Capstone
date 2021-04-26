import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    registerUser:new FormControl(),
    registerPass:new FormControl()

  });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  
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
    this.router.navigate(["userSignin"]);

  }

}
