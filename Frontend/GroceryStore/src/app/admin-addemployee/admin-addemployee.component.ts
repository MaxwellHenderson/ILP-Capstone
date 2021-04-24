import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-addemployee',
  templateUrl: './admin-addemployee.component.html',
  styleUrls: ['./admin-addemployee.component.css']
})
export class AdminAddemployeeComponent implements OnInit {

  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }

  storeEmployee(employeeRef:any)
  {
    console.log(employeeRef);
    this.employeeSer.addEmployeeDetails(employeeRef);
  }
}
