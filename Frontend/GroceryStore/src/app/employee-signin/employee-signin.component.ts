import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css'],
})
export class EmployeeSigninComponent implements OnInit {
  msg: string = '';
  errmsg?: string;
  count?: string;
  constructor(
    public empSer: EmployeeService,
    public router: Router,
    public sesSer: SessionService
  ) {}

  ngOnInit(): void {}
  checkEmployee(empRef: any) {
    console.log('checking');
    this.empSer.authenticateEmployee(empRef).subscribe((result) => {
      this.msg = result;
      console.log(JSON.parse(this.msg).data._id);
      this.sesSer.setEmployeeId(JSON.parse(this.msg).data._id);
      console.log('empId' + this.sesSer.getEmployeeId());

      if (this.msg === 'invalid') {
        this.errmsg = 'Invalid Credentials ..Please Try again';
      } else {
        this.empSer.updateCount(empRef).subscribe((result: string) => {
          this.count = result;
          console.log(JSON.parse(this.count));
          if (JSON.parse(this.count).loginCount < 2) {
            //link to update password
            this.router.navigate(['editpassword']);
          } else {
            //link to dashboard
            this.router.navigate(['employeeWindow']);
          }
        });
      }
    });
  }
}
