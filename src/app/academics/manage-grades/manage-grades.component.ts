import { Component, inject, OnInit } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RenameGradeBottomsheetComponent } from '../../actions/rename-grade-bottomsheet/rename-grade-bottomsheet.component';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddfacilitatortoGradeComponent } from '../../actions/addfacilitatorto-grade/addfacilitatorto-grade.component';
import { DropFacilitator4rmGradeComponent } from '../../actions/drop-facilitator4rm-grade/drop-facilitator4rm-grade.component';
import { FindLearnerTOAddgradeComponent } from '../../actions/find-learner-toaddgrade/find-learner-toaddgrade.component';
import { DropLearnerFromGrameComponent } from '../../actions/drop-learner-from-grame/drop-learner-from-grame.component';

@Component({
  selector: 'app-manage-grades',
  imports: [MatToolbarModule, MatIconModule, MatRippleModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatTooltipModule],
  templateUrl: './manage-grades.component.html',
  styleUrl: './manage-grades.component.css'
})
export class ManageGradesComponent implements OnInit{
addLearner(gradeId: any,gradeName: any,DepartmentID:any) {
 this.dataOobjectservice.gradeData ={
      gradeId: gradeId,
      gradeName:gradeName,
      DepartmentID:DepartmentID
     }

    //  console.log("selected grade",gradeId, gradeName)
    this.bottomSheet.open(FindLearnerTOAddgradeComponent);
}
dropLearner=()=>{
      this.bottomSheet.open(DropLearnerFromGrameComponent);
}
data:any
details:any
private bottomSheet=inject(MatBottomSheet)
constructor(private academicservice:AcademicService,
  public dialogRef:MatDialogRef<ManageGradesComponent>,private dataOobjectservice:DataObjectsService, private snackbar:SnackbarService){

}
  ngOnInit() {
  this.academicservice.loadAllgrades().subscribe((response:any)=>{
    if(response?.message){
      this.snackbar.openSnackBar(response?.message,'')
    }else{
      if(response?.data){
        this.data=response?.data
      }else{
       this.snackbar.openSnackBar("Unknown error occured",'')
      }
    }
  })
  }
submit=()=>{
  return this.dialogRef.close({
    click:this.submit
  })
}

  openRename(gradeId: any,oldName:any) {

     this.dataOobjectservice.gradeID ={
      gradeId: gradeId,
      gradeName:oldName
     }
    this.bottomSheet.open(RenameGradeBottomsheetComponent);

  }
  openAddFacilitator(gradeId: any,oldName:any){
      this.dataOobjectservice.gradeID ={
      gradeId: gradeId,
      gradeName:oldName
     }
    //  console.log( this.dataOobjectservice.gradeID)
        this.bottomSheet.open(AddfacilitatortoGradeComponent);

  }
  dropBottomsheet=()=>{
    return this.bottomSheet.open(DropFacilitator4rmGradeComponent)
  }
}
