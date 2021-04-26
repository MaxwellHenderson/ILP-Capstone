import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requests } from './model.request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient) { }

  retrieveRequests():Observable<Requests[]>{
    return this.http.get<Requests[]>("http://localhost:9090/requests/getRequest")
 }
}
