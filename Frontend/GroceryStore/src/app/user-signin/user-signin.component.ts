import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
})
export class UserSigninComponent implements OnInit {
  msg: string = '';
  //msg1:string = "";

  signInData: any = {};

  constructor(
    public router: Router,
    public userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  /*
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

*/

  checkUser(loginRef: any) {
    this.userService.signin(loginRef).subscribe((result: any) => {
      this.signInData = result;

      if (this.signInData.success) {
        this.router.navigate(['userWindow']);
      }

      this.router.navigate(['userWindow']);

      /*
      if(this.signInData.success){
        this.toastr.success('Successful Signed In', 'Success',{
          timeOut:2000,
        });
    
      console.log(this.signInData.user)
      sessionStorage.setItem('userDetails',JSON.stringify(this.signInData.user));
        //this.msg= "Hello";
        this.router.navigate(['userWindow']);

      }else{
        this.toastr.error(this.signInData.msg,'Error' , {
          timeOut:2000,
        })
        this.router.navigate(['userSignin']);
      }*/
    });
  }

  signUp() {
    this.router.navigate(['userSignup']);
  }

  switchView(componentNumber: number) {
    console.log(`Switching to ${componentNumber}`);
    this.componentSwitch.emit(componentNumber);
  }
}
