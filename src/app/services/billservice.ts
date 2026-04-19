import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Billservice {
   url = environment.apiUrl;
    constructor(private httpClient: HttpClient) {
      
    }

   getBillhistory(){
      return  this.httpClient.get(this.url + "/billsquote/loadbillhistory", { headers: new HttpHeaders().set('contentType', "application/json") })
    }
    
getCurrentBills=()=>{
     return  this.httpClient.get(this.url + "/billsquote/CurrentBills", { headers: new HttpHeaders().set('contentType', "application/json") })
}


  submitBillquote=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/savebillsquote", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }



  
  dropBill=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/dropBill", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


  
   getCanteenBillhistory(){
      return  this.httpClient.get(this.url + "/billsquote/loadcanteenbillhistory", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


getCanteenCurrentBills=()=>{
     return  this.httpClient.get(this.url + "/billsquote/CanteenCurrentBills", { headers: new HttpHeaders().set('contentType', "application/json") })
}

  dropCanteenBill=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/dropCanteenBill", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


    submitCanteenBiil=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submitCanteenBiil", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

    


  
   getBussBillhistory(){
      return  this.httpClient.get(this.url + "/billsquote/getBussBillhistory", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


getBussCurrentBills=()=>{
     return  this.httpClient.get(this.url + "/billsquote/getBussCurrentBills", { headers: new HttpHeaders().set('contentType', "application/json") })
}

  dropBussBill=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/dropBussBill", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


    submitBussBiil=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submitBussBiil", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  createNewdestination=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/newDestination", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


loadDesitnation=()=>{
    return this.httpClient.get(this.url + "/billsquote/loadDesitnation", { headers: new HttpHeaders().set('contentType', "application/json") })
  }


  

  
   getPtaBillhistory(){
      return  this.httpClient.get(this.url + "/billsquote/ptabillhistory", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


getPtaCurrentBills=()=>{
     return  this.httpClient.get(this.url + "/billsquote/ptaCurrentBills", { headers: new HttpHeaders().set('contentType', "application/json") })
}

  dropPtaBill=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/dropptaBill", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


    submitPtaBiil=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submitptaBiil", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }





     speciallevyhistory(){
      return  this.httpClient.get(this.url + "/billsquote/speciallevyhistory", { headers: new HttpHeaders().set('contentType', "application/json") })
    }


sepciallevyCurrentBills=()=>{
     return  this.httpClient.get(this.url + "/billsquote/sepciallevyCurrentBills", { headers: new HttpHeaders().set('contentType', "application/json") })
}

  dropsepciallevy=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/dropsepciallevy", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }


    submitspeciallevy=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submitspeciallevy", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
}
