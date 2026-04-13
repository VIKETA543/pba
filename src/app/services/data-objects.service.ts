import { Injectable } from '@angular/core';
import { departmentList, DeptHead } from '../interfaces/academics';

@Injectable({
  providedIn: 'root'
})
export class DataObjectsService {
  deptList:departmentList[]=[]
  deptHead:DeptHead[]=[]
  image:any;
  operationInfo:any
  departmentID:any
  facilitatorsData:any
  facilitatorsImages:any
  addFacilitatorStaff:any
  gradeID:any=[]
  AddFacilitatorData:any
  gradeData:any=[]
  learernerData:any
  resultFromEditAcSession:any
  markregitersInitor:any
  marlRegisterData:any
  constructor()
  { 
    
  }
}
