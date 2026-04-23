import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Accountinterface } from '../interfaces/accountinterface';

@Injectable({
  providedIn: 'root',
})
export class LearneraccountServcie {
  
    url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

  }
 learnerData:Accountinterface[]=[]
    getLeaner(data:any){
      return  this.httpClient.post(this.url + "/leaneraccount/findlearner", data, { headers: new HttpHeaders().set('contentType', "application/json") })
    }
    loadAcademicDetails(){
      return  this.httpClient.get(this.url + "/leaneraccount/academicdata", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


    department(){
      return  this.httpClient.get(this.url + "/leaneraccount/department", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


    grades(){
      return  this.httpClient.get(this.url + "/leaneraccount/grades", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


    academicTerm(){
      return  this.httpClient.get(this.url + "/leaneraccount/academicTerm", { headers: new HttpHeaders().set('contentType', "application/json") })
    }
      academicYear(){
      return  this.httpClient.get(this.url + "/leaneraccount/academicYear", { headers: new HttpHeaders().set('contentType', "application/json") })
    }

  }



