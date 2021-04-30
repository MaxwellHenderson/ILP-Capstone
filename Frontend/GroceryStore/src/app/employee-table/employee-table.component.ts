import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employees?: Array<Employee>;

  constructor(public employeeSer: EmployeeService) {}

  ngOnInit(): void {
    this.employeeSer
      .getAllEmployees()
      .subscribe((result) => (this.employees = result));
  }
}
