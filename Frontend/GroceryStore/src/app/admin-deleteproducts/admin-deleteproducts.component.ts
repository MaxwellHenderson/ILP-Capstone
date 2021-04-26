import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-deleteproducts',
  templateUrl: './admin-deleteproducts.component.html',
  styleUrls: ['./admin-deleteproducts.component.css']
})
export class AdminDeleteproductsComponent implements OnInit {

  deleteMsg?:string;
  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.adminSer.deleteProducts(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }

}
