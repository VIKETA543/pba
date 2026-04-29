import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Learnerservice {
admisssionNumber:any
currentGrade:any;
currentTerm:any
curentYear:any
getAdmisssionNumber(){

  return this.admisssionNumber
}
setAdmissionNumber(admisionnumber:string){
   
  return this.admisssionNumber=admisionnumber
}
getCurrentGrade(){
return this.currentGrade
}
setCurrentGrade(grade:string){
return this.currentGrade=grade
}
getCurrentTerm=()=>{
return this.currentTerm
}
setCurrentTerm=(term:any)=>{
  return this.currentTerm=term
}
getAcademicYear=()=>{
  return this.curentYear
}
setAcademicYear=(year:any)=>{
  console.log('year',year)
  return this.curentYear=year;
}
  url = environment.apiUrl;
      constructor(private httpClient: HttpClient) {
      
    }
}




