import { Component, OnInit } from '@angular/core';
import { Requests } from '../model.request';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-admin-viewrequests',
  templateUrl: './admin-viewrequests.component.html',
  styleUrls: ['./admin-viewrequests.component.css']
})
export class AdminViewrequestsComponent implements OnInit {

  requests?:Array<Requests>
  constructor(public requestSer:RequestService) { }

  ngOnInit(): void {
    this.requestSer.retrieveRequests().subscribe(result=>this.requests=result);
  }

}
