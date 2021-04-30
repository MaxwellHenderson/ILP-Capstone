import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-deleteemployee',
  templateUrl: './admin-deleteemployee.component.html',
  styleUrls: ['./admin-deleteemployee.component.css'],
})
export class AdminDeleteemployeeComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<number>();

  deleteMsg?: string;
  constructor(public employeeSer: EmployeeService) {}

  ngOnInit(): void {}

  deleteById(id: any) {
    console.log('id is ' + id);
    this.employeeSer.deleteEmployee(id).subscribe((result: string) => {
      this.deleteMsg = result;
    });
    alert('Employee Deleted');
    this.switchView.emit(5);
  }
}
