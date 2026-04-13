
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { DataObjectsService } from '../../services/data-objects.service';
import { DropLearnerActionComponent } from '../drop-learner-action/drop-learner-action.component';

@Component({
  selector: 'app-drop-learner-from-grame',
  imports: [MatToolbarModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './drop-learner-from-grame.component.html',
  styleUrl: './drop-learner-from-grame.component.css'
})
export class DropLearnerFromGrameComponent {
AdmissionNumber:any
 private bottomSheet = inject(MatBottomSheet);
private bottomsheetRef = inject<MatBottomSheetRef<DropLearnerFromGrameComponent>>(MatBottomSheetRef)
constructor(private dataservice:DataObjectsService, private academicservice:AcademicService,private snackbar:SnackbarService){}
submit=()=>{
let data={
  AdmissionNumber:this.AdmissionNumber
}
this.academicservice.learnerTodrop(data).subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,'')
  }else{
    this.dataservice.learernerData=response?.data
 
    this.bottomSheet.open(DropLearnerActionComponent);
  }
})
}
dismiss=()=>{
this.bottomsheetRef.dismiss();
}
}
