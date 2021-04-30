import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendUrlService {
  //Use if running locally
  backendUrl: string = `http://localhost:9090`;

  //Use if running on AWS
  // backendUrl: string = `http://34.221.237.5:9090`;
  constructor() {}
  getBackendUrl() {
    return this.backendUrl;
  }
}
