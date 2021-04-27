import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  authenticateEmployee(empRef:any){
    return this.http.post("http://localhost:9090/employee/getEmployee",empRef,{responseType:"text"})
    
  }
  updateCount(Ref:any):any{
    return this.http.put("http://localhost:9090/employee/updateCount",Ref,{responseType:'text'})
  }
  
  addEmployeeDetails(employeeRef:any)
  {
    this.http.post("http://localhost:9090/employee/addEmployee",employeeRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  deleteEmployee(id:any):any{
    return this.http.delete("http://localhost:9090/employee/deleteEmployee/"+id,{responseType:'text'});
  }
}
