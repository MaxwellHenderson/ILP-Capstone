import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  updateMsg?:string
  constructor(public userSer:UserService,public sessServ:SessionService) { }

  ngOnInit(): void {
  }
  updateInfo(userRef:any){
    console.log(userRef)
    let uid=this.sessServ.getUserId()
    console.log(uid)
    userRef.uid=uid
    this.userSer.updateUserProfile(userRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}
