import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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



  createNew_uniform=(data:any)=>{
    return this.httpClient.post(this.url + "/billsquote/newuniform", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  loaduniforms=()=>{
    return this.httpClient.get(this.url + "/billsquote/loaduniforms", { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  

  
    submitUniformBill=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submituniformbill", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

 uniformsHistory=()=>{
return this.httpClient.get(this.url + "/billsquote/uniformsHistory", { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  
  
 uniformscurrentbill=()=>{
return this.httpClient.get(this.url + "/billsquote/uniformscurrentbill", { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  

 dropuniformBill=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/dropuniformBill", data,{ headers: new HttpHeaders().set('contentType', "application/json") })
  }
  

  // Preparation of learner bills for distribution
loadTermDetail=()=>{
  return this.httpClient.get(this.url + "/billsquote/termdetails",{ headers: new HttpHeaders().set('contentType', "application/json") })
}

loadCurrentFee=(data:any)=>{
  return this.httpClient.post(this.url + "/billsquote/loadCurrentFee",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
getFeeinArrears=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/loadarrear",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}



submitCurrentBill=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/submitcurrentbill",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

leanerFeeHistory=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/leanerFeeHistory",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

dropLearnerbill=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/dropLearnerbill",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}


// Preparation of canteen bill 


loadCurrentCanteenbill_schedule=(data:any)=>{

  return this.httpClient.post(this.url + "/billsquote/loadCurrentCanteenbill_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
Loadcateen_fee_arears=(data:any)=>{

return this.httpClient.post(this.url + "/billsquote/loadarrear",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}



submitcurrentCanteenfee_schedule=(data:any)=>{

return this.httpClient.post(this.url + "/billsquote/submitcurrentCanteenfee_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

loadcanteenfeehistory_schedule=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/loadcanteenfeehistory_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

dropcanteefee_schedule=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/dropLearnerbill",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
termBegins=(data:any)=>{
  return this.httpClient.post(this.url + "/billsquote/loadDaysinTerm",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}



// working on bus routes

load_Current_Bus_bill_schedule=(data:any)=>{

  return this.httpClient.post(this.url + "/billsquote/load_Current_Bus_bill_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
Load_bus_fee_arears=(data:any)=>{

return this.httpClient.post(this.url + "/billsquote/Load_bus_fee_arears",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}



submit_current_fee_schedule=(data:any)=>{

return this.httpClient.post(this.url + "/billsquote/submit_current_fee_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

load_bus_fee_history_schedule=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/load_bus_fee_history_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

drop_bus_fee_schedule=(data:any)=>{
return this.httpClient.post(this.url + "/billsquote/drop_bus_fee_schedule",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

}
