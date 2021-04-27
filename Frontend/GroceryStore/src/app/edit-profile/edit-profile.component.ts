import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  updateMsg?:string
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }
  updateInfo(userRef:any){
    console.log(userRef)
    let uname = JSON.parse(sessionStorage.getItem("userInfo")!);
    userRef.userName=uname
    this.userSer.updateUserProfile(userRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}
