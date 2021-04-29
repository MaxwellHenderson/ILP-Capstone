import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(public http: HttpClient) {}

  // retrieveOrders(): Observable<Ticket[]> {
  //   return this.http.get<Ticket[]>('http://localhost:9090/ticket/viewTickets');
  // }
  
  submitLockedAccountTicket(userId: any) {''
    let ticketInfo = {
      userId: Number(userId),
      ticketDesc: 'Account needs to be unlocked',
    };
    console.log(ticketInfo);
    this.http
      .post(
        'http://localhost:9090/ticket/submitLockedAccountTicket',
        ticketInfo
      )
      .subscribe(
        (result) => console.log(result),
        (error) => {
          console.log('error' + error);
        }
      );
  }
}
