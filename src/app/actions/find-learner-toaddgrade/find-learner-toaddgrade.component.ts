
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataObjectsService } from '../../services/data-objects.service';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { AddLearnerTOAddgradeComponent } from '../../academics/add-learner-toaddgrade/add-learner-toaddgrade.component';



@Component({
  selector: 'app-find-learner-toaddgrade',
  imports: [MatToolbarModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './find-learner-toaddgrade.component.html',
  styleUrl: './find-learner-toaddgrade.component.css'
})
export class FindLearnerTOAddgradeComponent {
  selected:any
  LearnerID: any;
  learernerData:any
  Photo:any
  private bottomSheet = inject(MatBottomSheet);
  private bottomsheetRef=inject<MatBottomSheetRef<FindLearnerTOAddgradeComponent>>(MatBottomSheetRef)
  constructor(private dataservice:DataObjectsService,
    private academicservice:AcademicService,
   public sanitizer:DomSanitizer, private snackbar:SnackbarService
  ){
    this.selected=dataservice.gradeData

  }
dismiss() {
this.bottomsheetRef.dismiss()
}
submit() {
 let data={
  LearnerID:this.LearnerID
 }
 this.academicservice.findLearner(data).subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,"")
  }else{
    this.dataservice.learernerData=response?.data
    this.bottomSheet.open(AddLearnerTOAddgradeComponent)
  }
 })
}


}
