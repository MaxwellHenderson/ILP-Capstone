import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/user`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  signup(signupRef: any) {
    console.log(signupRef);
    return this.http.post(`${this.serverUrl}/addUser`, signupRef);
  }

  signin(loginRef: any) {
    console.log('Signin');
    console.log(loginRef);
    return this.http.post(`${this.serverUrl}/getUser`, loginRef);
  }

  updateAccountFunds(userref: any): any {
    console.log(userref);
    return this.http.put(`${this.serverUrl}/updateAccountFunds`, userref, {
      responseType: 'text',
    });
  }
  updateUserProfile(userref: any): any {
    console.log(userref);
    return this.http.put(`${this.serverUrl}/updateProfile`, userref, {
      responseType: 'text',
    });
  }

  getFunds(userId: number) {
    return this.http.post(`${this.serverUrl}/getFunds`, {
      _id: userId,
    });
  }

  subtractFunds(amount: number, _id: number) {
    console.log('Subtracting funds');
    let req = {
      amount: amount,
      _id: _id,
    };
    this.http
      .post(`${this.serverUrl}/subtractFunds`, req)
      .subscribe((result) => console.log(result));
  }

  retrieveLockedUserDetails(): Observable<any> {
    return this.http.get(`${this.serverUrl}/getLockedUser`);
  }

  unlockUser(userref: any): Observable<any> {
    console.log(userref['_id']);
    return this.http.put(`${this.serverUrl}/unlockUser`, userref, {
      responseType: 'text',
    });
  }

  updateAccountFundsByID(userRef: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/updateAccountFundsByID`, userRef, {
      responseType: 'text',
    });
  }

  verifyUser() {}
}
