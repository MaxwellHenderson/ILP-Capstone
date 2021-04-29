import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendUrlService } from './backend-url.service';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/ticket`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  submitLockedAccountTicket(userId: any) {
    ('');
    let ticketInfo = {
      userId: Number(userId),
      ticketDesc: 'Account needs to be unlocked',
    };
    console.log(ticketInfo);
    this.http
      .post(
        `${this.backendUrlService.getBackendUrl()}/user/submitLockedAccountTicket`,
        ticketInfo
      )
      .subscribe((result) => console.log(result));
    this.http
      .post(`${this.serverUrl}/submitLockedAccountTicket`, ticketInfo)
      .subscribe(
        (result) => console.log(result),
        (error) => {
          console.log('error' + error);
        }
      );
  }
}
