import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-user-raise-ticket',
  templateUrl: './user-raise-ticket.component.html',
  styleUrls: ['./user-raise-ticket.component.css'],
})
export class UserRaiseTicketComponent implements OnInit {
  constructor(public ticketService: TicketService) {}

  ngOnInit(): void {}
  submitUnlockRequest(userId: any) {
    this.ticketService.submitLockedAccountTicket(userId);
  }
}
