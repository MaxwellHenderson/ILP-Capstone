import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/employee`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  authenticateEmployee(empRef: any) {
    return this.http.post(`${this.serverUrl}/getEmployee`, empRef, {
      responseType: 'text',
    });
  }
  updateCount(Ref: any): any {
    return this.http.put(`${this.serverUrl}/updateCount`, Ref, {
      responseType: 'text',
    });
  }

  addEmployeeDetails(employeeRef: any) {
    this.http.post(`${this.serverUrl}/addEmployee`, employeeRef).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  editEmpPassword(empRef: any) {
    this.http.put(`${this.serverUrl}/updateEmployeePassword`, empRef).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  deleteEmployee(id: any): any {
    return this.http.delete(`${this.serverUrl}/deleteEmployee/` + id, {
      responseType: 'text',
    });
  }
}
