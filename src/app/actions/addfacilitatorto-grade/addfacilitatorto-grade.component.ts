
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataObjectsService } from '../../services/data-objects.service';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { AssignFacilitatorComponent } from '../assign-facilitator/assign-facilitator.component';

@Component({
  selector: 'app-addfacilitatorto-grade',
  imports: [MatToolbarModule, MatInputModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './addfacilitatorto-grade.component.html',
  styleUrl: './addfacilitatorto-grade.component.css'
})
export class AddfacilitatortoGradeComponent implements OnInit{
   details:any
   staffID:any
private bottomSheet=inject(MatBottomSheet)
submit() {

let data={
  staffID:this.staffID
}
this.academicservice.findFacilitator(data).subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,'')
  }else{
    this.dataobjectservice.facilitatorsData=response
    this.bottomSheet.open(AssignFacilitatorComponent)
    this.dataobjectservice.gradeID=this.details
  }
})
}
dismiss() {
this._bottomSheetRef.dismiss()
}
   private _bottomSheetRef =inject<MatBottomSheetRef<AddfacilitatortoGradeComponent>>(MatBottomSheetRef);
 constructor(private dataobjectservice:DataObjectsService,private snackbar:SnackbarService,private academicservice:AcademicService){
  this.details=dataobjectservice.gradeID

 }
   ngOnInit(): void {
 //console.log(this.details)
 }

}
