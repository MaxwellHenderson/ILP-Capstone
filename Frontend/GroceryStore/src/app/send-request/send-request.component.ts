import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  requestRef=new FormGroup({
    rid:new FormControl(),
    request:new FormControl()
  });

  msg:string=""

  constructor(public reqServ:RequestService) { }

  ngOnInit(): void {

  }

  addRequest(){

      console.log(this.requestRef.value);   // all value 
      let reqTitle1 = this.requestRef.get("reqTitle")?.value;  // get specific control value. 
      let reqDesc1 = this.requestRef.get("reqDesc")?.value;
      console.log(reqTitle1+" "+reqDesc1);

      this.reqServ.storeRequestDetailsInfo(this.requestRef.value);
      alert("Request sent successfully!")
      //send request to the backend to update request_collection, use the request-service
    }

}

