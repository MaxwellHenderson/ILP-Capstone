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
  
}
