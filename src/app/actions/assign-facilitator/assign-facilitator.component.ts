import { Component, inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-assign-facilitator',
  imports: [MatToolbarModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatDialogActions],
  templateUrl: './assign-facilitator.component.html',
  styleUrl: './assign-facilitator.component.css'
})
export class AssignFacilitatorComponent implements OnInit {

dismiss() {
this.bottomsheetRef.dismiss()
}
  private bottomsheetRef = inject<MatBottomSheetRef<AssignFacilitatorComponent>>(MatBottomSheetRef)
  data: any
  facilitator: any;
  department: any;
  image: any
  gradeDetails:any
  constructor(private dataObject: DataObjectsService, 
    private academicservice:AcademicService, 
    private snackbar:SnackbarService, public sanitizer:DomSanitizer) {
   this.gradeDetails=dataObject.gradeID

    this.data = dataObject.facilitatorsData
      console.log(this.data) 
  }
  ngOnInit(): void {
    
  this.facilitator = this.data.staff 

     this.department = this.data.departments 
  
     this.image = this.data.image   
   
  }
  submit() {
    let date = new Date()
    let day=date.getDay()
    let month=date.getMonth()
    let year=date.getFullYear()
let data={
  gradeid:this.gradeDetails.gradeId,
  department:this.department[0].AssignedDepartment,
  facilitator:this.facilitator.StaffID,
  assignedDate:year+"-"+month+"-"+day
}
this.academicservice.assignedgradefacilitator(data).subscribe((response:any)=>{
  if(response?.success){
this.snackbar.openSnackBar(response?.success,'')
this.bottomsheetRef.dismiss()
  }else{
    if(response?.message){
      this.snackbar.openSnackBar(response?.message,'')
      this.bottomsheetRef.dismiss()
    }else{
      this.snackbar.openSnackBar("Unknown error occured",'')
      this.bottomsheetRef.dismiss()
    }
  }
})
}
}
