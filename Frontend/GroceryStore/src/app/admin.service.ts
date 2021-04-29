import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendUrlService } from './backend-url.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/product`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  addProductDetails(productRef: any) {
    this.http.post(`${this.serverUrl}/addProduct`, productRef).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }

  updateProducts(productRef: any) {
    return this.http.put(`${this.serverUrl}/updateProduct`, productRef, {
      responseType: 'text',
    });
  }

  deleteProducts(id: any): any {
    return this.http.delete(`${this.serverUrl}/deleteProduct/` + id, {
      responseType: 'text',
    });
  }
}
