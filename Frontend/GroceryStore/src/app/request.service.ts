import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';
import { Requests } from './model.request';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/request`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  storeRequestDetailsInfo(requestRef: any) {
    this.http.post(`${this.serverUrl}/addRequest`, requestRef).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  retrieveRequests(): Observable<Requests[]> {
    return this.http.get<Requests[]>(`${this.serverUrl}/getRequest`);
  }
}
