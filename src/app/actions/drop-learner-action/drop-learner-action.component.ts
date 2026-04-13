import { Component, inject } from '@angular/core';
import { DataObjectsService } from '../../services/data-objects.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer'
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-drop-learner-action',
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
],
  templateUrl: './drop-learner-action.component.html',
  styleUrl: './drop-learner-action.component.css'
})
export class DropLearnerActionComponent {
  private bottomsheet=inject<MatBottomSheetRef<DropLearnerActionComponent>>(MatBottomSheetRef)
dismiss() {
this.bottomsheet.dismiss()
}
submit() {
let data={
  AdmissionNumber:this.learnerData.AdmissionNumber,

}
this.academicservice.droplearneraction(data).subscribe((response:any)=>{
  this.bottomsheet.dismiss()
  this.snackbar.openSnackBar(response?.message,'');
})
}
  learnerData:any
  Photo:any
constructor(private snackbar:SnackbarService, private academicservice:AcademicService, private dataservice:DataObjectsService,public sanitizer:DomSanitizer){
  this.learnerData=this.dataservice.learernerData;
  console.log(this.learnerData)
    
    var buffer = new Buffer(this.learnerData.Image);
    let base64String = buffer.toString('base64')
    this.Photo = base64String;
}
}
