import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  updatePassword(empRef:any){
    console.log(empRef);
    this.empService.editEmpPassword(empRef);
    alert("Password successfully updated!")
  }
}

