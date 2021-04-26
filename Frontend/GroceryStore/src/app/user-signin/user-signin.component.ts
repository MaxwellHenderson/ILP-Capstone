import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
   // addAdd: new FormGroup({

    //})
  });
  msg:string = "";
  //msg1:string = "";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


  
  checkUser()
  {
    console.log(this.loginRef.value); // all value
    let user1 = this.loginRef.get("user")?.value; // get specific control value
    let pass1 = this.loginRef.get("pass")?.value;

    let values = JSON.parse(sessionStorage.getItem("CredentialsInfo")!);
    console.log("You are Succesfully Logged in ..!!");
    this.msg = "Login Success !";


    if (user1 == values.registerUser && pass1 == values.registerPass)
    {
      console.log("You are Succesfully Logged in ..!!")
      alert("Login Success !");
    //  this.router.navigate(["portfolio"]);
    }
    else
      this.msg = "Login Failed, Please Try Again ..!!";
  }

  Singnup()
  {
    this.router.navigate(["userSignup"]);
  }

}
