import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-admin-addemployee',
  templateUrl: './admin-addemployee.component.html',
  styleUrls: ['./admin-addemployee.component.css']
})
export class AdminAddemployeeComponent implements OnInit {

  employees?:Array<Employee>
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
    this.employeeSer.getAllEmployees().subscribe(result=>this.employees=result);
  }

  storeEmployee(employeeRef:any)
  {
    console.log(employeeRef);
    this.employeeSer.addEmployeeDetails(employeeRef);
    alert("Employee Added");
  }
}
