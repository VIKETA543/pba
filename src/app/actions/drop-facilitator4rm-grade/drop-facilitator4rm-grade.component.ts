
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-drop-facilitator4rm-grade',
  imports: [ReactiveFormsModule, FormsModule, MatInputModule, MatToolbarModule, MatToolbarModule, MatFormFieldModule, MatDialogModule, MatButtonModule],
  templateUrl: './drop-facilitator4rm-grade.component.html',
  styleUrl: './drop-facilitator4rm-grade.component.css'
})
export class DropFacilitator4rmGradeComponent implements OnInit{
  facID:any
  private bottomsheet=inject<MatBottomSheetRef<DropFacilitator4rmGradeComponent>>(MatBottomSheetRef)
constructor(private academicservice:AcademicService,
  private snackbar:SnackbarService,
){}
ngOnInit(): void {
    
}
dismiss=()=>{
return this.bottomsheet.dismiss()
}
submit=()=>{
let data={
  factID:this.facID
}
this.academicservice.findstafftodel(data).subscribe((response:any)=>{
  if(response?.success){
    let id={data:response?.success.StaffId}
    let confirm=window.confirm("This action will delete the selected facilitator from the grade.")
    if(confirm){
      this.academicservice.dropfacilitator(id).subscribe((response:any)=>{
        if(response?.success){
          this.snackbar.openSnackBar(response?.success,'')
          this.bottomsheet.dismiss()
        }else{
          this.snackbar.openSnackBar(response?.message,'')
            this.bottomsheet.dismiss()
        }
      }) 
      
    }

  }else{
    if(response?.message){
      this.snackbar.openSnackBar(response?.message,'')
    }else{
      this.snackbar.openSnackBar("Unknown Error occured. Try again",'')
    }
  }
})
}
}
