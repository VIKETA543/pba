import { Component, inject, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDialogModule } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { AcademicService } from '../../services/academic.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rename-grade-bottomsheet',
  imports: [MatToolbarModule, MatInputModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './rename-grade-bottomsheet.component.html',
  styleUrl: './rename-grade-bottomsheet.component.css'
})
export class RenameGradeBottomsheetComponent implements OnInit{
 details:any
 newName:any
  private _bottomSheetRef =inject<MatBottomSheetRef<RenameGradeBottomsheetComponent>>(MatBottomSheetRef);
   constructor(private dataOobjectservice:DataObjectsService,
    private snackbar:SnackbarService,private academicservice:AcademicService
   ){
    this.details=this.dataOobjectservice.gradeID
   }
  ngOnInit(): void {
    
   }
  dismiss=()=>{
    return this._bottomSheetRef.dismiss()
  } 
  submit(){
        
      let data={
        newName:this.newName,
        GradeID:this.details.gradeId
      }
      this.academicservice.renamegrade(data).subscribe((response:any)=>{
        if(response?.success){
          this._bottomSheetRef.dismiss()
          this.snackbar.openSnackBar(response?.success,"")
        }else{
          if(response?.message){
            this.snackbar.openSnackBar(response?.message,"")
          }else{
            this.snackbar.openSnackBar("Unknown error occured. Try again","")
          }
        }
      })
  }
}
