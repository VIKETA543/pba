import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
url=environment.apiUrl;
userdata:User[]=[]
image:any;
  constructor(private httpClient:HttpClient) { }

  signup=(data:any)=>{
//console.log(this.httpClient.post(this.url+"user/signup",data,{headers:new HttpHeaders().set('contentType',"application/json")}))
    return this.httpClient.post(this.url+"/user/signup",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  forgotPassword=(data:any)=>{
    return this.httpClient.post(this.url+"/user/forgotPassword",data,{
      headers:new HttpHeaders().set('contentType',"application/json")
    })
  }

  login=(data:any)=>{
  
    return this.httpClient.post(this.url+"/user/login",data,{
      headers:new HttpHeaders().set('contentType','application/json')
    })
  }
}
