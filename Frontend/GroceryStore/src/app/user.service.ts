import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;

  constructor(public http: HttpClient) {}

  signup(signupRef: any) {
    console.log(signupRef);
    return this.http.post('http://localhost:9090/user/addUser', signupRef);
  }

  signin(loginRef: any) {
    console.log(loginRef);
    return this.http.post('http://localhost:9090/user/getUser', loginRef);
  }

  updateAccountFunds(userref: any): any {
    console.log(userref);
    return this.http.put(
      'http://localhost:9090/user/updateAccountFunds',
      userref,
      { responseType: 'text' }
    );
  }
  updateUserProfile(userref: any): any {
    console.log(userref);
    return this.http.put('http://localhost:9090/user/updateProfile', userref, {
      responseType: 'text',
    });
  }

  retrieveLockedUserDetails(): Observable<any> {
    return this.http.get('http://localhost:9090/user/getLockedUser');
  }

  unlockUser(userref: any): Observable<any> {
    console.log(userref['_id']);
    return this.http.put('http://localhost:9090/user/unlockUser', userref, {
      responseType: 'text',
    });
  }

  updateAccountFundsByID(userRef:any): Observable<any>{
    return this.http.put(
      'http://localhost:9090/user/updateAccountFundsByID',
      userRef,
      {
        responseType: 'text',
      }
    );
  }

  verifyUser() {}
}
