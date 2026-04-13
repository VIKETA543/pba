import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationserviceService {
url=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

validateSerialLogin=(data:any)=>{
 return this.httpClient.post(this.url+"/addmissionform/applicationAuth",data,{headers:new HttpHeaders().set('contentType',"application/json")})
}

  submitApplicantBioData=(data:any)=>{

      return this.httpClient.post(this.url+"/addmissionform/ApplicantBioData",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  submitFathersDetails=(data:any)=>{
    return this.httpClient.post(this.url+"/addmissionform/fathersData",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  submitMothersDetails=(data:any)=>{
    return this.httpClient.post(this.url+"/addmissionform/mothersData",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  submitApplicantHealthdetails=(data:any)=>{
    return  this.httpClient.post(this.url+"/addmissionform/applicantHealth",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  submitapplicantcommitmentsDetails(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/applicantFeeCommitments",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  submitConsentData(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/consentData",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  submitPreviewRequest(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/preview",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  submitPassportRequest(data:any){

    return  this.httpClient.post(this.url+"/addmissionform/passportPhotos",data,{headers:new HttpHeaders().set('contentType',"multipart/form-data")})
  }

  finalSubmit(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/finalSubmit",data,{headers:new HttpHeaders().set('contentType',"multipart/form-data")})
  }
  //loading data for auditing
  loadImage(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadPassportPicture",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  loadBiodata(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/personalData",data,{headers:new HttpHeaders().set('contentType',"application/json")})

  }

  loadFathersdetails(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/fathersDetails",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }


  loadMothersDetails(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadMothersDetails",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }


  loadHealthInformation(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadApplicantHealthData",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
 
  loadpaymentDetails(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadpaymentDetails",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }  
  loadPrentconsent(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadPrentconsent",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  loadfinalStage(data:any){
    return  this.httpClient.post(this.url+"/addmissionform/loadfinalStage",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  //Admission routes
  loadAdmissionData=()=>{
   
    return  this.httpClient.post(this.url+"/admissions/admissions",{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  
  loadAdmissionIndex=()=>{
   
    return  this.httpClient.post(this.url+"/admissions/index",{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  confirmAdmission=(data:any)=>{

    return  this.httpClient.post(this.url+"/admissions/confirmAdmission",(data),{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  admissionRegister=()=>{
    return  this.httpClient.post(this.url+"/admissions/admissions-register",{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  searchRegistry=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/searchregistry",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  addRegistry=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/add-registry",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  showRegDetails=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/admission-detials",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  finddrawal=(data:any)=>{

    return this.httpClient.post(this.url+"/admissions/finddrawal",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }

  withdrawLearner=(data:any)=>{

    return this.httpClient.post(this.url+"/admissions/withdrawLearner",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  
  findWithdrawnLearner=(data:any)=>{
        return this.httpClient.post(this.url+"/admissions/findWithdrawnLearner",data,{headers:new HttpHeaders().set('contentType',"application/json")})

  }
  authoriseWithdrwal=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/authoriseWithdrwal",data,{headers:new HttpHeaders().set('contentType',"application/json")})
  }
  loadWithdrawnpartialdata=()=>{
    return this.httpClient.post(this.url+"/admissions/loadWithdrawnpartialdata",{headers:new HttpHeaders().set('contentType',"application/json")}) 
  }
  loadWithdrawnpartialdataSearch=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/loadWithdrawnpartialdata",data,{headers:new HttpHeaders().set('contentType',"application/json")}) 
 
  }

  loadWithdrawnPrintableData=(data:any)=>{
    return this.httpClient.post(this.url+"/admissions/loadWithdrawnPrintableData",data,{headers:new HttpHeaders().set('contentType',"application/json")}) 
 
  }
  loadDetailedRecords=()=>{
    return this.httpClient.post(this.url+"/admissions/loadDetailedRecords",{headers:new HttpHeaders().set('contentType',"application/json")}) 
  }
}
