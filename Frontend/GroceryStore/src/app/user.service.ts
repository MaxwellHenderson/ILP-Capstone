import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;

  constructor(public http: HttpClient) {}

  signup(signupRef: any) {
    console.log(signupRef);
    return this.http
      .post('http://localhost:9090/user/addUser', signupRef);
      
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

  //verifyUser() {}
}
