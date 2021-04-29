import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add-funds',
  templateUrl: './user-add-funds.component.html',
  styleUrls: ['./user-add-funds.component.css'],
})
export class UserAddFundsComponent implements OnInit {
  currentFunds?: number = 0;
  dataLoaded: boolean = false;
  constructor(
    public userService: UserService,
    public sessionService: SessionService
  ) {}
  updateMsg?: string;
  ngOnInit(): void {
    this.userService
      .getFunds(this.sessionService.getUserId())
      .subscribe((result: any) => {
        this.currentFunds = result.funds;
        this.dataLoaded = true;
      });
  }
  updateFunds(userRef: any) {
    if (userRef.aid == '' || userRef.fund == '') {
      alert('Please fill the fields');
    } else {
      console.log(userRef);
      this.userService
        .updateAccountFunds(userRef)
        .subscribe((result: string) => {
          this.updateMsg = result;
        });
    }
  }
}
