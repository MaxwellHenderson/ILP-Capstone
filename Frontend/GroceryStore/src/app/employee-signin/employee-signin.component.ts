import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {
msg:string=""
errmsg?:string
count?:string
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }
  checkEmployee(empRef:any){
    this.empSer.authenticateEmployee(empRef).
    subscribe(result=>{this.msg=result;
    console.log("inside"+this.msg)
  
  
    if(this.msg === "invalid"){
      this.errmsg="Invalid Credentials ..Please Try again"
    }
    else{
      this.empSer.updateCount(empRef).subscribe((result:string)=> {
        this.count=result;
        console.log(this.count)
        if(Number(this.count)<2){
        //link to update password
        }else{
          //link to dashboard
        }
      })
    }
  })
    
  }
}
