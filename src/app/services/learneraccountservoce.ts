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

// fee payment routes

    loadPaymentHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadPaymentHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadFeebalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadFeebalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postPayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postPayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }



// canteen fee routes


    loadCanteenHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadCanteenHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadCanteenbalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadCanteenbalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postCanteenPayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postCanteenPayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }



    // setting special leevy routes



    

    loadsepciallevyHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadsepciallevyHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadspeciallevybalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadspeciallevybalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postspeciallevyPayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postspeciallevyPayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }




    
    

    loadBusHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadBusHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadBusbalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadBusbalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postBusPayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postBusPayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }





        loadptadueHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadptadueHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadptaduebalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadptaduebalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postptaduePayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postptaduePayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }


    
        loadUniformHistory=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadUniformHistory", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

  loadUniformbalance=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/loadUniformbalance", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }

    postUniformPayment=(data:any)=>{
        return  this.httpClient.post(this.url + "/leaneraccount/postUniformPayment", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
    }
  }



