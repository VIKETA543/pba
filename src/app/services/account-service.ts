import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

  }

  loadPrices = () => {
    return this.httpClient.get(this.url + "/account/loadformprices", { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  submitprices = (data: any) => {
    return this.httpClient.post(this.url + "/account/submitprices", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  dropFormPrice = (data: any) => {
    return this.httpClient.post(this.url + "/account/dropFormPrice", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  getForm = (data:any) => {
    return this.httpClient.post(this.url + "/account/getForm",data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


  payForm=(data:any)=>{
    return this.httpClient.post(this.url + "/account/payform",data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  soldforms=()=>{
    return this.httpClient.get(this.url + "/account/soldforms", { headers: new HttpHeaders().set('contentType', "application/json") })
  }

}
