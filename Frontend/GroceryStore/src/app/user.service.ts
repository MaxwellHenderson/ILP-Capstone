import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

updateAccountFunds(userref:any):any{
  console.log(userref)
  return this.http.put("http://localhost:9090/user/updateFunds",userref,{responseType:'text'})
}
updateUserProfile(userref:any):any{
  console.log(userref)
  return this.http.put("http://localhost:9090/user/updateProfile",userref,{responseType:'text'})
}
}
