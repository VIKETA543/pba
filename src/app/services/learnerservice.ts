import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Accountinterface } from '../interfaces/accountinterface';
import { Academics } from '../interfaces/academicInterface';

@Injectable({
  providedIn: 'root',
})
export class Learnerservice {
admisssionNumber:any
currentGrade:any;
currentTerm:any
curentYear:any
  learnerData:Accountinterface[]=[]
learenracademicData:Academics[]=[]


}




