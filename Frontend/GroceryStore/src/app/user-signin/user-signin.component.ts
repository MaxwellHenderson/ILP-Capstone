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
  @Output()
  componentSwitch = new EventEmitter<number>();
  msg: string = '';
  //msg1:string = "";

  signInData: any = {};

  constructor(
    public router: Router,
    public userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  checkUser(loginRef: any) {
    this.userService.signin(loginRef).subscribe((result: any) => {
      console.log('Checking user');
      console.log(result);
      this.signInData = result;

      if (this.signInData.success) {
        this.toastr.success('Successful Signed In', 'Success', {
          timeOut: 2000,
        });

        console.log(this.signInData.user);
        sessionStorage.setItem(
          'userDetails',
          JSON.stringify(this.signInData.user)
        );
        //this.msg= "Hello";
        this.router.navigate(['userWindow']);
      } else {
        this.toastr.error(this.signInData.msg, 'Error', {
          timeOut: 2000,
        });
        this.router.navigate(['userSignin']);
      }
    });
  }

  signUp() {
    this.switchView(1);
  }

  switchView(componentNumber: number) {
    console.log(`Switching to ${componentNumber}`);
    this.componentSwitch.emit(componentNumber);
  }
}
