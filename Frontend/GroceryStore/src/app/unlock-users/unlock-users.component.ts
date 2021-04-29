import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-unlock-users',
  templateUrl: './unlock-users.component.html',
  styleUrls: ['./unlock-users.component.css']
})
export class UnlockUsersComponent implements OnInit {
  public data:any;
  public data1:any; 
  public msg:any;
  dataLoaded:boolean = false;
  
  constructor(public userService:UserService,public router:Router,public ticketService:TicketService) { }
  
  ngOnInit(): void {
    this.userService.retrieveLockedUserDetails().subscribe(
      (data: any) => {
        this.data=data;
        this.dataLoaded = true;
        console.log(this.data)
    });

    //this.ticketService.

      //need to make a get request to the tickets database and get all the ticketDesc for those users.
      //console.log(this.users)
  }

  unlockUser(data1:any){

    console.log(data1["userName"]);
     this.userService.unlockUser(data1).subscribe(data => {
      this.msg=data;
      console.log(this.msg);
    alert(this.msg)});
  }
}
