import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-funds',
  templateUrl: './user-add-funds.component.html',
  styleUrls: ['./user-add-funds.component.css']
})
export class UserAddFundsComponent implements OnInit {

  constructor(public userService:UserService) { }
  updateMsg?:string;
  ngOnInit(): void {
  }
  updateFunds(userRef:any){
    if(userRef.aid=="" ||userRef.fund==""){
     alert("Please fill the fields")
    }else{
    console.log(userRef);
    this.userService.updateAccountFunds(userRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
  }
}
