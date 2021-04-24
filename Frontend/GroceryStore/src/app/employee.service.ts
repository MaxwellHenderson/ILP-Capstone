import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  addEmployeeDetails(employeeRef:any)
  {
    this.http.post("http://localhost:9090/product/addEmployeeDetails",employeeRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  deleteEmployee(id:any):any{
    return this.http.delete("http://localhost:9090/product/deleteEmployeeById/"+id,{responseType:'text'});
  }
}
